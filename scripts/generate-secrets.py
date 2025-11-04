#!/usr/bin/env python3
"""
NOOR Platform - Secrets Generation Script
Generates secure random secrets for environment configuration
"""

import secrets
import string
import hashlib
import os
import sys
from pathlib import Path

def generate_secret_key(length=64):
    """Generate a secure random secret key"""
    alphabet = string.ascii_letters + string.digits + string.punctuation
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def generate_hex_key(length=32):
    """Generate a secure random hex key"""
    return secrets.token_hex(length)

def generate_urlsafe_key(length=32):
    """Generate a URL-safe random key"""
    return secrets.token_urlsafe(length)

def generate_database_password(length=32):
    """Generate a secure database password"""
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def generate_jwt_secret():
    """Generate a JWT secret key"""
    return generate_hex_key(64)

def main():
    """Generate all required secrets and create .env file"""

    print("=" * 60)
    print("NOOR Platform - Secrets Generator")
    print("=" * 60)
    print()

    # Generate secrets
    secrets_dict = {
        # Django/Flask Secret Key
        'SECRET_KEY': generate_secret_key(64),

        # JWT Secrets
        'JWT_SECRET': generate_jwt_secret(),
        'JWT_REFRESH_SECRET': generate_jwt_secret(),

        # API Keys (placeholders - replace with actual keys)
        'ANTHROPIC_API_KEY': os.getenv('ANTHROPIC_API_KEY', 'sk-ant-api03-REPLACE_WITH_YOUR_KEY'),
        'OPENAI_API_KEY': os.getenv('OPENAI_API_KEY', 'sk-proj-REPLACE_WITH_YOUR_KEY'),

        # Database
        'DATABASE_PASSWORD': generate_database_password(32),
        'DATABASE_ENCRYPTION_KEY': generate_hex_key(32),

        # Encryption Keys
        'ENCRYPTION_KEY': generate_hex_key(32),
        'AES_KEY': generate_hex_key(32),

        # Session & Cookie
        'SESSION_SECRET': generate_secret_key(64),
        'COOKIE_SECRET': generate_secret_key(64),

        # CSRF Token
        'CSRF_SECRET': generate_hex_key(32),

        # API Token
        'API_SECRET_TOKEN': generate_urlsafe_key(48),

        # OAuth Secrets (placeholders)
        'GOOGLE_CLIENT_SECRET': generate_urlsafe_key(32),
        'GITHUB_CLIENT_SECRET': generate_urlsafe_key(32),

        # Redis Password
        'REDIS_PASSWORD': generate_database_password(24),

        # Admin Credentials
        'ADMIN_PASSWORD': generate_database_password(16),

        # Webhook Secrets
        'WEBHOOK_SECRET': generate_hex_key(32),

        # Signing Keys
        'SIGNING_KEY': generate_hex_key(64),
        'VERIFICATION_KEY': generate_hex_key(64),
    }

    # Print generated secrets
    print("Generated Secrets:")
    print("-" * 60)
    for key, value in secrets_dict.items():
        # Only show first 20 chars for security
        display_value = value[:20] + "..." if len(value) > 20 else value
        print(f"{key:30} : {display_value}")
    print()

    # Create .env file
    project_root = Path(__file__).parent.parent
    env_file = project_root / '.env'
    env_template_file = project_root / '.env.example'

    print(f"Creating .env file at: {env_file}")

    # Read template if it exists
    template_content = ""
    if env_template_file.exists():
        with open(env_template_file, 'r') as f:
            template_content = f.read()
        print(f"Using template from: {env_template_file}")

    # Create .env content
    env_content = []
    env_content.append("# NOOR Platform Environment Variables")
    env_content.append("# Generated automatically - DO NOT COMMIT TO VERSION CONTROL")
    env_content.append("")
    env_content.append("# Core Secrets")

    for key, value in secrets_dict.items():
        env_content.append(f"{key}={value}")

    env_content.append("")
    env_content.append("# Additional Configuration (Update as needed)")
    env_content.append("NODE_ENV=development")
    env_content.append("DEBUG=true")
    env_content.append("PORT=3000")
    env_content.append("BACKEND_PORT=8000")
    env_content.append("")
    env_content.append("# Database Configuration")
    env_content.append(f"DATABASE_URL=postgresql://user:{secrets_dict['DATABASE_PASSWORD']}@localhost:5432/noor")
    env_content.append("SUPABASE_URL=https://your-project.supabase.co")
    env_content.append("SUPABASE_ANON_KEY=your-anon-key")
    env_content.append("SUPABASE_SERVICE_ROLE_KEY=your-service-role-key")
    env_content.append("")
    env_content.append("# Redis Configuration")
    env_content.append("REDIS_URL=redis://:${REDIS_PASSWORD}@localhost:6379")
    env_content.append("")
    env_content.append("# AI Model Configuration")
    env_content.append("DEFAULT_MODEL=claude-3-5-sonnet-20241022")
    env_content.append("OPENAI_MODEL=gpt-4")
    env_content.append("")
    env_content.append("# Frontend URL")
    env_content.append("NEXT_PUBLIC_API_URL=http://localhost:8000")
    env_content.append("NEXTAUTH_URL=http://localhost:3000")
    env_content.append("NEXTAUTH_SECRET=${JWT_SECRET}")
    env_content.append("")
    env_content.append("# Email Configuration (Update with your SMTP details)")
    env_content.append("SMTP_HOST=smtp.gmail.com")
    env_content.append("SMTP_PORT=587")
    env_content.append("SMTP_USER=your-email@gmail.com")
    env_content.append("SMTP_PASSWORD=your-app-password")
    env_content.append("")
    env_content.append("# S3/Storage Configuration")
    env_content.append("AWS_ACCESS_KEY_ID=your-access-key")
    env_content.append("AWS_SECRET_ACCESS_KEY=your-secret-key")
    env_content.append("AWS_REGION=us-east-1")
    env_content.append("S3_BUCKET_NAME=noor-platform-uploads")
    env_content.append("")
    env_content.append("# OAuth Configuration")
    env_content.append("GOOGLE_CLIENT_ID=your-google-client-id")
    env_content.append("GITHUB_CLIENT_ID=your-github-client-id")
    env_content.append("")

    # Write .env file
    with open(env_file, 'w') as f:
        f.write('\n'.join(env_content))

    print(f"✓ Created: {env_file}")
    print()

    # Create .env.local for Next.js if frontend exists
    frontend_dir = project_root / 'frontend'
    if frontend_dir.exists():
        frontend_env = frontend_dir / '.env.local'
        frontend_content = [
            "# NOOR Platform - Frontend Environment Variables",
            "",
            f"NEXTAUTH_SECRET={secrets_dict['JWT_SECRET']}",
            "NEXTAUTH_URL=http://localhost:3000",
            "",
            "NEXT_PUBLIC_API_URL=http://localhost:8000",
            "",
            "# Supabase",
            "NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co",
            "NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key",
            "",
        ]

        with open(frontend_env, 'w') as f:
            f.write('\n'.join(frontend_content))

        print(f"✓ Created: {frontend_env}")

    # Create .env for backend if it exists
    backend_dir = project_root / 'backend'
    if backend_dir.exists():
        backend_env = backend_dir / '.env'
        backend_content = [
            "# NOOR Platform - Backend Environment Variables",
            "",
            f"SECRET_KEY={secrets_dict['SECRET_KEY']}",
            f"JWT_SECRET={secrets_dict['JWT_SECRET']}",
            f"DATABASE_PASSWORD={secrets_dict['DATABASE_PASSWORD']}",
            "",
            f"ANTHROPIC_API_KEY={secrets_dict['ANTHROPIC_API_KEY']}",
            f"OPENAI_API_KEY={secrets_dict['OPENAI_API_KEY']}",
            "",
            "DATABASE_URL=postgresql://user:${DATABASE_PASSWORD}@localhost:5432/noor",
            "REDIS_URL=redis://localhost:6379",
            "",
            "DEBUG=true",
            "PORT=8000",
            "",
        ]

        with open(backend_env, 'w') as f:
            f.write('\n'.join(backend_content))

        print(f"✓ Created: {backend_env}")

    print()
    print("=" * 60)
    print("IMPORTANT SECURITY NOTES:")
    print("=" * 60)
    print("1. ✓ All secrets have been generated with cryptographic security")
    print("2. ⚠ Update placeholder API keys with your actual keys:")
    print("   - ANTHROPIC_API_KEY")
    print("   - OPENAI_API_KEY")
    print("   - SUPABASE_URL and keys")
    print("   - OAuth credentials")
    print("   - SMTP credentials")
    print("3. ⚠ NEVER commit .env files to version control")
    print("4. ✓ Add .env to .gitignore (should already be there)")
    print("5. ⚠ For production, use environment variables in your hosting platform")
    print("=" * 60)
    print()
    print("✓ Setup complete! Review and update the .env files as needed.")
    print()

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
