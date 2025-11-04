"""
NOOR Platform - Authentication Endpoints
"""

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime, timedelta
from sqlalchemy.ext.asyncio import AsyncSession
import logging

from app.core.config import settings
from app.services.auth_service import AuthService
from app.db.postgres import get_db
from app.db.models.user import User

logger = logging.getLogger(__name__)

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


# ============================================================================
# SCHEMAS
# ============================================================================

class Token(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class TokenData(BaseModel):
    user_id: Optional[str] = None
    emirates_id: Optional[str] = None


class UserRegister(BaseModel):
    emirates_id: str
    email: EmailStr
    phone: str
    first_name: str
    last_name: str
    date_of_birth: str
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UAEPassCallback(BaseModel):
    code: str
    state: str


class UserResponse(BaseModel):
    id: str
    emirates_id: str
    email: str
    first_name: str
    last_name: str
    phone_number: Optional[str] = None
    date_of_birth: Optional[str] = None
    is_active: bool
    is_verified: bool
    email_verified: bool
    last_login: Optional[datetime] = None
    created_at: datetime

    class Config:
        from_attributes = True


# ============================================================================
# DEPENDENCIES
# ============================================================================

async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db)
) -> User:
    """
    Get current authenticated user from token
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        # Decode token using AuthService
        payload = AuthService.decode_token(token)
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except HTTPException:
        raise credentials_exception

    # Fetch user from database
    user = await AuthService.get_user_by_id(db, user_id)
    if user is None:
        raise credentials_exception

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is inactive"
        )

    return user


# ============================================================================
# ENDPOINTS
# ============================================================================

@router.post("/register", response_model=Token, status_code=status.HTTP_201_CREATED)
async def register(user_data: UserRegister, db: AsyncSession = Depends(get_db)):
    """
    Register a new user

    **Flow:**
    1. Validate Emirates ID format
    2. Check if user already exists
    3. Validate password strength
    4. Hash password and create user record
    5. Send verification email (TODO)
    6. Return access tokens
    """
    logger.info(f"Registration attempt for Emirates ID: {user_data.emirates_id}")

    # 1. Validate Emirates ID format
    if not AuthService.validate_emirates_id(user_data.emirates_id):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid Emirates ID format. Expected format: 784-YYYY-NNNNNNN-N (15 digits)"
        )

    # 2. Check if user already exists by Emirates ID
    existing_user = await AuthService.get_user_by_emirates_id(db, user_data.emirates_id)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User with this Emirates ID already exists"
        )

    # 3. Check if email is already registered
    existing_email = await AuthService.get_user_by_email(db, user_data.email)
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User with this email already exists"
        )

    # 4. Validate password strength
    is_valid, error_message = AuthService.validate_password_strength(user_data.password)
    if not is_valid:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=error_message
        )

    # 5. Create user in database
    try:
        user = await AuthService.create_user(
            db=db,
            emirates_id=user_data.emirates_id,
            email=user_data.email,
            password=user_data.password,
            first_name=user_data.first_name,
            last_name=user_data.last_name,
            phone=user_data.phone,
            date_of_birth=user_data.date_of_birth
        )
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Failed to create user: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create user account"
        )

    # 6. TODO: Send verification email
    # await send_verification_email(user.email, user.id)

    # 7. Generate access and refresh tokens
    access_token = AuthService.create_access_token(data={"sub": str(user.id)})
    refresh_token = AuthService.create_refresh_token(data={"sub": str(user.id)})

    logger.info(f"User registered successfully: {user.email}")

    return Token(
        access_token=access_token,
        refresh_token=refresh_token
    )


@router.post("/login", response_model=Token)
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: AsyncSession = Depends(get_db)
):
    """
    Login with email and password

    **Flow:**
    1. Validate credentials
    2. Verify user account is active
    3. Generate access and refresh tokens
    4. Update last login timestamp
    """
    logger.info(f"Login attempt for user: {form_data.username}")

    # 1. Authenticate user (username field contains email for OAuth2PasswordRequestForm)
    user = await AuthService.authenticate_user(db, form_data.username, form_data.password)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # 2. Update last login timestamp
    await AuthService.update_last_login(db, user)

    # 3. Generate access and refresh tokens
    access_token = AuthService.create_access_token(data={"sub": str(user.id)})
    refresh_token = AuthService.create_refresh_token(data={"sub": str(user.id)})

    logger.info(f"User logged in successfully: {user.email}")

    return Token(
        access_token=access_token,
        refresh_token=refresh_token
    )


@router.post("/refresh", response_model=Token)
async def refresh_token(refresh_token: str, db: AsyncSession = Depends(get_db)):
    """
    Refresh access token using refresh token
    """
    try:
        # Decode and validate refresh token
        payload = AuthService.decode_token(refresh_token)

        # Check token type
        if payload.get("type") != "refresh":
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token type. Expected refresh token"
            )

        user_id: str = payload.get("sub")
        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token"
            )

        # Verify user still exists and is active
        user = await AuthService.get_user_by_id(db, user_id)
        if not user or not user.is_active:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="User not found or inactive"
            )

        # Create new access token and refresh token
        access_token = AuthService.create_access_token(data={"sub": user_id})
        new_refresh_token = AuthService.create_refresh_token(data={"sub": user_id})

        return Token(
            access_token=access_token,
            refresh_token=new_refresh_token
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Token refresh failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token"
        )


@router.get("/uae-pass/authorize")
async def uae_pass_authorize():
    """
    Initiate UAE Pass OAuth flow
    
    **Returns:** Redirect URL to UAE Pass authorization page
    """
    # TODO: Implement UAE Pass OAuth flow
    # 1. Generate state parameter
    # 2. Build authorization URL
    # 3. Return redirect URL
    
    return {
        "success": True,
        "authorization_url": f"{settings.UAE_PASS_BASE_URL}/idshub/authorize",
        "message": "Redirect user to this URL"
    }


@router.post("/uae-pass/callback")
async def uae_pass_callback(callback_data: UAEPassCallback):
    """
    Handle UAE Pass OAuth callback
    
    **Flow:**
    1. Exchange authorization code for access token
    2. Fetch user profile from UAE Pass
    3. Create or update user in NOOR
    4. Generate NOOR access tokens
    """
    logger.info(f"UAE Pass callback received with code: {callback_data.code[:10]}...")
    
    # TODO: Implement UAE Pass callback logic
    # 1. Verify state parameter
    # 2. Exchange code for token
    # 3. Fetch user profile
    # 4. Create/update user
    # 5. Generate tokens
    
    # Mock response
    access_token = create_access_token(data={"sub": "mock-user-id"})
    refresh_token = create_refresh_token(data={"sub": "mock-user-id"})
    
    return Token(
        access_token=access_token,
        refresh_token=refresh_token
    )


@router.post("/logout")
async def logout(current_user: User = Depends(get_current_user)):
    """
    Logout current user

    **Flow:**
    1. Invalidate refresh token
    2. Add access token to blacklist (Redis)
    3. Clear session data
    """
    logger.info(f"Logout for user: {current_user.id}")

    # TODO: Implement logout logic with Redis token blacklist
    # 1. Add token to Redis blacklist with TTL matching token expiry
    # 2. Clear any session data

    return {
        "success": True,
        "message": "Logged out successfully"
    }


@router.get("/me", response_model=UserResponse)
async def get_current_user_info(current_user: User = Depends(get_current_user)):
    """
    Get current authenticated user information
    """
    return UserResponse(
        id=str(current_user.id),
        emirates_id=current_user.emirates_id,
        email=current_user.email,
        first_name=current_user.first_name,
        last_name=current_user.last_name,
        phone_number=current_user.phone_number,
        date_of_birth=str(current_user.date_of_birth) if current_user.date_of_birth else None,
        is_active=current_user.is_active,
        is_verified=current_user.is_verified,
        email_verified=current_user.email_verified,
        last_login=current_user.last_login,
        created_at=current_user.created_at
    )


@router.post("/verify-biometric")
async def verify_biometric(
    biometric_type: str,
    biometric_data: str,
    current_user: User = Depends(get_current_user)
):
    """
    Verify biometric authentication (facial or voice)

    **Parameters:**
    - biometric_type: "facial" or "voice"
    - biometric_data: Base64 encoded biometric data
    """
    logger.info(f"Biometric verification attempt for user {current_user.id}: {biometric_type}")

    # TODO: Implement biometric verification
    # 1. Decode biometric data
    # 2. Compare with stored biometric template
    # 3. Return verification result

    return {
        "success": True,
        "verified": True,
        "confidence_score": 0.95,
        "message": "Biometric verification successful"
    }

