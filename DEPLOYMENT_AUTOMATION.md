# NOOR Platform - Deployment Automation & Scripts

**Automated Deployment Tools and Verification Scripts**  
**Date**: November 4, 2024  
**Author**: Manus AI  
**Repository**: https://github.com/BenedictGPT/NOOR-Platform-Complete

---

## Overview

This document provides automation scripts, verification tools, and checklists to streamline the deployment process and ensure everything is configured correctly.

---

## Part 1: Pre-Deployment Checklist

### Complete Before Deployment

Use this checklist to ensure you have everything ready before starting deployment.

**Account Setup**:
- [ ] Vercel account created and verified
- [ ] Supabase account created and verified
- [ ] GitHub repository access confirmed
- [ ] Domain registrar access (if using custom domain)

**API Keys and Credentials**:
- [ ] New OpenAI API key generated
- [ ] New Anthropic API key generated
- [ ] Stripe account set up (test and production keys)
- [ ] All keys stored securely in password manager

**Code Preparation**:
- [ ] Latest code pushed to GitHub
- [ ] All environment variables documented
- [ ] README.md updated with deployment info
- [ ] No secrets in code (verified)

**Database Planning**:
- [ ] Database schema reviewed
- [ ] Sample data prepared (if needed)
- [ ] Backup strategy planned

---

## Part 2: Environment Variables Template

### Frontend Environment Variables

Create a file to track all frontend environment variables.

**File**: `frontend/.env.production.template`

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# API Configuration
NEXT_PUBLIC_API_URL=https://noor-backend-xxx.vercel.app/api/v1

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_xxx

# Optional: Analytics
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

**Instructions**:
1. Copy this template
2. Replace `xxx` with actual values
3. Store in password manager
4. Add to Vercel environment variables

---

### Backend Environment Variables

**File**: `backend/.env.production.template`

```bash
# Database Configuration
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.xxx.supabase.co:5432/postgres
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_JWT_SECRET=your-jwt-secret-here

# Application Security
SECRET_KEY=your-secret-key-here
ALLOWED_ORIGINS=https://noor-frontend-xxx.vercel.app,https://noor-platform.ae
FRONTEND_URL=https://noor-frontend-xxx.vercel.app

# AI Services
OPENAI_API_KEY=sk-xxx
ANTHROPIC_API_KEY=sk-ant-xxx

# Payment Processing
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Optional: External Services
SENTRY_DSN=https://xxx@sentry.io/xxx
REDIS_URL=redis://xxx
```

**Instructions**:
1. Copy this template
2. Replace placeholders with actual values
3. Store in password manager
4. Add to Vercel environment variables

---

## Part 3: Deployment Scripts

### Script 1: Generate Secret Keys

Generate secure random keys for your application.

**File**: `scripts/generate-secrets.py`

```python
#!/usr/bin/env python3
"""
Generate secure secret keys for NOOR Platform deployment
"""

import secrets
import string

def generate_secret_key(length=32):
    """Generate a URL-safe secret key"""
    return secrets.token_urlsafe(length)

def generate_password(length=24):
    """Generate a strong password"""
    alphabet = string.ascii_letters + string.digits + string.punctuation
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def main():
    print("=" * 60)
    print("NOOR Platform - Secret Key Generator")
    print("=" * 60)
    print()
    
    print("SECRET_KEY (for FastAPI):")
    print(generate_secret_key(32))
    print()
    
    print("DATABASE_PASSWORD (for Supabase):")
    print(generate_password(24))
    print()
    
    print("WEBHOOK_SECRET (for Stripe):")
    print(generate_secret_key(32))
    print()
    
    print("=" * 60)
    print("⚠️  IMPORTANT: Store these securely and never commit to Git!")
    print("=" * 60)

if __name__ == "__main__":
    main()
```

**Usage**:
```bash
cd /home/ubuntu/noor-final
python3 scripts/generate-secrets.py
```

---

### Script 2: Verify Environment Variables

Check that all required environment variables are set.

**File**: `scripts/verify-env.sh`

```bash
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
```

**Usage**:
```bash
chmod +x scripts/verify-env.sh
./scripts/verify-env.sh
```

---

### Script 3: Test API Endpoints

Verify that all critical API endpoints are working.

**File**: `scripts/test-endpoints.sh`

```bash
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
```

**Usage**:
```bash
chmod +x scripts/test-endpoints.sh
./scripts/test-endpoints.sh https://noor-backend-xxx.vercel.app
```

---

### Script 4: Database Health Check

Verify database connection and table creation.

**File**: `scripts/check-database.py`

```python
#!/usr/bin/env python3
"""
NOOR Platform - Database Health Check Script
"""

import os
import sys
from supabase import create_client, Client

def check_database():
    """Check database connection and tables"""
    
    print("=" * 60)
    print("NOOR Platform - Database Health Check")
    print("=" * 60)
    print()
    
    # Get credentials from environment
    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_KEY")
    
    if not url or not key:
        print("❌ Error: SUPABASE_URL and SUPABASE_KEY must be set")
        sys.exit(1)
    
    print(f"Connecting to: {url}")
    print()
    
    try:
        # Create Supabase client
        supabase: Client = create_client(url, key)
        
        # List of expected tables
        tables = [
            "users",
            "individual_profiles",
            "institutional_profiles",
            "faculty_assessments",
            "skills",
            "job_opportunities",
            "job_applications",
            "learning_courses",
            "course_enrollments",
            "achievements",
            "user_tokens",
            "token_transactions",
            "stripe_payments"
        ]
        
        print("Checking tables:")
        print("-" * 60)
        
        all_exist = True
        
        for table in tables:
            try:
                # Try to query the table (limit 0 to not fetch data)
                result = supabase.table(table).select("*").limit(0).execute()
                print(f"✓ {table:30} EXISTS")
            except Exception as e:
                print(f"✗ {table:30} MISSING or ERROR")
                all_exist = False
        
        print()
        print("=" * 60)
        
        if all_exist:
            print("✓ All tables exist!")
            print("✓ Database is ready!")
            return 0
        else:
            print("✗ Some tables are missing!")
            print("Run the SQL scripts from SUPABASE_SETUP_STEP_BY_STEP.md")
            return 1
            
    except Exception as e:
        print(f"❌ Error connecting to database: {e}")
        return 1

if __name__ == "__main__":
    sys.exit(check_database())
```

**Usage**:
```bash
export SUPABASE_URL="https://xxx.supabase.co"
export SUPABASE_KEY="your-service-role-key"
python3 scripts/check-database.py
```

---

## Part 4: Deployment Checklist

### Pre-Deployment Checklist

Complete before starting deployment:

**Code Preparation**:
- [ ] All code committed to GitHub
- [ ] No secrets in code (verified)
- [ ] Dependencies up to date
- [ ] Build succeeds locally
- [ ] Tests pass locally

**Credentials Ready**:
- [ ] All API keys generated
- [ ] Environment variables documented
- [ ] Secrets stored in password manager
- [ ] Database password created

**Accounts Ready**:
- [ ] Vercel account created
- [ ] Supabase account created
- [ ] GitHub access confirmed
- [ ] Stripe account set up

---

### Deployment Checklist

Complete during deployment:

**Vercel Frontend**:
- [ ] Project created on Vercel
- [ ] Repository connected
- [ ] Root directory set to `frontend`
- [ ] Framework preset: Next.js
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] Site accessible at URL
- [ ] Landing page loads correctly

**Vercel Backend**:
- [ ] Project created on Vercel
- [ ] Same repository connected
- [ ] Root directory set to `backend`
- [ ] `vercel.json` created
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] API docs accessible
- [ ] Health check returns 200

**Supabase Setup**:
- [ ] Project created on Supabase
- [ ] Database password saved
- [ ] Region selected (Europe/Frankfurt)
- [ ] Credentials copied
- [ ] Database tables created
- [ ] RLS enabled and policies configured
- [ ] Sample data loaded (optional)
- [ ] Test user created

**Integration**:
- [ ] Frontend env vars updated with backend URL
- [ ] Backend env vars updated with Supabase credentials
- [ ] Backend env vars updated with frontend URL
- [ ] CORS configured correctly
- [ ] Both projects redeployed
- [ ] Frontend can call backend
- [ ] Backend can query database

---

### Post-Deployment Checklist

Complete after deployment:

**Testing**:
- [ ] Health check passes
- [ ] API docs accessible
- [ ] Landing page loads
- [ ] All three interfaces accessible
- [ ] Authentication works
- [ ] Database queries succeed
- [ ] No CORS errors
- [ ] No console errors

**Security**:
- [ ] SSL certificates active
- [ ] Environment variables encrypted
- [ ] RLS enabled on all tables
- [ ] Service role key only in backend
- [ ] No secrets exposed in client code

**Monitoring**:
- [ ] Vercel Analytics enabled
- [ ] Supabase monitoring configured
- [ ] Email alerts set up
- [ ] Error tracking configured (Sentry)
- [ ] Uptime monitoring set up

**Documentation**:
- [ ] Deployment URLs documented
- [ ] Environment variables documented
- [ ] Runbook created
- [ ] Rollback procedure documented

**Optional**:
- [ ] Custom domain configured
- [ ] DNS records updated
- [ ] Email service configured
- [ ] Stripe webhooks configured
- [ ] CI/CD pipeline configured

---

## Part 5: Verification Scripts

### Full System Verification

Run this comprehensive check after deployment.

**File**: `scripts/verify-deployment.sh`

```bash
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
        echo -e "${RED}✗ INVALID${NC}"
        ((FAILED++))
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
```

**Usage**:
```bash
chmod +x scripts/verify-deployment.sh
./scripts/verify-deployment.sh https://noor-frontend-xxx.vercel.app https://noor-backend-xxx.vercel.app
```

---

## Part 6: Rollback Procedures

### How to Rollback a Deployment

If something goes wrong, follow these steps to rollback.

**Rollback Frontend**:

1. Go to Vercel Dashboard → **noor-frontend**
2. Click **"Deployments"** tab
3. Find the last working deployment
4. Click **"..."** → **"Promote to Production"**
5. Confirm the rollback

**Rollback Backend**:

1. Go to Vercel Dashboard → **noor-backend**
2. Click **"Deployments"** tab
3. Find the last working deployment
4. Click **"..."** → **"Promote to Production"**
5. Confirm the rollback

**Rollback Database** (if needed):

1. Go to Supabase Dashboard → **Settings** → **"Database"**
2. Click **"Backups"**
3. Select the backup to restore
4. Click **"Restore"**
5. Confirm the restoration

**Important**: Database rollback will lose data created after the backup. Use with caution.

---

## Part 7: Troubleshooting Scripts

### Debug Environment Variables

Check which environment variables are set in Vercel.

**File**: `scripts/debug-env.js`

```javascript
// NOOR Platform - Environment Variables Debug Script
// Run this in the Vercel deployment logs or locally

console.log("=" .repeat(60));
console.log("NOOR Platform - Environment Variables Debug");
console.log("=" .repeat(60));
console.log("");

// Frontend variables (safe to log)
console.log("Frontend Variables:");
console.log("-------------------");
console.log("NEXT_PUBLIC_SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓ Set" : "✗ Not set");
console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✓ Set" : "✗ Not set");
console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL ? "✓ Set" : "✗ Not set");
console.log("NEXT_PUBLIC_STRIPE_PUBLIC_KEY:", process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ? "✓ Set" : "✗ Not set");

console.log("");

// Backend variables (DO NOT log values, only check if set)
console.log("Backend Variables:");
console.log("------------------");
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✓ Set" : "✗ Not set");
console.log("SUPABASE_URL:", process.env.SUPABASE_URL ? "✓ Set" : "✗ Not set");
console.log("SUPABASE_KEY:", process.env.SUPABASE_KEY ? "✓ Set" : "✗ Not set");
console.log("SECRET_KEY:", process.env.SECRET_KEY ? "✓ Set" : "✗ Not set");
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY ? "✓ Set" : "✗ Not set");
console.log("ANTHROPIC_API_KEY:", process.env.ANTHROPIC_API_KEY ? "✓ Set" : "✗ Not set");

console.log("");
console.log("=" .repeat(60));
```

**Usage**:
```bash
node scripts/debug-env.js
```

---

## Part 8: Continuous Deployment

### GitHub Actions Workflow (Optional)

Automate deployment on git push.

**File**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main
      - develop

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Install Vercel CLI
        run: npm install -g vercel
      
      - name: Deploy Frontend to Vercel
        run: |
          cd frontend
          vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_FRONTEND_PROJECT_ID }}
      
      - name: Deploy Backend to Vercel
        run: |
          cd backend
          vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_BACKEND_PROJECT_ID }}
      
      - name: Run Tests
        run: |
          ./scripts/verify-deployment.sh
```

**Setup**:
1. Add secrets to GitHub repository settings
2. Get Vercel token from Vercel dashboard
3. Get org ID and project IDs from Vercel
4. Commit workflow file

---

## Conclusion

You now have a complete set of automation scripts and checklists to streamline your deployment process. Use these tools to:

- Generate secure secrets
- Verify environment variables
- Test API endpoints
- Check database health
- Verify full deployment
- Rollback if needed
- Debug issues

**Next Steps**:
1. Run pre-deployment checklist
2. Execute deployment following the guides
3. Run verification scripts
4. Begin UAT execution

🌟 **Illuminating Human Potential for UAE Vision 2071** 🇦🇪

