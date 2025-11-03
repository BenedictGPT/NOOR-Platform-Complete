import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        // Federal Government Theme
        federal: {
          gold: "#D4A843",
          navy: "#1A3A5C",
          cream: "#F5F1E8",
        },
        // Individual/Citizens Theme - NEW BLUE PALETTE
        individual: {
          // Primary Blues
          deep: "#0B3C78",      // Deep Blue: Header / Navigation
          royal: "#164BA1",     // Royal Blue: Primary actions
          azure: "#2D8BE0",     // Azure: Cards & graphs
          sky: "#7EBCEE",       // Sky Blue: Sections, dividers
          ice: "#EAF4FB",       // Ice Blue: Background neutrals
          // Engagement Colors
          orange: "#F87428",    // Orange: CTAs, tokens
          red: "#CF2B1A",       // Bright Red: Alerts
          peach: "#F8B896",     // Peach: Accents / warmth bridge
          // Support Colors
          deepRoyal: "#1E4AAE", // Secondary anchor
          lightSky: "#7DB5EB",  // Subtle overlays
        },
        // Institutional/Employers Theme - NEW BURGUNDY/GOLD PALETTE
        institutional: {
          // Brand Colors
          crimson: "#C21317",    // CTA hover / highlights
          burgundy: "#7A0A0A",   // Primary actions
          oxblood: "#4A0202",    // Elevated dark surfaces
          nearblack: "#0A0000",  // Dark accents
          // Gold Spectrum
          goldLight: "#F8D72E",  // Status / chips
          gold: "#F0A500",       // Secondary actions / tabs
          amber: "#D97A00",      // Emphasis / progress
          brown: "#8A3C00",      // Borders on warm surfaces
        },
        // Semantic tokens for Individual interface
        brand: {
          deep: "#0B3C78",
          royal: "#164BA1",
          azure: "#2D8BE0",
          sky: "#7EBCEE",
          ice: "#EAF4FB",
        },
        engage: {
          orange: "#F87428",
          red: "#CF2B1A",
          peach: "#F8B896",
        },
        support: {
          deepRoyal: "#1E4AAE",
          lightSky: "#7DB5EB",
        },
        // shadcn/ui compatible tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      gradientColorStops: {
        heroStart: "#0B3C78",
        heroEnd: "#2D8BE0",
        cardStart: "#7EBCEE",
        cardEnd: "#EAF4FB",
        ctaStart: "#F87428",
        ctaEnd: "#CF2B1A",
      },
      boxShadow: {
        card: "0 10px 20px -10px rgba(13, 60, 120, 0.25)",
        focus: "0 0 0 4px rgba(45, 139, 224, 0.35)",
        cta: "0 12px 24px -8px rgba(248, 116, 40, 0.35)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.25rem",
        pill: "999px",
      },
      fontFamily: {
        // Federal fonts
        cairo: ["Cairo", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        // Individual fonts - UPDATED
        heading: ["Playfair Display", "serif"],
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular", "monospace"],
        // Legacy
        crimson: ["Crimson Text", "serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "loading-bar": {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(250%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "loading-bar": "loading-bar 1.5s ease-in-out infinite",
        "fade-in": "fade-in 0.2s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};

export default config;

