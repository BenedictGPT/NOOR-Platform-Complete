# NOOR Platform - Supabase Setup Guide

**Complete Step-by-Step Database Configuration**  
**Date**: November 4, 2024  
**Author**: Manus AI  
**Repository**: https://github.com/BenedictGPT/NOOR-Platform-Complete

---

## Overview

This guide provides complete step-by-step instructions for setting up Supabase as the production database for the NOOR Platform. Supabase provides PostgreSQL database, authentication, real-time subscriptions, and storage.

**Estimated Time**: 30-45 minutes  
**Prerequisites**: Supabase account, Vercel deployment complete  
**Outcome**: Production-ready database with all tables and authentication configured

---

## Part 1: Supabase Account Setup

### Step 1: Create Supabase Account

If you don't already have a Supabase account, create one now.

**Instructions**:

1. Go to **https://supabase.com**

2. Click **"Start your project"**

3. Choose your sign-up method:
   - **GitHub** (Recommended - easiest integration)
   - **Email**

4. Click **"Continue with GitHub"**

5. Authorize Supabase to access your GitHub account

6. Complete the account setup:
   - Enter your organization name
   - Choose plan: **Free** (for development) or **Pro** ($25/month for production)

7. Verify your email address

**Result**: You now have a Supabase account and are logged into the dashboard.

**Plan Comparison**:

| Feature | Free | Pro |
|---------|------|-----|
| Database Size | 500 MB | 8 GB |
| Storage | 1 GB | 100 GB |
| Bandwidth | 2 GB | 50 GB |
| API Requests | Unlimited | Unlimited |
| Daily Backups | 7 days | 30 days |
| Point-in-Time Recovery | No | Yes |
| Support | Community | Email |

**Recommendation**: Start with **Free** for UAT, upgrade to **Pro** before production launch.

---

### Step 2: Create New Project

**Instructions**:

1. Click **"New project"**

2. **Configure Project**:
   
   **Organization**: Select your organization
   
   **Name**: `noor-platform-production` (or your preferred name)
   
   **Database Password**: Generate a strong password
   - Click the dice icon to generate
   - **IMPORTANT**: Save this password securely - you'll need it later
   - Store in password manager (1Password, LastPass, etc.)
   
   **Region**: Select closest to your users
   - **Middle East**: Not available yet
   - **Europe (Frankfurt)**: Closest to UAE
   - **Asia (Mumbai)**: Alternative option
   - Recommendation: **Europe (Frankfurt)** for lowest latency to UAE
   
   **Pricing Plan**: Free or Pro

3. Click **"Create new project"**

**Project Creation**:
- Supabase will provision your database
- This takes 2-3 minutes
- Wait for "Setting up project..." to complete

**Result**: You now have a Supabase project with PostgreSQL database.

---

### Step 3: Get Project Credentials

Once your project is ready, collect the credentials you'll need.

**Instructions**:

1. Go to **Project Settings** (gear icon in sidebar)

2. Click **"API"** in the left menu

3. **Copy the following values**:

   **Project URL**:
   - Example: `https://abcdefghijklmnop.supabase.co`
   - Save as: `SUPABASE_URL`

   **API Keys**:
   
   - **anon public** key:
     - This is safe to use in client-side code
     - Save as: `SUPABASE_ANON_KEY`
   
   - **service_role secret** key:
     - Click **"Reveal"** to show
     - **IMPORTANT**: Keep this secret - it bypasses Row Level Security
     - Save as: `SUPABASE_KEY` (for backend only)

4. Click **"Database"** in the left menu

5. **Copy Connection String**:
   
   - Scroll to "Connection string"
   - Select **"URI"**
   - Copy the connection string
   - Example: `postgresql://postgres:[YOUR-PASSWORD]@db.abcdefghijklmnop.supabase.co:5432/postgres`
   - Replace `[YOUR-PASSWORD]` with your database password
   - Save as: `DATABASE_URL`

6. **Copy JWT Secret**:
   
   - Scroll to "JWT Settings"
   - Copy the **JWT Secret**
   - Save as: `SUPABASE_JWT_SECRET`

**Security Note**: Store all these values securely. Never commit them to Git or share publicly.

---

## Part 2: Database Schema Setup

### Step 4: Create Database Tables

Create all the tables needed for the NOOR Platform.

**Instructions**:

1. Go to **SQL Editor** in the Supabase dashboard

2. Click **"New query"**

3. **Copy and paste the following SQL**:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  user_type TEXT NOT NULL CHECK (user_type IN ('federal', 'individual', 'institutional')),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Individual profiles
CREATE TABLE public.individual_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  date_of_birth DATE,
  nationality TEXT,
  emirate TEXT,
  education_level TEXT,
  employment_status TEXT,
  phone_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Institutional profiles
CREATE TABLE public.institutional_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  company_size TEXT,
  industry TEXT,
  license_number TEXT,
  website TEXT,
  phone_number TEXT,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Eight Faculty assessments
CREATE TABLE public.faculty_assessments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  faculty_name TEXT NOT NULL,
  competency_name TEXT NOT NULL,
  score INTEGER CHECK (score >= 0 AND score <= 100),
  assessment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Skills
CREATE TABLE public.skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  skill_name TEXT NOT NULL,
  proficiency_level TEXT CHECK (proficiency_level IN ('beginner', 'intermediate', 'advanced', 'expert')),
  years_of_experience INTEGER,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Job opportunities
CREATE TABLE public.job_opportunities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  institutional_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  requirements TEXT[],
  location TEXT,
  salary_range TEXT,
  employment_type TEXT CHECK (employment_type IN ('full-time', 'part-time', 'contract', 'internship')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'closed', 'draft')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Job applications
CREATE TABLE public.job_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES public.job_opportunities(id) ON DELETE CASCADE,
  applicant_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'shortlisted', 'rejected', 'accepted')),
  cover_letter TEXT,
  resume_url TEXT,
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Learning courses
CREATE TABLE public.learning_courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  faculty_name TEXT,
  competency_name TEXT,
  duration_hours INTEGER,
  difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  thumbnail_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Course enrollments
CREATE TABLE public.course_enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID REFERENCES public.learning_courses(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  completed BOOLEAN DEFAULT FALSE,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(course_id, user_id)
);

-- Achievements
CREATE TABLE public.achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  achievement_type TEXT NOT NULL,
  achievement_name TEXT NOT NULL,
  description TEXT,
  icon_url TEXT,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tokens
CREATE TABLE public.user_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  token_balance INTEGER DEFAULT 0,
  total_earned INTEGER DEFAULT 0,
  total_spent INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Token transactions
CREATE TABLE public.token_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  transaction_type TEXT CHECK (transaction_type IN ('earned', 'spent', 'purchased')),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Stripe payments
CREATE TABLE public.stripe_payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  stripe_payment_intent_id TEXT UNIQUE,
  amount INTEGER NOT NULL,
  currency TEXT DEFAULT 'aed',
  status TEXT CHECK (status IN ('pending', 'succeeded', 'failed', 'canceled')),
  tokens_purchased INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON public.users(email);
CREATE INDEX idx_users_user_type ON public.users(user_type);
CREATE INDEX idx_faculty_assessments_user_id ON public.faculty_assessments(user_id);
CREATE INDEX idx_skills_user_id ON public.skills(user_id);
CREATE INDEX idx_job_opportunities_institutional_id ON public.job_opportunities(institutional_id);
CREATE INDEX idx_job_applications_job_id ON public.job_applications(job_id);
CREATE INDEX idx_job_applications_applicant_id ON public.job_applications(applicant_id);
CREATE INDEX idx_course_enrollments_user_id ON public.course_enrollments(user_id);
CREATE INDEX idx_achievements_user_id ON public.achievements(user_id);
CREATE INDEX idx_token_transactions_user_id ON public.token_transactions(user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers to relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_individual_profiles_updated_at BEFORE UPDATE ON public.individual_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_institutional_profiles_updated_at BEFORE UPDATE ON public.institutional_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_skills_updated_at BEFORE UPDATE ON public.skills
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_job_opportunities_updated_at BEFORE UPDATE ON public.job_opportunities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_job_applications_updated_at BEFORE UPDATE ON public.job_applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_learning_courses_updated_at BEFORE UPDATE ON public.learning_courses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_tokens_updated_at BEFORE UPDATE ON public.user_tokens
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_stripe_payments_updated_at BEFORE UPDATE ON public.stripe_payments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

4. Click **"Run"** to execute the SQL

5. **Verify Success**:
   - You should see "Success. No rows returned"
   - If there are errors, read the error message and fix the SQL

6. **Verify Tables Created**:
   - Go to **Table Editor** in the sidebar
   - You should see all 14 tables listed

**Result**: Database schema is now created with all necessary tables.

---

### Step 5: Set Up Row Level Security (RLS)

Enable Row Level Security to protect user data.

**Instructions**:

1. Go back to **SQL Editor**

2. Click **"New query"**

3. **Copy and paste the following SQL**:

```sql
-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.individual_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institutional_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faculty_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.token_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stripe_payments ENABLE ROW LEVEL SECURITY;

-- Users: Users can read their own data
CREATE POLICY "Users can view own data" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Individual profiles: Users can manage their own profile
CREATE POLICY "Users can view own profile" ON public.individual_profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile" ON public.individual_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON public.individual_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Institutional profiles: Users can manage their own profile
CREATE POLICY "Institutions can view own profile" ON public.institutional_profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Institutions can insert own profile" ON public.institutional_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Institutions can update own profile" ON public.institutional_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Faculty assessments: Users can view and manage their own assessments
CREATE POLICY "Users can view own assessments" ON public.faculty_assessments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own assessments" ON public.faculty_assessments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Skills: Users can manage their own skills
CREATE POLICY "Users can view own skills" ON public.skills
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own skills" ON public.skills
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own skills" ON public.skills
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own skills" ON public.skills
  FOR DELETE USING (auth.uid() = user_id);

-- Job opportunities: Public can view active jobs, institutions can manage their own
CREATE POLICY "Anyone can view active jobs" ON public.job_opportunities
  FOR SELECT USING (status = 'active');

CREATE POLICY "Institutions can insert jobs" ON public.job_opportunities
  FOR INSERT WITH CHECK (auth.uid() = institutional_id);

CREATE POLICY "Institutions can update own jobs" ON public.job_opportunities
  FOR UPDATE USING (auth.uid() = institutional_id);

CREATE POLICY "Institutions can delete own jobs" ON public.job_opportunities
  FOR DELETE USING (auth.uid() = institutional_id);

-- Job applications: Users can view their own applications, institutions can view applications to their jobs
CREATE POLICY "Users can view own applications" ON public.job_applications
  FOR SELECT USING (auth.uid() = applicant_id);

CREATE POLICY "Institutions can view applications to their jobs" ON public.job_applications
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.job_opportunities
      WHERE id = job_applications.job_id AND institutional_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert applications" ON public.job_applications
  FOR INSERT WITH CHECK (auth.uid() = applicant_id);

CREATE POLICY "Users can update own applications" ON public.job_applications
  FOR UPDATE USING (auth.uid() = applicant_id);

-- Learning courses: Public can view all courses
CREATE POLICY "Anyone can view courses" ON public.learning_courses
  FOR SELECT USING (true);

-- Course enrollments: Users can manage their own enrollments
CREATE POLICY "Users can view own enrollments" ON public.course_enrollments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own enrollments" ON public.course_enrollments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own enrollments" ON public.course_enrollments
  FOR UPDATE USING (auth.uid() = user_id);

-- Achievements: Users can view their own achievements
CREATE POLICY "Users can view own achievements" ON public.achievements
  FOR SELECT USING (auth.uid() = user_id);

-- User tokens: Users can view their own tokens
CREATE POLICY "Users can view own tokens" ON public.user_tokens
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tokens" ON public.user_tokens
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tokens" ON public.user_tokens
  FOR UPDATE USING (auth.uid() = user_id);

-- Token transactions: Users can view their own transactions
CREATE POLICY "Users can view own transactions" ON public.token_transactions
  FOR SELECT USING (auth.uid() = user_id);

-- Stripe payments: Users can view their own payments
CREATE POLICY "Users can view own payments" ON public.stripe_payments
  FOR SELECT USING (auth.uid() = user_id);
```

4. Click **"Run"** to execute the SQL

5. **Verify Success**:
   - You should see "Success. No rows returned"

**Result**: Row Level Security is now enabled, protecting user data.

---

### Step 6: Seed Initial Data (Optional)

Add some initial data for testing and demonstration.

**Instructions**:

1. Go to **SQL Editor**

2. Click **"New query"**

3. **Copy and paste the following SQL**:

```sql
-- Insert sample learning courses
INSERT INTO public.learning_courses (title, description, faculty_name, competency_name, duration_hours, difficulty_level, thumbnail_url) VALUES
('Introduction to Analytical Thinking', 'Learn the fundamentals of analytical thinking and problem-solving', 'Analytical Faculty', 'Critical Thinking', 8, 'beginner', '/images/courses/analytical-thinking.jpg'),
('Advanced Data Analysis', 'Master data analysis techniques and tools', 'Analytical Faculty', 'Data Interpretation', 12, 'advanced', '/images/courses/data-analysis.jpg'),
('Effective Communication Skills', 'Develop strong verbal and written communication skills', 'Communicative Faculty', 'Verbal Communication', 6, 'beginner', '/images/courses/communication.jpg'),
('Public Speaking Mastery', 'Become a confident and persuasive public speaker', 'Communicative Faculty', 'Public Speaking', 10, 'intermediate', '/images/courses/public-speaking.jpg'),
('Creative Problem Solving', 'Unlock your creative potential and solve problems innovatively', 'Creative Faculty', 'Innovation', 8, 'intermediate', '/images/courses/creative-problem-solving.jpg'),
('Design Thinking Workshop', 'Apply design thinking principles to real-world challenges', 'Creative Faculty', 'Design Thinking', 16, 'advanced', '/images/courses/design-thinking.jpg'),
('Emotional Intelligence', 'Develop self-awareness and empathy', 'Emotional Faculty', 'Self-Awareness', 6, 'beginner', '/images/courses/emotional-intelligence.jpg'),
('Leadership and Team Management', 'Lead teams effectively and inspire others', 'Emotional Faculty', 'Leadership', 12, 'intermediate', '/images/courses/leadership.jpg'),
('Physical Fitness Fundamentals', 'Build a strong foundation for physical health', 'Physical Faculty', 'Fitness', 4, 'beginner', '/images/courses/fitness.jpg'),
('Nutrition and Wellness', 'Learn about nutrition and healthy living', 'Physical Faculty', 'Nutrition', 6, 'beginner', '/images/courses/nutrition.jpg'),
('Mindfulness and Meditation', 'Practice mindfulness and reduce stress', 'Spiritual Faculty', 'Mindfulness', 8, 'beginner', '/images/courses/mindfulness.jpg'),
('Ethics and Values', 'Explore ethical principles and moral reasoning', 'Spiritual Faculty', 'Ethics', 10, 'intermediate', '/images/courses/ethics.jpg'),
('Financial Literacy', 'Understand personal finance and investing', 'Material Faculty', 'Financial Management', 8, 'beginner', '/images/courses/financial-literacy.jpg'),
('Entrepreneurship Basics', 'Learn the fundamentals of starting a business', 'Material Faculty', 'Entrepreneurship', 12, 'intermediate', '/images/courses/entrepreneurship.jpg'),
('Social Networking Skills', 'Build and maintain professional relationships', 'Social Faculty', 'Networking', 6, 'beginner', '/images/courses/networking.jpg'),
('Community Engagement', 'Make a positive impact in your community', 'Social Faculty', 'Community Service', 8, 'intermediate', '/images/courses/community-engagement.jpg');

-- Note: You'll need to create actual test users through the authentication flow
-- The following is just an example structure for reference
```

4. Click **"Run"** to execute the SQL

**Result**: Sample courses are now available in the database.

---

## Part 3: Authentication Configuration

### Step 7: Configure Authentication Settings

Set up authentication for the NOOR Platform.

**Instructions**:

1. Go to **Authentication** in the Supabase dashboard

2. Click **"Providers"**

3. **Enable Email Authentication**:
   - Email provider should already be enabled
   - Verify it's turned on

4. **Configure Email Templates** (Optional):
   - Click **"Email Templates"**
   - Customize confirmation email, reset password email, etc.
   - Add NOOR Platform branding

5. **Configure URL Configuration**:
   - Click **"URL Configuration"**
   - **Site URL**: `https://noor-frontend-xxx.vercel.app`
   - **Redirect URLs**: Add:
     - `https://noor-frontend-xxx.vercel.app/**`
     - `http://localhost:3000/**` (for local development)

6. **Configure JWT Settings** (Optional):
   - Click **"Settings"** → **"API"**
   - JWT expiry: Default is 3600 seconds (1 hour)
   - Adjust if needed

**Result**: Authentication is now configured.

---

### Step 8: Test Authentication

Test that authentication works correctly.

**Instructions**:

1. Go to **Authentication** → **"Users"**

2. Click **"Add user"** → **"Create new user"**

3. **Create Test User**:
   - Email: `test@noorplatform.ae`
   - Password: Create a strong password
   - Auto Confirm User: **Yes**

4. Click **"Create user"**

5. **Verify User Created**:
   - You should see the user in the users list
   - Note the user ID (UUID)

6. **Test Login** (from your deployed frontend):
   - Go to your frontend URL
   - Try to log in with the test user
   - Verify login succeeds

**Result**: Authentication is working correctly.

---

## Part 4: Connect to Vercel

### Step 9: Add Supabase Credentials to Vercel

Now that Supabase is set up, add the credentials to your Vercel projects.

**Instructions**:

1. Go to **Vercel Dashboard** → **noor-frontend** project

2. Click **"Settings"** → **"Environment Variables"**

3. **Add/Update the following variables**:

   | Variable Name | Value | Environment |
   |---------------|-------|-------------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | Production |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `[Your Anon Key]` | Production |

4. Click **"Save"**

5. **Redeploy Frontend**:
   - Go to **"Deployments"** tab
   - Click **"..."** on latest deployment
   - Click **"Redeploy"**

6. Go to **Vercel Dashboard** → **noor-backend** project

7. Click **"Settings"** → **"Environment Variables"**

8. **Add/Update the following variables**:

   | Variable Name | Value | Environment |
   |---------------|-------|-------------|
   | `DATABASE_URL` | `postgresql://postgres:[PASSWORD]@db.xxx.supabase.co:5432/postgres` | Production |
   | `SUPABASE_URL` | `https://xxx.supabase.co` | Production |
   | `SUPABASE_KEY` | `[Your Service Role Key]` | Production |
   | `SUPABASE_JWT_SECRET` | `[Your JWT Secret]` | Production |

9. Click **"Save"**

10. **Redeploy Backend**:
    - Go to **"Deployments"** tab
    - Click **"..."** on latest deployment
    - Click **"Redeploy"**

**Result**: Vercel projects now have Supabase credentials.

---

## Part 5: Testing and Verification

### Step 10: Test Database Connection

Verify that your backend can connect to Supabase.

**Instructions**:

1. **Test Health Endpoint**:
   ```bash
   curl https://noor-backend-xxx.vercel.app/api/v1/health
   ```

2. **Expected Response**:
   ```json
   {
     "status": "healthy",
     "database": "connected",
     "timestamp": "2024-11-04T..."
   }
   ```

3. **Test Database Query**:
   - Use the API docs: `https://noor-backend-xxx.vercel.app/docs`
   - Try a simple GET endpoint
   - Verify data is returned

4. **Check Supabase Logs**:
   - Go to Supabase Dashboard → **Logs**
   - Click **"Database"**
   - You should see connection logs

**Result**: Backend is successfully connected to Supabase.

---

### Step 11: Test Full Authentication Flow

Test the complete authentication flow from frontend to backend to database.

**Instructions**:

1. **Open Frontend**:
   - Go to `https://noor-frontend-xxx.vercel.app`

2. **Register New User**:
   - Click "Sign Up" or navigate to registration
   - Fill in the form:
     - Email: `user@example.com`
     - Password: Strong password
     - User Type: Individual
   - Submit the form

3. **Verify User Created**:
   - Go to Supabase Dashboard → **Authentication** → **"Users"**
   - You should see the new user

4. **Check Database**:
   - Go to **Table Editor** → **users** table
   - You should see the user record

5. **Log In**:
   - Go back to frontend
   - Log in with the new user
   - Verify you're redirected to dashboard

6. **Test Protected Routes**:
   - Navigate to different pages
   - Verify authentication is maintained
   - Try logging out and back in

**Result**: Full authentication flow is working.

---

## Part 6: Performance and Optimization

### Step 12: Enable Connection Pooling

For better performance, enable connection pooling.

**Instructions**:

1. Go to Supabase Dashboard → **Settings** → **"Database"**

2. Scroll to **"Connection Pooling"**

3. **Enable Connection Pooling**:
   - Mode: **Transaction**
   - Port: **6543**

4. **Copy Pooled Connection String**:
   - Example: `postgresql://postgres:[PASSWORD]@db.xxx.supabase.co:6543/postgres?pgbouncer=true`

5. **Update Vercel Backend**:
   - Go to Vercel → noor-backend → Settings → Environment Variables
   - Update `DATABASE_URL` with the pooled connection string
   - Redeploy

**Result**: Database connections are now pooled for better performance.

---

### Step 13: Set Up Database Backups

Ensure your data is backed up regularly.

**Instructions**:

1. **Automatic Backups** (Built-in):
   - Free plan: 7 days of daily backups
   - Pro plan: 30 days of daily backups
   - No configuration needed

2. **Point-in-Time Recovery** (Pro plan only):
   - Go to Settings → **"Database"**
   - Enable **"Point-in-Time Recovery"**
   - Allows restore to any point in the last 7 days

3. **Manual Backup** (Optional):
   ```bash
   # Using pg_dump
   pg_dump "postgresql://postgres:[PASSWORD]@db.xxx.supabase.co:5432/postgres" > backup.sql
   ```

4. **Scheduled Backups** (Recommended):
   - Set up a cron job or GitHub Action
   - Run pg_dump weekly
   - Store backups in secure location (S3, Google Drive, etc.)

**Result**: Database backups are configured.

---

## Part 7: Security Hardening

### Step 14: Security Checklist

Ensure your Supabase setup is secure.

**Instructions**:

Review and complete this checklist:

- [ ] **RLS Enabled**: All tables have Row Level Security enabled
- [ ] **Policies Configured**: Appropriate RLS policies for each table
- [ ] **Service Role Key Secure**: Only used in backend, never exposed to client
- [ ] **Anon Key Used Correctly**: Only used in frontend for public operations
- [ ] **Database Password Strong**: 20+ characters, random
- [ ] **JWT Secret Secure**: Never exposed, only in backend
- [ ] **SSL Enforced**: Supabase enforces SSL by default
- [ ] **API Rate Limiting**: Consider implementing in backend
- [ ] **Audit Logging**: Enable for Pro plan

**Additional Security Measures**:

1. **Enable Database Webhooks** (Optional):
   - Go to **Database** → **"Webhooks"**
   - Set up webhooks for audit logging
   - Send to external logging service

2. **IP Allowlist** (Pro plan):
   - Go to **Settings** → **"Database"**
   - Add IP allowlist if needed
   - Restrict database access to known IPs

3. **Monitor Usage**:
   - Go to **Reports** → **"Database"**
   - Monitor connection count
   - Watch for unusual activity

**Result**: Supabase setup is secure.

---

## Part 8: Monitoring and Maintenance

### Step 15: Set Up Monitoring

Monitor your database health and performance.

**Instructions**:

1. **Enable Email Alerts**:
   - Go to **Settings** → **"Notifications"**
   - Enable alerts for:
     - Database CPU usage > 80%
     - Database memory usage > 80%
     - Disk usage > 80%
     - Connection count > 80%

2. **Monitor Dashboard**:
   - Go to **Reports** → **"Database"**
   - Review metrics:
     - Active connections
     - Query performance
     - Disk usage
     - CPU usage

3. **Set Up External Monitoring** (Optional):
   - Use Datadog, New Relic, or similar
   - Monitor database performance
   - Set up custom alerts

4. **Query Performance**:
   - Go to **Reports** → **"Query Performance"**
   - Identify slow queries
   - Add indexes as needed

**Result**: Database monitoring is configured.

---

## Troubleshooting Guide

### Common Issues and Solutions

**Issue: Can't Connect to Database**

**Symptoms**: Backend shows database connection errors

**Solutions**:
1. Verify DATABASE_URL is correct
2. Check database password is correct
3. Ensure Supabase project is not paused
4. Verify network connectivity
5. Check Supabase status page

---

**Issue: RLS Blocking Queries**

**Symptoms**: Queries return no data or permission errors

**Solutions**:
1. Verify RLS policies are correct
2. Check user is authenticated
3. Test with service_role key (bypasses RLS)
4. Review policy conditions
5. Check auth.uid() matches user_id

---

**Issue: Slow Query Performance**

**Symptoms**: API responses are slow

**Solutions**:
1. Add indexes to frequently queried columns
2. Enable connection pooling
3. Optimize complex queries
4. Use database functions for complex operations
5. Consider caching frequently accessed data

---

**Issue: Authentication Fails**

**Symptoms**: Users can't log in

**Solutions**:
1. Verify SUPABASE_URL and SUPABASE_ANON_KEY are correct
2. Check redirect URLs are configured
3. Verify JWT secret is correct
4. Test with Supabase client directly
5. Check browser console for errors

---

## Success Criteria

Your Supabase setup is successful when:

- [ ] Database tables are created
- [ ] RLS is enabled and policies are configured
- [ ] Sample data is loaded (optional)
- [ ] Authentication is configured
- [ ] Test user can log in
- [ ] Backend connects to database
- [ ] Frontend connects to Supabase
- [ ] Full auth flow works end-to-end
- [ ] Connection pooling is enabled
- [ ] Backups are configured
- [ ] Monitoring is set up

---

## Next Steps

After successful Supabase setup:

1. **Complete Integration Testing**
   - Test all CRUD operations
   - Verify data persistence
   - Test real-time subscriptions (if used)

2. **Load Test Data**
   - Add more sample data for UAT
   - Create test users for each interface type
   - Populate courses and job opportunities

3. **Execute UAT Plan**
   - Federal Interface UAT
   - Individual Interface UAT
   - Institutional Interface UAT

4. **Monitor and Optimize**
   - Review query performance
   - Add indexes as needed
   - Optimize slow queries

---

## Support Resources

**Supabase Documentation**:
- https://supabase.com/docs
- https://supabase.com/docs/guides/database
- https://supabase.com/docs/guides/auth

**NOOR Platform Documentation**:
- Repository: https://github.com/BenedictGPT/NOOR-Platform-Complete
- See README.md for detailed information

**Community Support**:
- Supabase Discord: https://discord.supabase.com
- GitHub Issues: https://github.com/BenedictGPT/NOOR-Platform-Complete/issues

---

## Conclusion

You have successfully set up Supabase as the production database for the NOOR Platform! The database is now configured with all tables, authentication, and security measures in place.

**Setup Status**: ✅ COMPLETE  
**Database URL**: `https://xxx.supabase.co`  
**Tables**: 14 tables created  
**Authentication**: Configured and tested

🌟 **Illuminating Human Potential for UAE Vision 2071** 🇦🇪

---

**Next**: Proceed with deployment testing and UAT execution.

