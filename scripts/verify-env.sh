#!/bin/bash

# NOOR Platform - Environment Variables Verification Script

echo "=================================================="
echo "NOOR Platform - Environment Variables Check"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for missing variables
MISSING=0

# Function to check if variable is set
check_var() {
    local var_name=$1
    local var_value=${!var_name}
    
    if [ -z "$var_value" ]; then
        echo -e "${RED}✗${NC} $var_name is NOT set"
        ((MISSING++))
    else
        echo -e "${GREEN}✓${NC} $var_name is set"
    fi
}

echo "Frontend Variables:"
echo "-------------------"
check_var "NEXT_PUBLIC_SUPABASE_URL"
check_var "NEXT_PUBLIC_SUPABASE_ANON_KEY"
check_var "NEXT_PUBLIC_API_URL"
check_var "NEXT_PUBLIC_STRIPE_PUBLIC_KEY"

echo ""
echo "Backend Variables:"
echo "------------------"
check_var "DATABASE_URL"
check_var "SUPABASE_URL"
check_var "SUPABASE_KEY"
check_var "SUPABASE_JWT_SECRET"
check_var "SECRET_KEY"
check_var "OPENAI_API_KEY"
check_var "ANTHROPIC_API_KEY"
check_var "STRIPE_SECRET_KEY"
check_var "STRIPE_WEBHOOK_SECRET"
check_var "FRONTEND_URL"
check_var "ALLOWED_ORIGINS"

echo ""
echo "=================================================="
if [ $MISSING -eq 0 ]; then
    echo -e "${GREEN}✓ All environment variables are set!${NC}"
    exit 0
else
    echo -e "${RED}✗ $MISSING environment variable(s) missing!${NC}"
    exit 1
fi

