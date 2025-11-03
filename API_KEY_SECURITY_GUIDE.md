# API Key Security Guide - URGENT

**Date**: November 4, 2024  
**Status**: 🚨 **CRITICAL - IMMEDIATE ACTION REQUIRED**

---

## ⚠️ Security Incident

Your API keys were exposed in a public conversation. These keys MUST be revoked immediately to prevent unauthorized access and potential charges.

---

## 🚨 Step 1: Revoke Exposed Keys (DO THIS NOW)

### Anthropic API Key

**Exposed Key**: `sk-ant-api03-YjHYD1ZlFIJ...` (partially redacted)

**Steps to Revoke**:
1. Go to [Anthropic Console](https://console.anthropic.com)
2. Log in to your account
3. Navigate to "API Keys" section
4. Find the exposed key (check last 4 characters if needed)
5. Click "Delete" or "Revoke"
6. Confirm deletion

### OpenAI API Key

**Exposed Key**: `sk-proj-agLyyV0g-qsd6PU...` (partially redacted)

**Steps to Revoke**:
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Log in to your account
3. Navigate to "API keys" section
4. Find the exposed key
5. Click the trash icon to delete
6. Confirm deletion

---

## ✅ Step 2: Generate New Keys

### Anthropic - Generate New Key

1. In [Anthropic Console](https://console.anthropic.com)
2. Go to "API Keys"
3. Click "Create Key" or "Generate New Key"
4. Give it a name: "NOOR Platform Production"
5. **Copy the key immediately** (you won't see it again)
6. Store it securely (see Step 3)

### OpenAI - Generate New Key

1. In [OpenAI Platform](https://platform.openai.com/api-keys)
2. Click "+ Create new secret key"
3. Name it: "NOOR Platform Production"
4. Set permissions: "All" (or specific as needed)
5. **Copy the key immediately** (you won't see it again)
6. Store it securely (see Step 3)

---

## 🔒 Step 3: Store Keys Securely

### ❌ NEVER Do This:
- Post keys in chat/email/Slack
- Commit keys to Git
- Share keys in screenshots
- Store keys in plain text files
- Use keys in frontend code

### ✅ ALWAYS Do This:

**Option 1: Environment Variables (Recommended)**

Create `.env.production` file (this file is in `.gitignore`):

```bash
# backend/.env.production
ANTHROPIC_API_KEY=your-new-anthropic-key-here
OPENAI_API_KEY=your-new-openai-key-here
```

**Option 2: Vercel Environment Variables (Production)**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add each key:
   - Name: `ANTHROPIC_API_KEY`
   - Value: (paste your new key)
   - Environment: Production
   - Click "Save"

Repeat for `OPENAI_API_KEY`

**Option 3: Password Manager**

Store keys in a password manager like:
- 1Password
- LastPass
- Bitwarden
- AWS Secrets Manager
- HashiCorp Vault

---

## 📋 Step 4: Verify Keys Work

### Test Anthropic Key

```bash
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: YOUR_NEW_ANTHROPIC_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-3-opus-20240229",
    "max_tokens": 10,
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

Expected: JSON response with "content" field

### Test OpenAI Key

```bash
curl https://api.openai.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_NEW_OPENAI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4-turbo-preview",
    "messages": [{"role": "user", "content": "Hello"}],
    "max_tokens": 10
  }'
```

Expected: JSON response with "choices" field

---

## 🛡️ Step 5: Set Up Usage Limits

### Anthropic

1. In Anthropic Console → Billing
2. Set monthly spending limit (e.g., $500)
3. Enable email alerts at 50%, 75%, 90%

### OpenAI

1. In OpenAI Platform → Settings → Limits
2. Set hard limit (e.g., $100/month)
3. Set soft limit (e.g., $50/month)
4. Enable email notifications

---

## 📊 Step 6: Monitor Usage

### Anthropic

- Dashboard: https://console.anthropic.com/usage
- Check daily for unexpected usage
- Review API call logs

### OpenAI

- Dashboard: https://platform.openai.com/usage
- Check daily for unexpected usage
- Review API call logs

---

## 🔐 Best Practices Going Forward

### 1. Use Environment Variables

```bash
# ✅ Good
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-proj-...

# ❌ Bad
const apiKey = "sk-ant-..." // Hardcoded in code
```

### 2. Never Commit Secrets to Git

Add to `.gitignore`:
```
.env
.env.local
.env.production
.env.development
*.pem
*.key
secrets/
```

### 3. Use Different Keys for Different Environments

- Development: `OPENAI_API_KEY_DEV`
- Staging: `OPENAI_API_KEY_STAGING`
- Production: `OPENAI_API_KEY_PROD`

### 4. Rotate Keys Regularly

- Every 90 days minimum
- Immediately if exposed
- After team member leaves

### 5. Implement Rate Limiting

Already implemented in the codebase:
- 60 requests/minute
- 1000 requests/hour

### 6. Monitor for Anomalies

Set up alerts for:
- Unusual spike in API calls
- Calls from unexpected IP addresses
- High error rates
- Spending above threshold

---

## 🚀 Next Steps for ASAP Deployment

Since you want to deploy ASAP and don't have domains yet, here's the fast-track plan:

### Week 1 (This Week)

**Day 1-2**:
- ✅ Revoke exposed keys (DONE IMMEDIATELY)
- ✅ Generate new keys
- ✅ Configure environment variables in Vercel
- ✅ Deploy to Vercel (will get Vercel subdomain)

**Day 3-4**:
- Test deployment on Vercel subdomain
- Verify all integrations work
- Run smoke tests

**Day 5-7**:
- Prepare UAT materials
- Recruit testers
- Set up feedback channels

### Week 2-3

**UAT Execution** (All interfaces in parallel for speed):
- Federal Interface testing
- Individual Interface testing
- Institutional Interface testing

### Week 4

**Bug Fixes & Final Deployment**:
- Fix critical bugs
- Performance optimization
- Final production deployment

---

## 📝 Deployment Without Custom Domain

You can deploy immediately using Vercel's free subdomains:

**Backend**: `noor-backend-xxx.vercel.app`  
**Frontend**: `noor-frontend-xxx.vercel.app`

Later, when you get domains, you can add them without redeploying:
1. Vercel Dashboard → Domains
2. Add custom domain
3. Update DNS records
4. Done!

---

## ✅ Checklist

- [ ] Revoke Anthropic API key
- [ ] Revoke OpenAI API key
- [ ] Generate new Anthropic API key
- [ ] Generate new OpenAI API key
- [ ] Store new keys in password manager
- [ ] Add keys to Vercel environment variables
- [ ] Test keys work
- [ ] Set usage limits
- [ ] Set up monitoring alerts
- [ ] Remove keys from any chat/email history
- [ ] Update `.gitignore` to prevent future exposure
- [ ] Deploy to Vercel
- [ ] Verify deployment works

---

## 🆘 If You Need Help

If you encounter any issues:

1. **Check Vercel logs**: Dashboard → Deployments → View Logs
2. **Check API usage**: Provider dashboards
3. **Test endpoints**: Use health check script
4. **Contact support**: 
   - Anthropic: support@anthropic.com
   - OpenAI: help.openai.com

---

## 📞 Emergency Contacts

If you suspect unauthorized usage:

- **Anthropic Support**: support@anthropic.com
- **OpenAI Support**: https://help.openai.com
- **Vercel Support**: https://vercel.com/support

---

**REMEMBER**: API keys are like passwords. Treat them with the same level of security!

🔒 **Never share API keys publicly again!**

---

**Status**: ⏳ Waiting for you to revoke old keys and generate new ones  
**Next Step**: Once you have new keys, I'll help you deploy to Vercel immediately

