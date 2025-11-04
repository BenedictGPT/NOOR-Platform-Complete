'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme types
export type InterfaceTheme = 'federal' | 'individual' | 'institutional';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  border: string;
  hover: string;
}

// Theme definitions
const themeColors: Record<InterfaceTheme, ThemeColors> = {
  federal: {
    primary: 'federal-gold',
    secondary: 'federal-navy',
    accent: 'federal-gold',
    background: 'white',
    text: 'secondary-900',
    border: 'neutral-300',
    hover: 'primary-50',
  },
  individual: {
    primary: 'individual-royal',
    secondary: 'individual-azure',
    accent: 'engage-orange',
    background: 'white',
    text: 'gray-900',
    border: 'gray-300',
    hover: 'individual-ice',
  },
  institutional: {
    primary: 'institutional-navy',
    secondary: 'institutional-burgundy',
    accent: 'institutional-teal',
    background: 'white',
    text: 'gray-900',
    border: 'gray-300',
    hover: 'institutional-sky',
  },
};

interface ThemeContextType {
  theme: InterfaceTheme;
  colors: ThemeColors;
  setTheme: (theme: InterfaceTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: InterfaceTheme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'federal',
}) => {
  const [theme, setTheme] = useState<InterfaceTheme>(defaultTheme);
  const colors = themeColors[theme];

  // Detect theme from URL path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/federal')) {
        setTheme('federal');
      } else if (path.startsWith('/individual')) {
        setTheme('individual');
      } else if (path.startsWith('/institutional')) {
        setTheme('institutional');
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, colors, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
