"""
NOOR Platform - Enhanced Health Check Endpoints
Provides comprehensive system health and monitoring information
"""

from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from typing import Dict, Any
import os
import psutil
from datetime import datetime

from app.core.monitoring import (
    health_checker,
    performance_monitor,
    metrics_collector
)

router = APIRouter()


@router.get("/health")
async def health_check():
    """
    Basic health check endpoint
    Returns 200 if service is running
    """
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "service": "NOOR Platform API",
        "version": "7.2.0"
    }


@router.get("/health/detailed")
async def detailed_health_check():
    """
    Detailed health check with all system components
    """
    health_status = await health_checker.run_checks()
    
    # Add system metrics
    health_status["system"] = {
        "cpu_percent": psutil.cpu_percent(interval=1),
        "memory_percent": psutil.virtual_memory().percent,
        "disk_percent": psutil.disk_usage('/').percent
    }
    
    # Determine overall status code
    status_code = 200 if health_status["status"] == "healthy" else 503
    
    return JSONResponse(
        status_code=status_code,
        content=health_status
    )


@router.get("/health/ready")
async def readiness_check():
    """
    Kubernetes readiness probe
    Returns 200 when service is ready to accept traffic
    """
    try:
        # Check critical dependencies
        health_status = await health_checker.run_checks()
        
        if health_status["status"] in ["healthy", "degraded"]:
            return {"status": "ready"}
        else:
            raise HTTPException(status_code=503, detail="Service not ready")
    
    except Exception as e:
        raise HTTPException(status_code=503, detail=f"Readiness check failed: {str(e)}")


@router.get("/health/live")
async def liveness_check():
    """
    Kubernetes liveness probe
    Returns 200 when service is alive (even if degraded)
    """
    return {"status": "alive", "timestamp": datetime.utcnow().isoformat()}


@router.get("/metrics")
async def get_metrics():
    """
    Get application metrics
    """
    return {
        "performance": performance_monitor.get_metrics(),
        "application": metrics_collector.get_metrics(),
        "timestamp": datetime.utcnow().isoformat()
    }


@router.get("/metrics/performance")
async def get_performance_metrics():
    """
    Get performance metrics only
    """
    return performance_monitor.get_metrics()


@router.get("/metrics/system")
async def get_system_metrics():
    """
    Get system resource metrics
    """
    return {
        "cpu": {
            "percent": psutil.cpu_percent(interval=1),
            "count": psutil.cpu_count(),
            "per_cpu": psutil.cpu_percent(interval=1, percpu=True)
        },
        "memory": {
            "total": psutil.virtual_memory().total,
            "available": psutil.virtual_memory().available,
            "percent": psutil.virtual_memory().percent,
            "used": psutil.virtual_memory().used
        },
        "disk": {
            "total": psutil.disk_usage('/').total,
            "used": psutil.disk_usage('/').used,
            "free": psutil.disk_usage('/').free,
            "percent": psutil.disk_usage('/').percent
        },
        "network": {
            "bytes_sent": psutil.net_io_counters().bytes_sent,
            "bytes_recv": psutil.net_io_counters().bytes_recv,
            "packets_sent": psutil.net_io_counters().packets_sent,
            "packets_recv": psutil.net_io_counters().packets_recv
        }
    }


@router.post("/metrics/reset")
async def reset_metrics():
    """
    Reset performance metrics
    (Admin only in production)
    """
    performance_monitor.reset_metrics()
    
    return {
        "status": "success",
        "message": "Metrics reset successfully",
        "timestamp": datetime.utcnow().isoformat()
    }


@router.get("/version")
async def get_version():
    """
    Get API version and build information
    """
    return {
        "version": "7.2.0",
        "build_date": "2024-11-04",
        "environment": os.getenv("APP_ENV", "development"),
        "python_version": os.sys.version,
        "platform": os.sys.platform
    }

