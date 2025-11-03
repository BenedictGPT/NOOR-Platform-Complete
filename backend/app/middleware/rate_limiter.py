"""
NOOR Platform - Rate Limiting Middleware
Implements token bucket algorithm for API rate limiting
"""

from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from datetime import datetime, timedelta
from collections import defaultdict
from typing import Dict, Tuple
import asyncio


class RateLimiter:
    """
    Token bucket rate limiter implementation
    """
    
    def __init__(self, requests_per_minute: int = 60, requests_per_hour: int = 1000):
        self.requests_per_minute = requests_per_minute
        self.requests_per_hour = requests_per_hour
        
        # Store: {client_id: (minute_count, minute_reset, hour_count, hour_reset)}
        self.clients: Dict[str, Tuple[int, datetime, int, datetime]] = defaultdict(
            lambda: (0, datetime.now(), 0, datetime.now())
        )
        
        # Cleanup task
        self.cleanup_task = None
    
    def get_client_id(self, request: Request) -> str:
        """
        Get unique client identifier from request
        Prioritizes: User ID > API Key > IP Address
        """
        # Check for authenticated user
        if hasattr(request.state, "user") and request.state.user:
            return f"user:{request.state.user.id}"
        
        # Check for API key
        api_key = request.headers.get("X-API-Key")
        if api_key:
            return f"api:{api_key}"
        
        # Fall back to IP address
        forwarded_for = request.headers.get("X-Forwarded-For")
        if forwarded_for:
            return f"ip:{forwarded_for.split(',')[0].strip()}"
        
        client_host = request.client.host if request.client else "unknown"
        return f"ip:{client_host}"
    
    def check_rate_limit(self, client_id: str) -> Tuple[bool, Dict[str, any]]:
        """
        Check if client has exceeded rate limits
        Returns: (is_allowed, rate_limit_info)
        """
        now = datetime.now()
        minute_count, minute_reset, hour_count, hour_reset = self.clients[client_id]
        
        # Reset minute counter if needed
        if now >= minute_reset:
            minute_count = 0
            minute_reset = now + timedelta(minutes=1)
        
        # Reset hour counter if needed
        if now >= hour_reset:
            hour_count = 0
            hour_reset = now + timedelta(hours=1)
        
        # Check limits
        if minute_count >= self.requests_per_minute:
            return False, {
                "limit": self.requests_per_minute,
                "remaining": 0,
                "reset": int(minute_reset.timestamp()),
                "retry_after": int((minute_reset - now).total_seconds())
            }
        
        if hour_count >= self.requests_per_hour:
            return False, {
                "limit": self.requests_per_hour,
                "remaining": 0,
                "reset": int(hour_reset.timestamp()),
                "retry_after": int((hour_reset - now).total_seconds())
            }
        
        # Increment counters
        minute_count += 1
        hour_count += 1
        self.clients[client_id] = (minute_count, minute_reset, hour_count, hour_reset)
        
        return True, {
            "limit": self.requests_per_minute,
            "remaining": self.requests_per_minute - minute_count,
            "reset": int(minute_reset.timestamp())
        }
    
    async def cleanup_old_entries(self):
        """
        Periodically cleanup old client entries to prevent memory leaks
        """
        while True:
            await asyncio.sleep(3600)  # Run every hour
            now = datetime.now()
            
            # Remove entries older than 2 hours
            expired_clients = [
                client_id for client_id, (_, _, _, hour_reset) in self.clients.items()
                if now > hour_reset + timedelta(hours=1)
            ]
            
            for client_id in expired_clients:
                del self.clients[client_id]


class RateLimitMiddleware(BaseHTTPMiddleware):
    """
    FastAPI middleware for rate limiting
    """
    
    def __init__(self, app, requests_per_minute: int = 60, requests_per_hour: int = 1000):
        super().__init__(app)
        self.limiter = RateLimiter(requests_per_minute, requests_per_hour)
        
        # Paths to exclude from rate limiting
        self.excluded_paths = [
            "/api/v1/health",
            "/docs",
            "/redoc",
            "/openapi.json"
        ]
    
    async def dispatch(self, request: Request, call_next):
        """
        Process request and apply rate limiting
        """
        # Skip rate limiting for excluded paths
        if request.url.path in self.excluded_paths:
            return await call_next(request)
        
        # Get client identifier
        client_id = self.limiter.get_client_id(request)
        
        # Check rate limit
        is_allowed, rate_info = self.limiter.check_rate_limit(client_id)
        
        if not is_allowed:
            # Rate limit exceeded
            return JSONResponse(
                status_code=429,
                content={
                    "error": "Rate limit exceeded",
                    "message": f"Too many requests. Please try again in {rate_info['retry_after']} seconds.",
                    "limit": rate_info["limit"],
                    "reset": rate_info["reset"],
                    "retry_after": rate_info["retry_after"]
                },
                headers={
                    "X-RateLimit-Limit": str(rate_info["limit"]),
                    "X-RateLimit-Remaining": "0",
                    "X-RateLimit-Reset": str(rate_info["reset"]),
                    "Retry-After": str(rate_info["retry_after"])
                }
            )
        
        # Process request
        response = await call_next(request)
        
        # Add rate limit headers to response
        response.headers["X-RateLimit-Limit"] = str(rate_info["limit"])
        response.headers["X-RateLimit-Remaining"] = str(rate_info["remaining"])
        response.headers["X-RateLimit-Reset"] = str(rate_info["reset"])
        
        return response


# Different rate limits for different tiers
class TieredRateLimiter:
    """
    Rate limiter with different tiers based on user role/subscription
    """
    
    TIERS = {
        "free": {"minute": 30, "hour": 500},
        "basic": {"minute": 60, "hour": 1000},
        "premium": {"minute": 120, "hour": 5000},
        "enterprise": {"minute": 300, "hour": 20000},
        "admin": {"minute": 1000, "hour": 100000}
    }
    
    def __init__(self):
        self.limiters = {
            tier: RateLimiter(limits["minute"], limits["hour"])
            for tier, limits in self.TIERS.items()
        }
    
    def get_user_tier(self, request: Request) -> str:
        """
        Determine user tier from request
        """
        if hasattr(request.state, "user") and request.state.user:
            user = request.state.user
            
            # Check if admin
            if hasattr(user, "role") and user.role == "admin":
                return "admin"
            
            # Check subscription level
            if hasattr(user, "subscription"):
                return user.subscription or "free"
        
        return "free"
    
    def check_rate_limit(self, request: Request) -> Tuple[bool, Dict[str, any]]:
        """
        Check rate limit based on user tier
        """
        tier = self.get_user_tier(request)
        limiter = self.limiters[tier]
        client_id = limiter.get_client_id(request)
        
        return limiter.check_rate_limit(client_id)

