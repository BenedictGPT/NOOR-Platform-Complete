#!/bin/bash

# NOOR Platform - API Endpoint Testing Script

# Configuration
BACKEND_URL="${1:-https://noor-backend-xxx.vercel.app}"
API_BASE="$BACKEND_URL/api/v1"

echo "=================================================="
echo "NOOR Platform - API Endpoint Testing"
echo "=================================================="
echo "Backend URL: $BACKEND_URL"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Test counter
PASSED=0
FAILED=0

# Function to test endpoint
test_endpoint() {
    local name=$1
    local url=$2
    local expected_code=${3:-200}
    
    echo -n "Testing $name... "
    
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$response" -eq "$expected_code" ]; then
        echo -e "${GREEN}✓ PASS${NC} (HTTP $response)"
        ((PASSED++))
    else
        echo -e "${RED}✗ FAIL${NC} (HTTP $response, expected $expected_code)"
        ((FAILED++))
    fi
}

# Test endpoints
echo "Core Endpoints:"
echo "---------------"
test_endpoint "Health Check" "$API_BASE/health" 200
test_endpoint "API Docs" "$BACKEND_URL/docs" 200
test_endpoint "OpenAPI Schema" "$BACKEND_URL/openapi.json" 200

echo ""
echo "Authentication Endpoints:"
echo "-------------------------"
test_endpoint "Login Endpoint" "$API_BASE/auth/login" 422  # Expects validation error without body
test_endpoint "Register Endpoint" "$API_BASE/auth/register" 422

echo ""
echo "Public Endpoints:"
echo "-----------------"
test_endpoint "Courses List" "$API_BASE/courses" 200
test_endpoint "Jobs List" "$API_BASE/jobs" 200

echo ""
echo "=================================================="
echo "Results: $PASSED passed, $FAILED failed"
echo "=================================================="

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✓ All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}✗ Some tests failed!${NC}"
    exit 1
fi

