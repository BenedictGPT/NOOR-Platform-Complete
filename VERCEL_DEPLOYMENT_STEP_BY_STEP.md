# NOOR Platform - Vercel Deployment Guide

**Complete Step-by-Step Production Deployment**  
**Date**: November 4, 2024  
**Author**: Manus AI  
**Repository**: https://github.com/BenedictGPT/NOOR-Platform-Complete

---

## Overview

This guide provides complete step-by-step instructions for deploying the NOOR Platform to Vercel production environment. The platform consists of two separate Vercel projects: **Frontend** (Next.js) and **Backend** (FastAPI/Python).

**Estimated Time**: 45-60 minutes  
**Prerequisites**: GitHub account, Vercel account, API keys ready  
**Outcome**: Production-ready deployment with custom domains

---

## Part 1: Vercel Account Setup

### Step 1: Create Vercel Account

If you don't already have a Vercel account, create one now.

**Instructions**:

1. Go to **https://vercel.com/signup**

2. Choose your sign-up method:
   - **GitHub** (Recommended - easiest integration)
   - **GitLab**
   - **Bitbucket**
   - **Email**

3. Click **"Continue with GitHub"**

4. Authorize Vercel to access your GitHub account

5. Complete the account setup:
   - Enter your name
   - Choose account type: **Personal** or **Team**
   - For production, consider **Team** ($20/month per member)

6. Verify your email address

**Result**: You now have a Vercel account and are logged into the dashboard.

---

### Step 2: Install Vercel CLI (Optional but Recommended)

The Vercel CLI allows you to deploy from your terminal and manage projects locally.

**Instructions**:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Follow the prompts to authenticate
```

**Verification**:
```bash
vercel --version
# Should output: Vercel CLI 33.x.x or higher
```

---

## Part 2: Frontend Deployment

### Step 3: Create Frontend Project on Vercel

**Instructions**:

1. Go to **https://vercel.com/dashboard**

2. Click **"Add New..."** → **"Project"**

3. **Import Git Repository**:
   - Click **"Import Git Repository"**
   - Select **"GitHub"**
   - Find and select: **BenedictGPT/NOOR-Platform-Complete**
   - Click **"Import"**

4. **Configure Project**:
   
   **Project Name**: `noor-frontend` (or your preferred name)
   
   **Framework Preset**: Next.js (should auto-detect)
   
   **Root Directory**: Click **"Edit"** → Enter `frontend`
   
   **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   
   **Node.js Version**: 18.x (recommended)

5. **Environment Variables** (Critical Step):
   
   Click **"Environment Variables"** and add the following:

   | Variable Name | Value | Environment |
   |---------------|-------|-------------|
   | `NEXT_PUBLIC_API_URL` | `https://noor-backend.vercel.app/api/v1` | Production |
   | `NEXT_PUBLIC_SUPABASE_URL` | `[Your Supabase URL]` | Production |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `[Your Supabase Anon Key]` | Production |
   | `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` | `[Your Stripe Public Key]` | Production |
   | `OPENAI_API_KEY` | `[Your New OpenAI Key]` | Production |
   | `ANTHROPIC_API_KEY` | `[Your New Anthropic Key]` | Production |

   **Note**: Replace `[Your...]` with actual values. We'll get Supabase values in Part 3.

6. Click **"Deploy"**

**Deployment Process**:
- Vercel will clone your repository
- Install dependencies
- Build the Next.js application
- Deploy to production

**Estimated Time**: 3-5 minutes

---

### Step 4: Verify Frontend Deployment

**Instructions**:

1. Wait for deployment to complete (green checkmark)

2. Click **"Visit"** to open your deployed frontend

3. You should see the NOOR Platform landing page with:
   - Dark theme
   - SUSE Mono typography
   - Three interface cards (Federal, Individual, Institutional)
   - Animated hero section

4. **Test Navigation**:
   - Click on each interface card
   - Verify pages load correctly
   - Check responsive design (resize browser)

5. **Note Your Frontend URL**:
   - Example: `https://noor-frontend-xxx.vercel.app`
   - Save this URL - you'll need it for backend CORS configuration

**Troubleshooting**:

If deployment fails:
- Check build logs in Vercel dashboard
- Verify environment variables are set correctly
- Ensure `frontend` root directory is specified
- Check for TypeScript errors in logs

---

## Part 3: Backend Deployment

### Step 5: Create Backend Project on Vercel

**Instructions**:

1. Go back to **https://vercel.com/dashboard**

2. Click **"Add New..."** → **"Project"**

3. **Import Same Repository**:
   - Click **"Import Git Repository"**
   - Select **BenedictGPT/NOOR-Platform-Complete** again
   - Click **"Import"**

4. **Configure Project**:
   
   **Project Name**: `noor-backend` (or your preferred name)
   
   **Framework Preset**: **Other** (Python is not auto-detected)
   
   **Root Directory**: Click **"Edit"** → Enter `backend`
   
   **Build Settings**:
   - Build Command: `pip install -r requirements.txt`
   - Output Directory: `. ` (current directory)
   - Install Command: `pip install -r requirements.txt`
   
   **Python Version**: 3.11

5. **Environment Variables** (Critical Step):
   
   Click **"Environment Variables"** and add the following:

   | Variable Name | Value | Environment |
   |---------------|-------|-------------|
   | `DATABASE_URL` | `[Your Supabase Connection String]` | Production |
   | `SUPABASE_URL` | `[Your Supabase URL]` | Production |
   | `SUPABASE_KEY` | `[Your Supabase Service Role Key]` | Production |
   | `SUPABASE_JWT_SECRET` | `[Your Supabase JWT Secret]` | Production |
   | `SECRET_KEY` | `[Generate Random 32-char String]` | Production |
   | `OPENAI_API_KEY` | `[Your New OpenAI Key]` | Production |
   | `ANTHROPIC_API_KEY` | `[Your New Anthropic Key]` | Production |
   | `STRIPE_SECRET_KEY` | `[Your Stripe Secret Key]` | Production |
   | `STRIPE_WEBHOOK_SECRET` | `[Your Stripe Webhook Secret]` | Production |
   | `FRONTEND_URL` | `https://noor-frontend-xxx.vercel.app` | Production |
   | `ALLOWED_ORIGINS` | `https://noor-frontend-xxx.vercel.app,https://noor-platform.ae` | Production |

   **Generate SECRET_KEY**:
   ```bash
   python3 -c "import secrets; print(secrets.token_urlsafe(32))"
   ```

   **Note**: We'll get Supabase values in the next section.

6. **Create `vercel.json` Configuration**:
   
   Vercel needs special configuration for Python/FastAPI. Create this file in the `backend` directory:

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "app/main.py",
         "use": "@vercel/python"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "app/main.py"
       }
     ]
   }
   ```

7. Click **"Deploy"**

**Deployment Process**:
- Vercel will clone your repository
- Install Python dependencies
- Deploy FastAPI application
- Create serverless functions

**Estimated Time**: 4-6 minutes

---

### Step 6: Verify Backend Deployment

**Instructions**:

1. Wait for deployment to complete (green checkmark)

2. Click **"Visit"** to open your deployed backend

3. You should see the FastAPI welcome message or docs

4. **Test API Endpoints**:
   
   Open these URLs in your browser:
   
   - Health Check: `https://noor-backend-xxx.vercel.app/api/v1/health`
   - API Docs: `https://noor-backend-xxx.vercel.app/docs`
   - OpenAPI Schema: `https://noor-backend-xxx.vercel.app/openapi.json`

5. **Verify Health Check Response**:
   ```json
   {
     "status": "healthy",
     "timestamp": "2024-11-04T...",
     "version": "1.0.0",
     "environment": "production"
   }
   ```

6. **Note Your Backend URL**:
   - Example: `https://noor-backend-xxx.vercel.app`
   - Save this URL

**Troubleshooting**:

If deployment fails:
- Check that `vercel.json` is in the `backend` directory
- Verify Python version is 3.11
- Check requirements.txt for incompatible packages
- Review build logs for specific errors
- Ensure all environment variables are set

---

## Part 4: Connect Frontend and Backend

### Step 7: Update Frontend Environment Variables

Now that you have the backend URL, update the frontend environment variables.

**Instructions**:

1. Go to **Vercel Dashboard** → **noor-frontend** project

2. Click **"Settings"** → **"Environment Variables"**

3. **Update** `NEXT_PUBLIC_API_URL`:
   - Delete the old value
   - Add new value: `https://noor-backend-xxx.vercel.app/api/v1`
   - Environment: **Production**

4. Click **"Save"**

5. **Redeploy Frontend**:
   - Go to **"Deployments"** tab
   - Click **"..."** on the latest deployment
   - Click **"Redeploy"**
   - Select **"Use existing Build Cache"**: No
   - Click **"Redeploy"**

**Result**: Frontend now points to the correct backend URL.

---

### Step 8: Update Backend CORS Configuration

Update the backend to allow requests from your frontend domain.

**Instructions**:

1. Go to **Vercel Dashboard** → **noor-backend** project

2. Click **"Settings"** → **"Environment Variables"**

3. **Update** `ALLOWED_ORIGINS`:
   - Delete the old value
   - Add new value: `https://noor-frontend-xxx.vercel.app`
   - If you have a custom domain, add it too: `https://noor-frontend-xxx.vercel.app,https://noor-platform.ae`
   - Environment: **Production**

4. **Update** `FRONTEND_URL`:
   - Delete the old value
   - Add new value: `https://noor-frontend-xxx.vercel.app`
   - Environment: **Production**

5. Click **"Save"**

6. **Redeploy Backend**:
   - Go to **"Deployments"** tab
   - Click **"..."** on the latest deployment
   - Click **"Redeploy"**

**Result**: Backend now accepts requests from your frontend.

---

## Part 5: Custom Domains (Optional)

### Step 9: Add Custom Domain to Frontend

If you have a custom domain (e.g., `noor-platform.ae`), configure it now.

**Instructions**:

1. Go to **Vercel Dashboard** → **noor-frontend** project

2. Click **"Settings"** → **"Domains"**

3. Click **"Add"**

4. Enter your domain:
   - Example: `noor-platform.ae`
   - Or subdomain: `app.noor-platform.ae`

5. Click **"Add"**

6. **Configure DNS**:
   
   Vercel will show you DNS records to add. Go to your domain registrar and add:
   
   **For Root Domain** (`noor-platform.ae`):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **For Subdomain** (`app.noor-platform.ae`):
   ```
   Type: CNAME
   Name: app
   Value: cname.vercel-dns.com
   ```

7. Wait for DNS propagation (5-60 minutes)

8. Verify:
   - Go to your custom domain in a browser
   - You should see the NOOR Platform landing page

**SSL Certificate**:
- Vercel automatically provisions SSL certificates
- Your site will be accessible via HTTPS

---

### Step 10: Add Custom Domain to Backend

**Instructions**:

1. Go to **Vercel Dashboard** → **noor-backend** project

2. Click **"Settings"** → **"Domains"**

3. Click **"Add"**

4. Enter your API subdomain:
   - Example: `api.noor-platform.ae`

5. Click **"Add"**

6. **Configure DNS**:
   ```
   Type: CNAME
   Name: api
   Value: cname.vercel-dns.com
   ```

7. Wait for DNS propagation

8. **Update Environment Variables**:
   - Update `ALLOWED_ORIGINS` to include custom domain
   - Update frontend `NEXT_PUBLIC_API_URL` to use custom domain

---

## Part 6: Testing and Verification

### Step 11: Comprehensive Testing

Test all functionality to ensure everything works in production.

**Frontend Testing**:

1. **Landing Page**:
   - [ ] Page loads without errors
   - [ ] Animations work smoothly
   - [ ] All three interface cards are visible
   - [ ] Footer links work

2. **Federal Interface**:
   - [ ] Dashboard loads
   - [ ] Navigation works
   - [ ] Charts render correctly
   - [ ] Data displays properly

3. **Individual Interface**:
   - [ ] Dashboard loads
   - [ ] Skills passport accessible
   - [ ] Learning center works
   - [ ] Gamification features display

4. **Institutional Interface**:
   - [ ] Dashboard loads
   - [ ] HCM features accessible
   - [ ] EQI tracking displays
   - [ ] Talent matching works

**Backend Testing**:

1. **Health Check**:
   ```bash
   curl https://noor-backend-xxx.vercel.app/api/v1/health
   ```

2. **API Documentation**:
   - Visit: `https://noor-backend-xxx.vercel.app/docs`
   - Verify all endpoints are listed

3. **Authentication**:
   - Test login endpoint
   - Verify JWT token generation

4. **Database Connection**:
   - Test a simple query endpoint
   - Verify Supabase connection works

**Integration Testing**:

1. **Frontend → Backend Communication**:
   - Open browser console
   - Navigate through the app
   - Check for CORS errors (should be none)
   - Verify API calls succeed

2. **Authentication Flow**:
   - Try to log in
   - Verify token is stored
   - Check protected routes work

3. **Data Flow**:
   - Create test data
   - Verify it appears in the UI
   - Check database for persistence

---

### Step 12: Performance Optimization

Optimize your deployment for production performance.

**Frontend Optimization**:

1. **Enable Vercel Analytics**:
   - Go to **noor-frontend** project
   - Click **"Analytics"** tab
   - Click **"Enable Analytics"**

2. **Enable Vercel Speed Insights**:
   - Go to **Settings** → **"Speed Insights"**
   - Click **"Enable"**

3. **Configure Caching**:
   - Vercel automatically caches static assets
   - Verify caching headers in Network tab

**Backend Optimization**:

1. **Enable Function Regions**:
   - Go to **noor-backend** project
   - Click **"Settings"** → **"Functions"**
   - Select region closest to your users (e.g., **Dubai** if available)

2. **Configure Timeout**:
   - Set function timeout to 60 seconds (max for Pro plan)
   - For longer operations, consider background jobs

3. **Enable Caching**:
   - Implement Redis caching for frequently accessed data
   - Use Vercel KV for simple key-value storage

---

## Part 7: Monitoring and Maintenance

### Step 13: Set Up Monitoring

Monitor your deployment to catch issues early.

**Vercel Monitoring**:

1. **Deployment Notifications**:
   - Go to **Settings** → **"Notifications"**
   - Enable email notifications for:
     - Deployment failures
     - Performance issues
     - Downtime alerts

2. **Log Streaming**:
   - Go to **"Logs"** tab
   - Monitor real-time logs
   - Set up log drains for external services (optional)

**External Monitoring** (Recommended):

1. **Uptime Monitoring**:
   - Use UptimeRobot (free) or Pingdom
   - Monitor both frontend and backend URLs
   - Set up alerts for downtime

2. **Error Tracking**:
   - Integrate Sentry (already configured in code)
   - Add Sentry DSN to environment variables
   - Monitor errors in real-time

3. **Performance Monitoring**:
   - Use Vercel Analytics (built-in)
   - Or integrate Google Analytics
   - Track Core Web Vitals

---

### Step 14: Backup and Disaster Recovery

Ensure you can recover from failures.

**Instructions**:

1. **Database Backups**:
   - Supabase automatically backs up daily
   - Enable point-in-time recovery (PITR) for Pro plan
   - Test restoration process

2. **Code Backups**:
   - GitHub is your source of truth
   - Ensure all changes are committed
   - Tag releases for easy rollback

3. **Environment Variables Backup**:
   - Export environment variables from Vercel
   - Store securely in password manager
   - Document all values

4. **Rollback Plan**:
   - Vercel allows instant rollback to previous deployments
   - Go to **"Deployments"** → Click **"..."** → **"Promote to Production"**

---

## Part 8: Security Hardening

### Step 15: Production Security Checklist

Ensure your deployment is secure.

**Vercel Security**:

- [ ] **HTTPS Enabled**: Automatic with Vercel
- [ ] **Environment Variables Encrypted**: Automatic
- [ ] **Secrets Not in Code**: Verified
- [ ] **CORS Configured**: Only allow your domains
- [ ] **Rate Limiting**: Implemented in backend
- [ ] **Security Headers**: Configured in middleware

**Backend Security**:

- [ ] **JWT Secrets Secure**: 32+ character random strings
- [ ] **Database Credentials Secure**: Service role key protected
- [ ] **API Keys Secure**: New keys generated, old ones revoked
- [ ] **Input Validation**: All endpoints validate input
- [ ] **SQL Injection Protection**: Using Supabase ORM
- [ ] **XSS Protection**: React escapes by default

**Frontend Security**:

- [ ] **No Secrets in Client Code**: Only NEXT_PUBLIC_ vars exposed
- [ ] **Content Security Policy**: Configured in headers
- [ ] **Subresource Integrity**: Enabled for external scripts
- [ ] **Secure Cookies**: HttpOnly, Secure, SameSite flags

---

## Part 9: Post-Deployment Tasks

### Step 16: Final Configuration

Complete these tasks after successful deployment.

**Instructions**:

1. **Update README**:
   - Add production URLs
   - Update deployment status
   - Document environment variables

2. **Configure Stripe Webhooks**:
   - Go to Stripe Dashboard
   - Add webhook endpoint: `https://noor-backend-xxx.vercel.app/api/v1/webhooks/stripe`
   - Select events to listen for
   - Copy webhook secret to environment variables

3. **Configure Email Service** (if using):
   - Set up SendGrid or AWS SES
   - Add API keys to environment variables
   - Test email sending

4. **Set Up CI/CD**:
   - Vercel automatically deploys on git push
   - Configure branch deployments:
     - `main` → Production
     - `develop` → Staging
     - Feature branches → Preview

5. **Documentation**:
   - Update deployment documentation
   - Create runbook for common issues
   - Document rollback procedures

---

## Troubleshooting Guide

### Common Issues and Solutions

**Issue: Frontend Build Fails**

**Symptoms**: Deployment fails during build step

**Solutions**:
1. Check TypeScript errors in logs
2. Verify all dependencies are in package.json
3. Ensure Node.js version is 18.x
4. Check for missing environment variables
5. Clear build cache and redeploy

---

**Issue: Backend Deployment Fails**

**Symptoms**: Python build fails or function errors

**Solutions**:
1. Verify `vercel.json` is in backend directory
2. Check Python version is 3.11
3. Review requirements.txt for incompatible packages
4. Ensure all environment variables are set
5. Check logs for specific error messages

---

**Issue: CORS Errors**

**Symptoms**: Frontend can't connect to backend

**Solutions**:
1. Verify `ALLOWED_ORIGINS` includes frontend URL
2. Check CORS middleware configuration
3. Ensure frontend uses correct backend URL
4. Test with browser console open
5. Verify both deployments are production

---

**Issue: Database Connection Fails**

**Symptoms**: Backend can't connect to Supabase

**Solutions**:
1. Verify Supabase URL and keys are correct
2. Check Supabase project is not paused
3. Ensure connection string format is correct
4. Test connection from local environment
5. Check Supabase dashboard for errors

---

**Issue: Environment Variables Not Working**

**Symptoms**: Features fail that depend on env vars

**Solutions**:
1. Verify variables are set in Vercel dashboard
2. Check variable names match exactly (case-sensitive)
3. Redeploy after adding/changing variables
4. Ensure NEXT_PUBLIC_ prefix for client-side vars
5. Check for typos in variable names

---

## Success Criteria

Your deployment is successful when:

- [ ] Frontend loads at production URL
- [ ] Backend API responds to health checks
- [ ] All three interfaces are accessible
- [ ] Authentication works end-to-end
- [ ] Database queries succeed
- [ ] No CORS errors in console
- [ ] SSL certificates are active
- [ ] Custom domains work (if configured)
- [ ] Monitoring is active
- [ ] Backups are configured

---

## Next Steps

After successful deployment:

1. **Execute UAT Plan** (Weeks 2-5)
   - Federal Interface UAT
   - Individual Interface UAT
   - Institutional Interface UAT

2. **Monitor Performance**
   - Check Vercel Analytics
   - Review error logs daily
   - Monitor uptime

3. **Iterate and Improve**
   - Fix bugs found in UAT
   - Optimize performance
   - Add new features

4. **Scale as Needed**
   - Upgrade Vercel plan if needed
   - Optimize database queries
   - Implement caching

---

## Support Resources

**Vercel Documentation**:
- https://vercel.com/docs
- https://vercel.com/docs/deployments/overview
- https://vercel.com/docs/environment-variables

**NOOR Platform Documentation**:
- Repository: https://github.com/BenedictGPT/NOOR-Platform-Complete
- See README.md for detailed information
- Check docs/ directory for specific guides

**Community Support**:
- Vercel Discord: https://vercel.com/discord
- GitHub Issues: https://github.com/BenedictGPT/NOOR-Platform-Complete/issues

---

## Conclusion

You have successfully deployed the NOOR Platform to Vercel production environment! The platform is now live and accessible to users. Continue with the Supabase setup guide to complete the database configuration.

**Deployment Status**: ✅ COMPLETE  
**Production URLs**:
- Frontend: `https://noor-frontend-xxx.vercel.app`
- Backend: `https://noor-backend-xxx.vercel.app`

🌟 **Illuminating Human Potential for UAE Vision 2071** 🇦🇪

---

**Next**: Proceed to **SUPABASE_SETUP_STEP_BY_STEP.md** for database configuration.

