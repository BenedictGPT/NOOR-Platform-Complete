"""
NOOR Platform - Caching Utilities
Implements caching strategies for performance optimization
"""

import json
import hashlib
from typing import Any, Optional, Callable
from functools import wraps
from datetime import timedelta
import logging

logger = logging.getLogger(__name__)


class CacheManager:
    """
    Simple in-memory cache manager with TTL support
    Can be extended to use Redis in production
    """
    
    def __init__(self):
        self.cache = {}
        self.ttls = {}
    
    def get(self, key: str) -> Optional[Any]:
        """
        Get value from cache
        """
        if key in self.cache:
            # Check if expired
            if key in self.ttls:
                import time
                if time.time() > self.ttls[key]:
                    # Expired, remove from cache
                    del self.cache[key]
                    del self.ttls[key]
                    return None
            
            return self.cache[key]
        
        return None
    
    def set(self, key: str, value: Any, ttl: Optional[int] = None):
        """
        Set value in cache with optional TTL (in seconds)
        """
        self.cache[key] = value
        
        if ttl:
            import time
            self.ttls[key] = time.time() + ttl
    
    def delete(self, key: str):
        """
        Delete value from cache
        """
        if key in self.cache:
            del self.cache[key]
        
        if key in self.ttls:
            del self.ttls[key]
    
    def clear(self):
        """
        Clear all cache
        """
        self.cache.clear()
        self.ttls.clear()
    
    def get_stats(self) -> dict:
        """
        Get cache statistics
        """
        return {
            "size": len(self.cache),
            "keys": list(self.cache.keys())
        }


# Global cache instance
cache_manager = CacheManager()


def cache_key(*args, **kwargs) -> str:
    """
    Generate cache key from function arguments
    """
    key_data = {
        "args": args,
        "kwargs": kwargs
    }
    
    key_str = json.dumps(key_data, sort_keys=True, default=str)
    return hashlib.md5(key_str.encode()).hexdigest()


def cached(ttl: int = 300, key_prefix: str = ""):
    """
    Decorator to cache function results
    
    Args:
        ttl: Time to live in seconds (default: 5 minutes)
        key_prefix: Prefix for cache key
    
    Usage:
        @cached(ttl=600, key_prefix="user")
        async def get_user(user_id: int):
            return await db.get_user(user_id)
    """
    def decorator(func: Callable):
        @wraps(func)
        async def async_wrapper(*args, **kwargs):
            # Generate cache key
            func_key = f"{key_prefix}:{func.__name__}:{cache_key(*args, **kwargs)}"
            
            # Try to get from cache
            cached_value = cache_manager.get(func_key)
            if cached_value is not None:
                logger.debug(f"Cache hit for {func_key}")
                return cached_value
            
            # Cache miss, call function
            logger.debug(f"Cache miss for {func_key}")
            result = await func(*args, **kwargs)
            
            # Store in cache
            cache_manager.set(func_key, result, ttl)
            
            return result
        
        @wraps(func)
        def sync_wrapper(*args, **kwargs):
            # Generate cache key
            func_key = f"{key_prefix}:{func.__name__}:{cache_key(*args, **kwargs)}"
            
            # Try to get from cache
            cached_value = cache_manager.get(func_key)
            if cached_value is not None:
                logger.debug(f"Cache hit for {func_key}")
                return cached_value
            
            # Cache miss, call function
            logger.debug(f"Cache miss for {func_key}")
            result = func(*args, **kwargs)
            
            # Store in cache
            cache_manager.set(func_key, result, ttl)
            
            return result
        
        # Return appropriate wrapper based on function type
        import asyncio
        if asyncio.iscoroutinefunction(func):
            return async_wrapper
        else:
            return sync_wrapper
    
    return decorator


class RedisCache:
    """
    Redis-based cache implementation for production
    """
    
    def __init__(self, redis_client=None):
        self.redis = redis_client
        self.enabled = redis_client is not None
    
    async def get(self, key: str) -> Optional[Any]:
        """
        Get value from Redis cache
        """
        if not self.enabled:
            return None
        
        try:
            value = await self.redis.get(key)
            if value:
                return json.loads(value)
            return None
        except Exception as e:
            logger.error(f"Redis get error: {str(e)}")
            return None
    
    async def set(self, key: str, value: Any, ttl: Optional[int] = None):
        """
        Set value in Redis cache
        """
        if not self.enabled:
            return
        
        try:
            serialized = json.dumps(value, default=str)
            if ttl:
                await self.redis.setex(key, ttl, serialized)
            else:
                await self.redis.set(key, serialized)
        except Exception as e:
            logger.error(f"Redis set error: {str(e)}")
    
    async def delete(self, key: str):
        """
        Delete value from Redis cache
        """
        if not self.enabled:
            return
        
        try:
            await self.redis.delete(key)
        except Exception as e:
            logger.error(f"Redis delete error: {str(e)}")
    
    async def clear_pattern(self, pattern: str):
        """
        Clear all keys matching pattern
        """
        if not self.enabled:
            return
        
        try:
            keys = await self.redis.keys(pattern)
            if keys:
                await self.redis.delete(*keys)
        except Exception as e:
            logger.error(f"Redis clear pattern error: {str(e)}")


# Response caching decorator
def cache_response(ttl: int = 300, key_prefix: str = "response"):
    """
    Decorator to cache API responses
    
    Usage:
        @router.get("/users/{user_id}")
        @cache_response(ttl=600, key_prefix="user")
        async def get_user(user_id: int):
            return {"id": user_id, "name": "John"}
    """
    def decorator(func: Callable):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            # Generate cache key from request parameters
            cache_key_str = f"{key_prefix}:{func.__name__}:{cache_key(*args, **kwargs)}"
            
            # Try to get from cache
            cached_response = cache_manager.get(cache_key_str)
            if cached_response is not None:
                logger.debug(f"Response cache hit for {cache_key_str}")
                return cached_response
            
            # Cache miss, call function
            logger.debug(f"Response cache miss for {cache_key_str}")
            response = await func(*args, **kwargs)
            
            # Store in cache
            cache_manager.set(cache_key_str, response, ttl)
            
            return response
        
        return wrapper
    
    return decorator


# Cache invalidation helpers
def invalidate_cache(pattern: str):
    """
    Invalidate cache entries matching pattern
    """
    keys_to_delete = [
        key for key in cache_manager.cache.keys()
        if pattern in key
    ]
    
    for key in keys_to_delete:
        cache_manager.delete(key)
    
    logger.info(f"Invalidated {len(keys_to_delete)} cache entries matching '{pattern}'")


def invalidate_user_cache(user_id: int):
    """
    Invalidate all cache entries for a specific user
    """
    invalidate_cache(f"user:{user_id}")


def invalidate_all_cache():
    """
    Clear all cache
    """
    cache_manager.clear()
    logger.info("All cache cleared")

