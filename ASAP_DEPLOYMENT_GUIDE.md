# NOOR Platform - ASAP Deployment Guide (No Custom Domain)

**Target**: Deploy to production ASAP using Vercel subdomains  
**Timeline**: 1-4 weeks  
**Date**: November 4, 2024

---

## 🚀 Fast-Track Deployment Plan

Since you want to deploy **ASAP** without waiting for custom domains, we'll use Vercel's free subdomains initially. You can add custom domains later without redeploying.

---

## Week 1: Immediate Deployment (This Week)

### Day 1: Security & Setup (TODAY)

#### ⚠️ CRITICAL: Revoke Exposed API Keys
1. Revoke Anthropic key at https://console.anthropic.com
2. Revoke OpenAI key at https://platform.openai.com/api-keys
3. Generate new keys (see `API_KEY_SECURITY_GUIDE.md`)

#### Set Up Vercel Account
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login
# Follow prompts to log in via browser
```

#### Prepare Environment Variables

Create `backend/.env.production`:
```bash
# Application
APP_ENV=production
APP_NAME="NOOR Platform"
DEBUG=false

# Database - Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-anon-key
SUPABASE_SERVICE_KEY=your-supabase-service-key

# Security
SECRET_KEY=generate-new-strong-secret-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# AI APIs (USE NEW KEYS)
ANTHROPIC_API_KEY=your-new-anthropic-key
OPENAI_API_KEY=your-new-openai-key

# Rate Limiting
RATE_LIMIT_PER_MINUTE=60
RATE_LIMIT_PER_HOUR=1000
```

Create `frontend/.env.production`:
```bash
# Will be updated after backend deployment
NEXT_PUBLIC_API_URL=https://noor-backend-xxx.vercel.app
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_APP_ENV=production
```

---

### Day 2: Deploy Backend

#### Step 1: Navigate to Backend
```bash
cd /path/to/NOOR-Platform-Complete/backend
```

#### Step 2: Create Vercel Project
```bash
vercel
# Answer prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? noor-backend
# - Directory? ./
# - Override settings? No
```

This creates a **staging deployment** first.

#### Step 3: Add Environment Variables

**Option A: Via CLI** (Recommended for bulk)
```bash
# Create a script to add all variables
cat > add-env-vars.sh << 'EOF'
#!/bin/bash
vercel env add ANTHROPIC_API_KEY production
vercel env add OPENAI_API_KEY production
vercel env add SUPABASE_URL production
vercel env add SUPABASE_KEY production
vercel env add SECRET_KEY production
# ... add all other variables
EOF

chmod +x add-env-vars.sh
./add-env-vars.sh
```

**Option B: Via Dashboard** (Easier for few variables)
1. Go to https://vercel.com/dashboard
2. Select `noor-backend` project
3. Settings → Environment Variables
4. Add each variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: (paste new key)
   - Environment: **Production** (check this box)
   - Click "Save"
5. Repeat for all variables

#### Step 4: Deploy to Production
```bash
vercel --prod
```

#### Step 5: Get Backend URL
```bash
# Your backend URL will be shown, like:
# https://noor-backend-xxx.vercel.app

# Save this URL - you'll need it for frontend
```

#### Step 6: Verify Backend Works
```bash
# Test health endpoint
curl https://noor-backend-xxx.vercel.app/api/v1/health

# Expected response:
# {"status":"healthy","timestamp":"...","service":"NOOR Platform API","version":"7.2.0"}
```

---

### Day 3: Deploy Frontend

#### Step 1: Update Frontend Environment

Edit `frontend/.env.production`:
```bash
# Update with your actual backend URL from Day 2
NEXT_PUBLIC_API_URL=https://noor-backend-xxx.vercel.app
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_APP_ENV=production
```

#### Step 2: Navigate to Frontend
```bash
cd /path/to/NOOR-Platform-Complete/frontend
```

#### Step 3: Create Vercel Project
```bash
vercel
# Answer prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? noor-frontend
# - Directory? ./
# - Override settings? No
```

#### Step 4: Add Environment Variables

Via Vercel Dashboard:
1. Go to https://vercel.com/dashboard
2. Select `noor-frontend` project
3. Settings → Environment Variables
4. Add:
   - `NEXT_PUBLIC_API_URL` = `https://noor-backend-xxx.vercel.app`
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
   - `NEXT_PUBLIC_APP_ENV` = `production`

#### Step 5: Deploy to Production
```bash
vercel --prod
```

#### Step 6: Get Frontend URL
```bash
# Your frontend URL will be shown, like:
# https://noor-frontend-xxx.vercel.app

# This is your production URL!
```

#### Step 7: Update Backend CORS

The backend needs to allow requests from your frontend URL.

Edit `backend/app/core/config.py`:
```python
CORS_ORIGINS = [
    "https://noor-frontend-xxx.vercel.app",  # Your actual Vercel URL
    "http://localhost:3000",  # For local development
]
```

Redeploy backend:
```bash
cd backend
vercel --prod
```

---

### Day 4: Comprehensive Testing

#### Smoke Tests

**Backend**:
```bash
# Health check
curl https://noor-backend-xxx.vercel.app/api/v1/health

# Detailed health
curl https://noor-backend-xxx.vercel.app/api/v1/health/detailed

# Metrics
curl https://noor-backend-xxx.vercel.app/api/v1/metrics
```

**Frontend**:
1. Open https://noor-frontend-xxx.vercel.app in browser
2. Verify landing page loads
3. Check all three interface cards are visible
4. Click on each interface to verify routing works

#### Integration Tests

**Test User Registration**:
1. Go to Individual Interface
2. Click "Register"
3. Fill out form
4. Verify email is sent (if SendGrid configured)
5. Verify user is created in Supabase

**Test AI Features**:
1. Try Radiant AI chat (should use Anthropic)
2. Try job matching (should use OpenAI)
3. Verify responses are generated

**Test Database**:
1. Create a test user
2. Verify data appears in Supabase dashboard
3. Test data retrieval via API

#### Performance Tests

```bash
# Load test with Apache Bench
ab -n 100 -c 10 https://noor-backend-xxx.vercel.app/api/v1/health

# Expected:
# - All requests successful
# - Average response time < 500ms
# - No errors
```

---

### Day 5-7: UAT Preparation

#### Create Test Accounts

**Federal Users**:
```bash
# Create via API or Supabase dashboard
# Email: federal.test1@noor.ae
# Role: federal_admin
```

**Individual Users**:
```bash
# Create via registration flow
# Email: individual.test1@gmail.com
# Role: individual
```

**Institutional Users**:
```bash
# Create via API or Supabase dashboard
# Email: employer.test1@company.ae
# Role: institutional_admin
```

#### Prepare UAT Materials

1. **Test Scenarios Document**
   - Federal: 32 scenarios (from UAT plan)
   - Individual: 36 scenarios
   - Institutional: 24 scenarios

2. **Feedback Form**
   - Google Form or Typeform
   - Questions about usability, bugs, features

3. **Bug Tracking**
   - GitHub Issues
   - Or Jira/Trello board

#### Recruit Testers

**Federal** (3-5 people):
- Government employees
- Policy makers
- HR professionals

**Individual** (10-15 people):
- UAE citizens
- Job seekers
- Students
- Career changers

**Institutional** (5-8 people):
- HR managers
- Recruiters
- Training coordinators
- Business owners

---

## Week 2-3: UAT Execution

### Parallel UAT (All Interfaces)

To save time, run all three UATs in parallel:

**Week 2**:
- **Days 1-3**: Onboarding and training
  - Send access credentials
  - Provide user guides
  - Host orientation session

- **Days 4-7**: Active testing
  - Testers execute scenarios
  - Report bugs via form/GitHub
  - Daily standup to address blockers

**Week 3**:
- **Days 1-3**: Continued testing
  - Focus on integration scenarios
  - Cross-interface workflows
  - Performance testing

- **Days 4-5**: Feedback collection
  - Compile bug reports
  - Prioritize issues
  - Gather usability feedback

- **Days 6-7**: Analysis
  - Categorize bugs (critical, high, medium, low)
  - Create fix plan
  - Estimate effort

---

## Week 4: Bug Fixes & Final Deployment

### Days 1-5: Bug Fixing

**Critical Bugs** (fix immediately):
- Security vulnerabilities
- Data loss issues
- Complete feature failures
- Payment processing errors

**High Priority Bugs** (fix this week):
- Major usability issues
- Incorrect calculations
- Integration failures
- Performance problems

**Medium/Low Bugs** (post-launch):
- Minor UI issues
- Edge cases
- Nice-to-have features

### Days 6-7: Final Deployment

#### Pre-Deployment Checklist

- [ ] All critical bugs fixed
- [ ] All high priority bugs fixed
- [ ] Performance tests pass
- [ ] Security scan clean
- [ ] Database backup created
- [ ] Rollback plan ready
- [ ] Stakeholders notified

#### Deployment

```bash
# Deploy backend
cd backend
git pull origin main
vercel --prod

# Deploy frontend
cd frontend
git pull origin main
vercel --prod

# Verify deployment
./scripts/health-check.sh https://noor-backend-xxx.vercel.app
```

#### Post-Deployment Monitoring

**First 2 Hours**:
- Monitor error rates every 5 minutes
- Check user feedback channels
- Verify critical flows work
- Be ready for immediate rollback

**First 24 Hours**:
- Monitor error rates hourly
- Review performance metrics
- Address urgent issues
- Communicate with users

**First Week**:
- Daily monitoring
- User feedback analysis
- Performance optimization
- Plan next iteration

---

## 🎯 Success Metrics

| Metric | Target | Critical Threshold |
|--------|--------|-------------------|
| Uptime | > 99% | < 95% |
| Error Rate | < 1% | > 5% |
| API Response Time (p95) | < 500ms | > 2s |
| User Registration Success | > 90% | < 70% |
| UAT Satisfaction Score | > 4/5 | < 3/5 |

---

## 🔄 Adding Custom Domains Later

When you get your domains, adding them is easy:

### Step 1: Add Domain to Vercel

**Backend** (`api.noor-platform.ae`):
1. Vercel Dashboard → noor-backend → Settings → Domains
2. Add domain: `api.noor-platform.ae`
3. Vercel shows DNS records to add

**Frontend** (`noor-platform.ae`):
1. Vercel Dashboard → noor-frontend → Settings → Domains
2. Add domain: `noor-platform.ae`
3. Add domain: `www.noor-platform.ae`
4. Vercel shows DNS records to add

### Step 2: Update DNS

Add these records at your DNS provider:

**For Backend**:
```
Type: CNAME
Name: api
Value: cname.vercel-dns.com
```

**For Frontend**:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Update Environment Variables

Update `NEXT_PUBLIC_API_URL` in frontend:
```bash
NEXT_PUBLIC_API_URL=https://api.noor-platform.ae
```

Redeploy frontend:
```bash
cd frontend
vercel --prod
```

### Step 4: Update Backend CORS

Update `CORS_ORIGINS` in backend:
```python
CORS_ORIGINS = [
    "https://noor-platform.ae",
    "https://www.noor-platform.ae"
]
```

Redeploy backend:
```bash
cd backend
vercel --prod
```

**Done!** Your custom domains are now live.

---

## 📋 Complete Dependency Checklist

### ✅ Already Complete

- [x] Frontend code (36,046+ lines)
- [x] Backend code (14,527 lines)
- [x] Three interfaces (Federal, Individual, Institutional)
- [x] Security middleware (rate limiting, headers, CORS)
- [x] Monitoring system (health checks, metrics)
- [x] Caching system
- [x] Documentation (60+ files)
- [x] Deployment scripts

### ⏳ In Progress (This Week)

- [ ] Revoke exposed API keys
- [ ] Generate new API keys
- [ ] Configure Vercel projects
- [ ] Add environment variables
- [ ] Deploy backend to Vercel
- [ ] Deploy frontend to Vercel
- [ ] Comprehensive testing

### 📅 Upcoming (Week 2-4)

- [ ] UAT execution (all interfaces)
- [ ] Bug fixes
- [ ] Performance optimization
- [ ] Final production deployment

### 🔮 Future (Post-Launch)

- [ ] Custom domains
- [ ] Stripe integration (when ready)
- [ ] SendGrid integration (when ready)
- [ ] Advanced analytics
- [ ] Mobile app (if needed)

---

## 🆘 Troubleshooting

### Deployment Fails

**Error**: "Build failed"
**Solution**: Check Vercel logs, verify all dependencies in `package.json` or `requirements.txt`

**Error**: "Environment variable not found"
**Solution**: Add missing variable in Vercel Dashboard → Settings → Environment Variables

### API Calls Fail

**Error**: "CORS error"
**Solution**: Update `CORS_ORIGINS` in backend to include frontend URL

**Error**: "401 Unauthorized"
**Solution**: Check API keys are correct in environment variables

**Error**: "429 Too Many Requests"
**Solution**: Rate limit hit, adjust limits or implement caching

### Database Connection Fails

**Error**: "Connection refused"
**Solution**: Verify `SUPABASE_URL` and `SUPABASE_KEY` are correct

**Error**: "Row Level Security policy violation"
**Solution**: Check RLS policies in Supabase, ensure user has permissions

---

## 📞 Support

**Vercel Support**: https://vercel.com/support  
**Supabase Support**: https://supabase.com/support  
**Anthropic Support**: support@anthropic.com  
**OpenAI Support**: https://help.openai.com

---

## ✅ Final Checklist

### Before Deployment
- [ ] Revoked exposed API keys
- [ ] Generated new API keys
- [ ] Tested new keys work
- [ ] Set usage limits on APIs
- [ ] Created Vercel account
- [ ] Installed Vercel CLI
- [ ] Prepared environment variables

### During Deployment
- [ ] Deployed backend to Vercel
- [ ] Added backend environment variables
- [ ] Verified backend health endpoint
- [ ] Deployed frontend to Vercel
- [ ] Added frontend environment variables
- [ ] Updated backend CORS with frontend URL
- [ ] Verified frontend loads

### After Deployment
- [ ] Ran smoke tests
- [ ] Ran integration tests
- [ ] Ran performance tests
- [ ] Created test accounts
- [ ] Prepared UAT materials
- [ ] Recruited testers
- [ ] Set up monitoring alerts

---

**Timeline**: 1-4 weeks to production  
**Current URLs**: Vercel subdomains (can add custom domains later)  
**Status**: Ready to deploy once API keys are secured

🚀 **Let's get NOOR Platform live ASAP!**

---

**Next Step**: Revoke exposed API keys and generate new ones, then we deploy!

