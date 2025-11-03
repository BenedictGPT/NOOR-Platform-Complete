"""
NOOR Platform - Security Headers Middleware
Implements security best practices for HTTP headers
"""

from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """
    Middleware to add security headers to all responses
    """
    
    def __init__(self, app, config: dict = None):
        super().__init__(app)
        self.config = config or {}
        
        # Default security headers
        self.default_headers = {
            # Prevent clickjacking
            "X-Frame-Options": "DENY",
            
            # Prevent MIME type sniffing
            "X-Content-Type-Options": "nosniff",
            
            # XSS Protection (legacy browsers)
            "X-XSS-Protection": "1; mode=block",
            
            # Referrer Policy
            "Referrer-Policy": "strict-origin-when-cross-origin",
            
            # Permissions Policy (formerly Feature Policy)
            "Permissions-Policy": (
                "geolocation=(), "
                "microphone=(), "
                "camera=(), "
                "payment=(), "
                "usb=(), "
                "magnetometer=(), "
                "gyroscope=(), "
                "accelerometer=()"
            ),
            
            # Content Security Policy
            "Content-Security-Policy": (
                "default-src 'self'; "
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com; "
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
                "font-src 'self' https://fonts.gstatic.com; "
                "img-src 'self' data: https:; "
                "connect-src 'self' https://api.stripe.com https://*.supabase.co; "
                "frame-src 'self' https://js.stripe.com; "
                "object-src 'none'; "
                "base-uri 'self'; "
                "form-action 'self'; "
                "frame-ancestors 'none'; "
                "upgrade-insecure-requests;"
            ),
            
            # Strict Transport Security (HSTS)
            # Only add in production with HTTPS
            # "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
        }
        
        # Merge with custom config
        self.headers = {**self.default_headers, **self.config}
    
    async def dispatch(self, request: Request, call_next):
        """
        Add security headers to response
        """
        response = await call_next(request)
        
        # Add security headers
        for header, value in self.headers.items():
            response.headers[header] = value
        
        # Add HSTS only in production with HTTPS
        if self._is_production() and self._is_https(request):
            response.headers["Strict-Transport-Security"] = (
                "max-age=31536000; includeSubDomains; preload"
            )
        
        return response
    
    def _is_production(self) -> bool:
        """Check if running in production"""
        import os
        return os.getenv("APP_ENV", "development") == "production"
    
    def _is_https(self, request: Request) -> bool:
        """Check if request is over HTTPS"""
        # Check X-Forwarded-Proto header (set by reverse proxies)
        proto = request.headers.get("X-Forwarded-Proto", "")
        if proto.lower() == "https":
            return True
        
        # Check request scheme
        return request.url.scheme == "https"


class CORSSecurityMiddleware(BaseHTTPMiddleware):
    """
    Enhanced CORS middleware with security considerations
    """
    
    def __init__(
        self,
        app,
        allowed_origins: list = None,
        allowed_methods: list = None,
        allowed_headers: list = None,
        expose_headers: list = None,
        max_age: int = 600,
        allow_credentials: bool = True
    ):
        super().__init__(app)
        
        # Default to restrictive settings
        self.allowed_origins = allowed_origins or []
        self.allowed_methods = allowed_methods or ["GET", "POST", "PUT", "DELETE", "PATCH"]
        self.allowed_headers = allowed_headers or [
            "Content-Type",
            "Authorization",
            "X-API-Key",
            "X-Request-ID"
        ]
        self.expose_headers = expose_headers or [
            "X-RateLimit-Limit",
            "X-RateLimit-Remaining",
            "X-RateLimit-Reset"
        ]
        self.max_age = max_age
        self.allow_credentials = allow_credentials
    
    async def dispatch(self, request: Request, call_next):
        """
        Handle CORS with security checks
        """
        origin = request.headers.get("Origin")
        
        # Handle preflight requests
        if request.method == "OPTIONS":
            if origin and self._is_origin_allowed(origin):
                return self._create_preflight_response(origin)
            else:
                return Response(status_code=403, content="Origin not allowed")
        
        # Process request
        response = await call_next(request)
        
        # Add CORS headers if origin is allowed
        if origin and self._is_origin_allowed(origin):
            response.headers["Access-Control-Allow-Origin"] = origin
            response.headers["Access-Control-Allow-Credentials"] = str(self.allow_credentials).lower()
            response.headers["Access-Control-Expose-Headers"] = ", ".join(self.expose_headers)
            response.headers["Vary"] = "Origin"
        
        return response
    
    def _is_origin_allowed(self, origin: str) -> bool:
        """
        Check if origin is in allowed list
        Supports wildcards for subdomains
        """
        if "*" in self.allowed_origins:
            return True
        
        for allowed in self.allowed_origins:
            if allowed == origin:
                return True
            
            # Support wildcard subdomains (e.g., *.example.com)
            if allowed.startswith("*."):
                domain = allowed[2:]
                if origin.endswith(domain):
                    return True
        
        return False
    
    def _create_preflight_response(self, origin: str) -> Response:
        """
        Create response for OPTIONS preflight request
        """
        headers = {
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Methods": ", ".join(self.allowed_methods),
            "Access-Control-Allow-Headers": ", ".join(self.allowed_headers),
            "Access-Control-Max-Age": str(self.max_age),
            "Access-Control-Allow-Credentials": str(self.allow_credentials).lower(),
            "Vary": "Origin"
        }
        
        return Response(status_code=204, headers=headers)


class CSRFProtectionMiddleware(BaseHTTPMiddleware):
    """
    CSRF protection middleware for state-changing operations
    """
    
    def __init__(self, app, secret_key: str, cookie_name: str = "csrf_token"):
        super().__init__(app)
        self.secret_key = secret_key
        self.cookie_name = cookie_name
        
        # Methods that require CSRF protection
        self.protected_methods = ["POST", "PUT", "DELETE", "PATCH"]
        
        # Paths to exclude from CSRF protection
        self.excluded_paths = [
            "/api/v1/auth/login",
            "/api/v1/auth/register",
            "/api/v1/health",
            "/docs",
            "/redoc",
            "/openapi.json"
        ]
    
    async def dispatch(self, request: Request, call_next):
        """
        Validate CSRF token for state-changing requests
        """
        # Skip CSRF check for excluded paths
        if request.url.path in self.excluded_paths:
            return await call_next(request)
        
        # Skip CSRF check for safe methods
        if request.method not in self.protected_methods:
            return await call_next(request)
        
        # Get CSRF token from header
        csrf_token = request.headers.get("X-CSRF-Token")
        
        # Get CSRF token from cookie
        csrf_cookie = request.cookies.get(self.cookie_name)
        
        # Validate tokens match
        if not csrf_token or not csrf_cookie or csrf_token != csrf_cookie:
            return Response(
                status_code=403,
                content='{"error": "CSRF token validation failed"}',
                media_type="application/json"
            )
        
        # Process request
        response = await call_next(request)
        
        return response
    
    def generate_csrf_token(self) -> str:
        """
        Generate a new CSRF token
        """
        import secrets
        return secrets.token_urlsafe(32)

