/**
 * Centralized error handling utilities
 */

export interface ErrorLogEntry {
  message: string;
  error: Error;
  timestamp: Date;
  context?: Record<string, any>;
}

class ErrorHandler {
  private errors: ErrorLogEntry[] = [];
  private maxErrors = 100;

  /**
   * Log an error with optional context
   */
  logError(error: Error, context?: Record<string, any>): void {
    const entry: ErrorLogEntry = {
      message: error.message,
      error,
      timestamp: new Date(),
      context,
    };

    this.errors.push(entry);

    // Keep only last maxErrors
    if (this.errors.length > this.maxErrors) {
      this.errors.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', entry);
    }

    // In production, send to monitoring service
    // Example: Sentry.captureException(error, { contexts: context });
  }

  /**
   * Get all logged errors
   */
  getErrors(): ErrorLogEntry[] {
    return [...this.errors];
  }

  /**
   * Clear error log
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Get user-friendly error message
   */
  getUserMessage(error: Error): string {
    // Map common errors to user-friendly messages
    const errorMessages: Record<string, string> = {
      NetworkError: 'Unable to connect to the server. Please check your internet connection.',
      ValidationError: 'Please check your input and try again.',
      AuthError: 'Your session has expired. Please log in again.',
      NotFoundError: 'The requested resource was not found.',
      PermissionError: 'You do not have permission to perform this action.',
    };

    // Check if error name matches a known type
    if (error.name && errorMessages[error.name]) {
      return errorMessages[error.name];
    }

    // Check if error message contains keywords
    const message = error.message.toLowerCase();
    if (message.includes('network') || message.includes('fetch')) {
      return errorMessages.NetworkError;
    }
    if (message.includes('unauthorized') || message.includes('authentication')) {
      return errorMessages.AuthError;
    }
    if (message.includes('not found') || message.includes('404')) {
      return errorMessages.NotFoundError;
    }
    if (message.includes('permission') || message.includes('forbidden')) {
      return errorMessages.PermissionError;
    }

    // Default message
    return 'An unexpected error occurred. Please try again.';
  }

  /**
   * Handle async errors with proper error handling
   */
  async handleAsync<T>(
    asyncFn: () => Promise<T>,
    onError?: (error: Error) => void
  ): Promise<T | null> {
    try {
      return await asyncFn();
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      this.logError(err);
      if (onError) {
        onError(err);
      }
      return null;
    }
  }
}

// Export singleton instance
export const errorHandler = new ErrorHandler();

/**
 * HOF to wrap async functions with error handling
 */
export function withErrorHandling<T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  onError?: (error: Error) => void
): (...args: T) => Promise<R | null> {
  return async (...args: T) => {
    try {
      return await fn(...args);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      errorHandler.logError(err);
      if (onError) {
        onError(err);
      }
      return null;
    }
  };
}
