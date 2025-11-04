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

