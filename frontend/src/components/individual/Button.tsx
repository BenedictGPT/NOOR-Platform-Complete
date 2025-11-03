'use client';

import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'ghost';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onPress?: () => void;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const variantStyles = {
  solid: {
    default: 'bg-gray-600 text-white hover:bg-gray-700',
    primary: 'bg-individual-royal text-white hover:bg-individual-deep shadow-cta',
    secondary: 'bg-individual-azure text-white hover:bg-individual-royal',
    success: 'bg-green-600 text-white hover:bg-green-700',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700',
    danger: 'bg-individual-royal text-white hover:opacity-90',
    accent: 'bg-gradient-to-r from-engage-orange to-engage-red text-white hover:opacity-95 shadow-cta',
  },
  bordered: {
    default: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
    primary: 'border-2 border-individual-royal text-individual-royal hover:bg-individual-ice',
    secondary: 'border-2 border-individual-azure text-individual-azure hover:bg-individual-ice',
    success: 'border-2 border-green-600 text-green-600 hover:bg-green-50',
    warning: 'border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50',
    danger: 'border-2 border-individual-royal text-individual-royal hover:bg-red-50',
    accent: 'border-2 border-engage-orange text-engage-orange hover:bg-orange-50',
  },
  light: {
    default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    primary: 'bg-individual-ice text-individual-royal hover:bg-individual-sky/30',
    secondary: 'bg-individual-ice text-individual-azure hover:bg-individual-sky/30',
    success: 'bg-green-50 text-green-700 hover:bg-green-100',
    warning: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
    danger: 'bg-red-50 text-individual-royal hover:bg-red-100',
    accent: 'bg-engage-orange/10 text-engage-orange hover:bg-engage-orange/20',
  },
  flat: {
    default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    primary: 'bg-individual-royal/10 text-individual-royal hover:bg-individual-royal/20',
    secondary: 'bg-individual-azure/10 text-individual-azure hover:bg-individual-azure/20',
    success: 'bg-green-100 text-green-700 hover:bg-green-200',
    warning: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
    danger: 'bg-individual-royal/10 text-individual-royal hover:bg-individual-royal/20',
    accent: 'bg-engage-orange/10 text-engage-orange hover:bg-engage-orange/20',
  },
  ghost: {
    default: 'text-gray-700 hover:bg-gray-100',
    primary: 'text-individual-royal hover:bg-individual-ice',
    secondary: 'text-individual-azure hover:bg-individual-ice',
    success: 'text-green-700 hover:bg-green-50',
    warning: 'text-yellow-700 hover:bg-yellow-50',
    danger: 'text-individual-royal hover:bg-red-50',
    accent: 'text-engage-orange hover:bg-engage-orange/10',
  },
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  color = 'default',
  size = 'md',
  fullWidth = false,
  isDisabled = false,
  isLoading = false,
  startContent,
  endContent,
  onPress,
  onClick,
  type = 'button',
  className = '',
}) => {
  const handleClick = () => {
    if (!isDisabled && !isLoading) {
      if (onPress) onPress();
      if (onClick) onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isDisabled || isLoading}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold font-inter rounded-pill
        transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${color === 'primary' ? 'focus-visible:ring-individual-azure' : ''}
        ${color === 'secondary' ? 'focus-visible:ring-individual-azure' : ''}
        ${color === 'accent' ? 'focus-visible:ring-engage-orange' : ''}
        ${sizeStyles[size]}
        ${variantStyles[variant][color]}
        ${fullWidth ? 'w-full' : ''}
        ${isDisabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : (
        <>
          {startContent}
          {children}
          {endContent}
        </>
      )}
    </button>
  );
};

export default Button;

