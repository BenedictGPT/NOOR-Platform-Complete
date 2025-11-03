#!/bin/bash
# NOOR Platform - Health Check Script

BACKEND_URL=${1:-"https://api.noor-platform.ae"}

echo "Running health checks for NOOR Platform..."
echo "=========================================="

# Basic health check
echo -n "Basic Health Check: "
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BACKEND_URL/api/v1/health")
if [ "$HTTP_CODE" == "200" ]; then
    echo "✓ PASSED"
else
    echo "✗ FAILED (HTTP $HTTP_CODE)"
fi

# Detailed health check
echo -n "Detailed Health Check: "
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BACKEND_URL/api/v1/health/detailed")
if [ "$HTTP_CODE" == "200" ]; then
    echo "✓ PASSED"
else
    echo "✗ FAILED (HTTP $HTTP_CODE)"
fi

# Performance metrics
echo -n "Performance Metrics: "
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BACKEND_URL/api/v1/metrics")
if [ "$HTTP_CODE" == "200" ]; then
    echo "✓ PASSED"
else
    echo "✗ FAILED (HTTP $HTTP_CODE)"
fi

echo "=========================================="
echo "Health check complete"
