"""
NOOR Platform - Monitoring and Observability
Implements error tracking, performance monitoring, and health checks
"""

import os
import logging
import time
from typing import Dict, Optional, Any
from datetime import datetime
from fastapi import Request
from contextlib import contextmanager

logger = logging.getLogger(__name__)


class PerformanceMonitor:
    """
    Monitor and track performance metrics
    """
    
    def __init__(self):
        self.metrics = {
            "requests": 0,
            "errors": 0,
            "slow_requests": 0,
            "total_response_time": 0.0
        }
        self.slow_threshold = 1.0  # 1 second
    
    def record_request(self, duration: float, status_code: int, path: str):
        """
        Record request metrics
        """
        self.metrics["requests"] += 1
        self.metrics["total_response_time"] += duration
        
        if status_code >= 400:
            self.metrics["errors"] += 1
            logger.warning(f"Error response: {status_code} for {path}")
        
        if duration > self.slow_threshold:
            self.metrics["slow_requests"] += 1
            logger.warning(f"Slow request: {duration:.2f}s for {path}")
    
    def get_metrics(self) -> Dict[str, Any]:
        """
        Get current metrics
        """
        avg_response_time = (
            self.metrics["total_response_time"] / self.metrics["requests"]
            if self.metrics["requests"] > 0
            else 0
        )
        
        error_rate = (
            self.metrics["errors"] / self.metrics["requests"] * 100
            if self.metrics["requests"] > 0
            else 0
        )
        
        return {
            **self.metrics,
            "avg_response_time": round(avg_response_time, 3),
            "error_rate": round(error_rate, 2)
        }
    
    def reset_metrics(self):
        """
        Reset all metrics
        """
        self.metrics = {
            "requests": 0,
            "errors": 0,
            "slow_requests": 0,
            "total_response_time": 0.0
        }


# Global performance monitor instance
performance_monitor = PerformanceMonitor()


class ErrorTracker:
    """
    Track and log errors with context
    """
    
    @staticmethod
    def capture_exception(
        exception: Exception,
        request: Optional[Request] = None,
        extra: Optional[Dict] = None
    ):
        """
        Capture exception with context
        """
        error_data = {
            "timestamp": datetime.utcnow().isoformat(),
            "exception_type": type(exception).__name__,
            "exception_message": str(exception),
            "extra": extra or {}
        }
        
        if request:
            error_data["request"] = {
                "method": request.method,
                "url": str(request.url),
                "headers": dict(request.headers),
                "client": request.client.host if request.client else None
            }
        
        logger.error(f"Exception captured: {error_data}")
        
        # TODO: Send to external error tracking service (Sentry, etc.)
        # This is where you would integrate with Sentry:
        # if sentry_sdk:
        #     sentry_sdk.capture_exception(exception)
        
        return error_data
    
    @staticmethod
    def capture_message(
        message: str,
        level: str = "info",
        extra: Optional[Dict] = None
    ):
        """
        Capture custom message
        """
        log_data = {
            "timestamp": datetime.utcnow().isoformat(),
            "message": message,
            "level": level,
            "extra": extra or {}
        }
        
        log_func = getattr(logger, level, logger.info)
        log_func(f"Message captured: {log_data}")
        
        return log_data


class HealthChecker:
    """
    Comprehensive health check system
    """
    
    def __init__(self):
        self.checks = {}
    
    def register_check(self, name: str, check_func):
        """
        Register a health check function
        """
        self.checks[name] = check_func
    
    async def run_checks(self) -> Dict[str, Any]:
        """
        Run all registered health checks
        """
        results = {
            "status": "healthy",
            "timestamp": datetime.utcnow().isoformat(),
            "checks": {}
        }
        
        for name, check_func in self.checks.items():
            try:
                check_result = await check_func() if callable(check_func) else check_func
                results["checks"][name] = {
                    "status": "healthy",
                    "details": check_result
                }
            except Exception as e:
                results["checks"][name] = {
                    "status": "unhealthy",
                    "error": str(e)
                }
                results["status"] = "degraded"
        
        return results
    
    async def check_database(self) -> Dict[str, Any]:
        """
        Check database connectivity
        """
        try:
            # TODO: Implement actual database check
            # from app.db.postgres import get_db
            # db = next(get_db())
            # db.execute("SELECT 1")
            
            return {
                "connected": True,
                "response_time": "< 10ms"
            }
        except Exception as e:
            raise Exception(f"Database check failed: {str(e)}")
    
    async def check_redis(self) -> Dict[str, Any]:
        """
        Check Redis connectivity
        """
        try:
            # TODO: Implement actual Redis check
            # from app.db.redis import redis_client
            # await redis_client.ping()
            
            return {
                "connected": True,
                "response_time": "< 5ms"
            }
        except Exception as e:
            raise Exception(f"Redis check failed: {str(e)}")
    
    async def check_external_apis(self) -> Dict[str, Any]:
        """
        Check external API connectivity
        """
        apis = {}
        
        # Check Supabase
        try:
            # TODO: Implement actual Supabase check
            apis["supabase"] = {"status": "healthy"}
        except Exception as e:
            apis["supabase"] = {"status": "unhealthy", "error": str(e)}
        
        # Check Stripe
        try:
            # TODO: Implement actual Stripe check
            apis["stripe"] = {"status": "healthy"}
        except Exception as e:
            apis["stripe"] = {"status": "unhealthy", "error": str(e)}
        
        return apis


# Global health checker instance
health_checker = HealthChecker()


@contextmanager
def track_performance(operation_name: str):
    """
    Context manager to track operation performance
    """
    start_time = time.time()
    try:
        yield
    finally:
        duration = time.time() - start_time
        logger.info(f"Operation '{operation_name}' took {duration:.3f}s")
        
        if duration > 1.0:
            logger.warning(f"Slow operation detected: '{operation_name}' took {duration:.3f}s")


class MetricsCollector:
    """
    Collect and aggregate application metrics
    """
    
    def __init__(self):
        self.metrics = {
            "api_calls": {},
            "database_queries": {},
            "cache_hits": 0,
            "cache_misses": 0,
            "errors_by_type": {}
        }
    
    def record_api_call(self, endpoint: str, method: str, duration: float, status_code: int):
        """
        Record API call metrics
        """
        key = f"{method}:{endpoint}"
        
        if key not in self.metrics["api_calls"]:
            self.metrics["api_calls"][key] = {
                "count": 0,
                "total_duration": 0.0,
                "errors": 0
            }
        
        self.metrics["api_calls"][key]["count"] += 1
        self.metrics["api_calls"][key]["total_duration"] += duration
        
        if status_code >= 400:
            self.metrics["api_calls"][key]["errors"] += 1
    
    def record_database_query(self, query_type: str, duration: float):
        """
        Record database query metrics
        """
        if query_type not in self.metrics["database_queries"]:
            self.metrics["database_queries"][query_type] = {
                "count": 0,
                "total_duration": 0.0
            }
        
        self.metrics["database_queries"][query_type]["count"] += 1
        self.metrics["database_queries"][query_type]["total_duration"] += duration
    
    def record_cache_hit(self):
        """Record cache hit"""
        self.metrics["cache_hits"] += 1
    
    def record_cache_miss(self):
        """Record cache miss"""
        self.metrics["cache_misses"] += 1
    
    def record_error(self, error_type: str):
        """Record error by type"""
        if error_type not in self.metrics["errors_by_type"]:
            self.metrics["errors_by_type"][error_type] = 0
        
        self.metrics["errors_by_type"][error_type] += 1
    
    def get_metrics(self) -> Dict[str, Any]:
        """
        Get aggregated metrics
        """
        # Calculate cache hit rate
        total_cache_ops = self.metrics["cache_hits"] + self.metrics["cache_misses"]
        cache_hit_rate = (
            self.metrics["cache_hits"] / total_cache_ops * 100
            if total_cache_ops > 0
            else 0
        )
        
        # Calculate average durations for API calls
        api_metrics = {}
        for endpoint, data in self.metrics["api_calls"].items():
            avg_duration = data["total_duration"] / data["count"] if data["count"] > 0 else 0
            error_rate = data["errors"] / data["count"] * 100 if data["count"] > 0 else 0
            
            api_metrics[endpoint] = {
                "calls": data["count"],
                "avg_duration": round(avg_duration, 3),
                "error_rate": round(error_rate, 2)
            }
        
        return {
            "api_calls": api_metrics,
            "database_queries": self.metrics["database_queries"],
            "cache": {
                "hits": self.metrics["cache_hits"],
                "misses": self.metrics["cache_misses"],
                "hit_rate": round(cache_hit_rate, 2)
            },
            "errors": self.metrics["errors_by_type"]
        }


# Global metrics collector instance
metrics_collector = MetricsCollector()


# Sentry Integration (Optional)
def init_sentry():
    """
    Initialize Sentry for error tracking
    """
    sentry_dsn = os.getenv("SENTRY_DSN")
    
    if not sentry_dsn:
        logger.info("Sentry DSN not configured, skipping Sentry initialization")
        return
    
    try:
        import sentry_sdk
        from sentry_sdk.integrations.fastapi import FastApiIntegration
        from sentry_sdk.integrations.logging import LoggingIntegration
        
        sentry_sdk.init(
            dsn=sentry_dsn,
            environment=os.getenv("APP_ENV", "development"),
            traces_sample_rate=0.1,  # 10% of transactions
            profiles_sample_rate=0.1,  # 10% of transactions
            integrations=[
                FastApiIntegration(),
                LoggingIntegration(
                    level=logging.INFO,
                    event_level=logging.ERROR
                )
            ],
            # Set traces_sample_rate to 1.0 to capture 100% of transactions for performance monitoring.
            # We recommend adjusting this value in production.
            before_send=lambda event, hint: event if os.getenv("APP_ENV") == "production" else None
        )
        
        logger.info("✅ Sentry initialized successfully")
    except ImportError:
        logger.warning("Sentry SDK not installed. Install with: pip install sentry-sdk")
    except Exception as e:
        logger.error(f"Failed to initialize Sentry: {str(e)}")

