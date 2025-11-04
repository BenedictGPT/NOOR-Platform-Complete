#!/usr/bin/env python3
"""
NOOR Platform - Database Health Check Script
"""

import os
import sys

try:
    from supabase import create_client, Client
except ImportError:
    print("❌ Error: supabase package not installed")
    print("Install with: pip install supabase")
    sys.exit(1)

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
        print()
        print("Usage:")
        print("  export SUPABASE_URL='https://xxx.supabase.co'")
        print("  export SUPABASE_KEY='your-service-role-key'")
        print("  python3 scripts/check-database.py")
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

