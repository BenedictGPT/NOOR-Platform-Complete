'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title?: string;
  message: string;
  duration?: number;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  success: (message: string, title?: string) => void;
  error: (message: string, title?: string) => void;
  warning: (message: string, title?: string) => void;
  info: (message: string, title?: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within NotificationProvider'
    );
  }
  return context;
};

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (notification: Omit<Notification, 'id'>) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newNotification: Notification = {
        ...notification,
        id,
        duration: notification.duration || 5000,
      };

      setNotifications((prev) => [...prev, newNotification]);

      // Auto-remove after duration
      if (newNotification.duration) {
        setTimeout(() => {
          removeNotification(id);
        }, newNotification.duration);
      }
    },
    []
  );

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const success = useCallback(
    (message: string, title?: string) => {
      addNotification({ type: 'success', message, title });
    },
    [addNotification]
  );

  const error = useCallback(
    (message: string, title?: string) => {
      addNotification({ type: 'error', message, title });
    },
    [addNotification]
  );

  const warning = useCallback(
    (message: string, title?: string) => {
      addNotification({ type: 'warning', message, title });
    },
    [addNotification]
  );

  const info = useCallback(
    (message: string, title?: string) => {
      addNotification({ type: 'info', message, title });
    },
    [addNotification]
  );

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        success,
        error,
        warning,
        info,
      }}
    >
      {children}

      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-md">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`
              animate-in slide-in-from-right duration-300
              bg-white rounded-lg shadow-lg border-l-4 p-4 pr-8
              ${
                notification.type === 'success'
                  ? 'border-green-500'
                  : notification.type === 'error'
                  ? 'border-red-500'
                  : notification.type === 'warning'
                  ? 'border-yellow-500'
                  : 'border-blue-500'
              }
            `}
          >
            <button
              onClick={() => removeNotification(notification.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {notification.title && (
              <h4 className="font-semibold text-gray-900 mb-1">
                {notification.title}
              </h4>
            )}

            <p className="text-sm text-gray-600">{notification.message}</p>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
