#!/bin/bash

# NOOR Platform - Full Deployment Verification Script

echo "=================================================="
echo "NOOR Platform - Deployment Verification"
echo "=================================================="
echo ""

# Configuration
FRONTEND_URL="${1:-https://noor-frontend-xxx.vercel.app}"
BACKEND_URL="${2:-https://noor-backend-xxx.vercel.app}"

echo "Frontend URL: $FRONTEND_URL"
echo "Backend URL: $BACKEND_URL"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Test counters
PASSED=0
FAILED=0

# Function to test URL
test_url() {
    local name=$1
    local url=$2
    local expected_code=${3:-200}
    
    echo -n "Testing $name... "
    
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$response" -eq "$expected_code" ]; then
        echo -e "${GREEN}✓ PASS${NC} (HTTP $response)"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗ FAIL${NC} (HTTP $response, expected $expected_code)"
        ((FAILED++))
        return 1
    fi
}

# Function to check SSL
check_ssl() {
    local url=$1
    local domain=$(echo "$url" | sed -e 's|^https://||' -e 's|/.*||')
    
    echo -n "Checking SSL for $domain... "
    
    if echo | openssl s_client -servername "$domain" -connect "$domain:443" 2>/dev/null | grep -q "Verify return code: 0"; then
        echo -e "${GREEN}✓ VALID${NC}"
        ((PASSED++))
    else
        echo -e "${YELLOW}⚠ CHECK MANUALLY${NC}"
    fi
}

# Frontend Tests
echo "Frontend Tests:"
echo "---------------"
test_url "Landing Page" "$FRONTEND_URL"
test_url "Federal Interface" "$FRONTEND_URL/federal"
test_url "Individual Interface" "$FRONTEND_URL/individual"
test_url "Institutional Interface" "$FRONTEND_URL/institutional"
check_ssl "$FRONTEND_URL"

echo ""

# Backend Tests
echo "Backend Tests:"
echo "--------------"
test_url "Health Check" "$BACKEND_URL/api/v1/health"
test_url "API Documentation" "$BACKEND_URL/docs"
test_url "OpenAPI Schema" "$BACKEND_URL/openapi.json"
check_ssl "$BACKEND_URL"

echo ""

# CORS Test
echo "CORS Test:"
echo "----------"
echo -n "Testing CORS headers... "
cors_header=$(curl -s -H "Origin: $FRONTEND_URL" -I "$BACKEND_URL/api/v1/health" | grep -i "access-control-allow-origin")
if [ -n "$cors_header" ]; then
    echo -e "${GREEN}✓ PASS${NC}"
    ((PASSED++))
else
    echo -e "${RED}✗ FAIL${NC}"
    ((FAILED++))
fi

echo ""

# Response Time Test
echo "Performance Test:"
echo "-----------------"
echo -n "Testing frontend response time... "
frontend_time=$(curl -o /dev/null -s -w '%{time_total}' "$FRONTEND_URL")
echo "${frontend_time}s"

echo -n "Testing backend response time... "
backend_time=$(curl -o /dev/null -s -w '%{time_total}' "$BACKEND_URL/api/v1/health")
echo "${backend_time}s"

echo ""
echo "=================================================="
echo "Results: $PASSED passed, $FAILED failed"
echo "=================================================="

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✓ Deployment verification successful!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Test authentication flow"
    echo "2. Verify database operations"
    echo "3. Begin UAT execution"
    exit 0
else
    echo -e "${RED}✗ Deployment verification failed!${NC}"
    echo ""
    echo "Please review the failed tests and fix issues."
    exit 1
fi

