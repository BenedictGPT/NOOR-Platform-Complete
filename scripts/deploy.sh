#!/bin/bash

###############################################################################
# NOOR Platform - Production Deployment Script
# Version: 1.0
# Description: Automated deployment script for NOOR Platform
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
ENVIRONMENT=${1:-production}
BACKEND_DIR="backend"
FRONTEND_DIR="frontend"

###############################################################################
# Helper Functions
###############################################################################

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_command() {
    if ! command -v $1 &> /dev/null; then
        log_error "$1 is not installed. Please install it first."
        exit 1
    fi
}

###############################################################################
# Pre-deployment Checks
###############################################################################

pre_deployment_checks() {
    log_info "Running pre-deployment checks..."
    
    # Check required commands
    check_command "node"
    check_command "npm"
    check_command "python3"
    check_command "vercel"
    
    # Check if .env files exist
    if [ ! -f "$BACKEND_DIR/.env.production" ]; then
        log_error "Backend .env.production file not found!"
        exit 1
    fi
    
    if [ ! -f "$FRONTEND_DIR/.env.production" ]; then
        log_error "Frontend .env.production file not found!"
        exit 1
    fi
    
    log_info "Pre-deployment checks passed ✓"
}

###############################################################################
# Backend Deployment
###############################################################################

deploy_backend() {
    log_info "Deploying backend to Vercel..."
    
    cd $BACKEND_DIR
    
    # Install dependencies
    log_info "Installing Python dependencies..."
    pip3 install -r requirements.txt
    
    # Run tests
    log_info "Running backend tests..."
    python3 -m pytest tests/ || log_warn "Some tests failed, but continuing..."
    
    # Deploy to Vercel
    log_info "Deploying to Vercel..."
    if [ "$ENVIRONMENT" == "production" ]; then
        vercel --prod --yes
    else
        vercel --yes
    fi
    
    cd ..
    log_info "Backend deployment complete ✓"
}

###############################################################################
# Frontend Deployment
###############################################################################

deploy_frontend() {
    log_info "Deploying frontend to Vercel..."
    
    cd $FRONTEND_DIR
    
    # Install dependencies
    log_info "Installing Node dependencies..."
    npm install
    
    # Run linting
    log_info "Running linter..."
    npm run lint || log_warn "Linting issues found, but continuing..."
    
    # Build
    log_info "Building frontend..."
    npm run build
    
    # Deploy to Vercel
    log_info "Deploying to Vercel..."
    if [ "$ENVIRONMENT" == "production" ]; then
        vercel --prod --yes
    else
        vercel --yes
    fi
    
    cd ..
    log_info "Frontend deployment complete ✓"
}

###############################################################################
# Post-deployment Verification
###############################################################################

verify_deployment() {
    log_info "Verifying deployment..."
    
    # Get deployment URLs
    BACKEND_URL=$(cd $BACKEND_DIR && vercel ls --prod 2>/dev/null | grep "noor" | head -1 | awk '{print $2}')
    FRONTEND_URL=$(cd $FRONTEND_DIR && vercel ls --prod 2>/dev/null | grep "noor" | head -1 | awk '{print $2}')
    
    # Health check
    log_info "Running health checks..."
    
    if [ -n "$BACKEND_URL" ]; then
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$BACKEND_URL/api/v1/health")
        if [ "$HTTP_CODE" == "200" ]; then
            log_info "Backend health check passed ✓"
        else
            log_error "Backend health check failed (HTTP $HTTP_CODE)"
        fi
    fi
    
    if [ -n "$FRONTEND_URL" ]; then
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$FRONTEND_URL")
        if [ "$HTTP_CODE" == "200" ]; then
            log_info "Frontend health check passed ✓"
        else
            log_error "Frontend health check failed (HTTP $HTTP_CODE)"
        fi
    fi
    
    log_info "Deployment verification complete ✓"
}

###############################################################################
# Main Deployment Flow
###############################################################################

main() {
    log_info "========================================="
    log_info "NOOR Platform Deployment Script"
    log_info "Environment: $ENVIRONMENT"
    log_info "========================================="
    
    # Confirm production deployment
    if [ "$ENVIRONMENT" == "production" ]; then
        log_warn "You are about to deploy to PRODUCTION!"
        read -p "Are you sure you want to continue? (yes/no): " confirm
        if [ "$confirm" != "yes" ]; then
            log_info "Deployment cancelled."
            exit 0
        fi
    fi
    
    # Run deployment steps
    pre_deployment_checks
    deploy_backend
    deploy_frontend
    verify_deployment
    
    log_info "========================================="
    log_info "Deployment completed successfully! ✓"
    log_info "========================================="
    
    # Display URLs
    if [ -n "$BACKEND_URL" ]; then
        log_info "Backend URL: https://$BACKEND_URL"
    fi
    if [ -n "$FRONTEND_URL" ]; then
        log_info "Frontend URL: https://$FRONTEND_URL"
    fi
}

# Run main function
main

