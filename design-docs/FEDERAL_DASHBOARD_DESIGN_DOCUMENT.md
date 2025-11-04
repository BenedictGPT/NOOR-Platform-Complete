# Federal Government Dashboard - Design Document & Figma Prompts

**Project**: NOOR Platform - National Opportunities Optimization & Realization  
**Interface**: Federal Government Dashboard  
**Version**: 1.0  
**Date**: November 4, 2024  
**Author**: Manus AI

---

## Executive Summary

The Federal Government Dashboard serves as the command center for national workforce intelligence and policy-making. This document provides comprehensive design specifications and Figma-ready prompts for creating a sophisticated, data-driven interface that embodies governmental authority while maintaining accessibility and usability.

The dashboard employs a **navy blue and gold** color scheme that conveys trust, authority, and excellence—values central to UAE governance. The design prioritizes data visualization, real-time metrics, and actionable insights for federal decision-makers.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Layout Structure](#layout-structure)
5. [Component Specifications](#component-specifications)
6. [Dashboard Sections](#dashboard-sections)
7. [Figma Prompts](#figma-prompts)
8. [Implementation Guidelines](#implementation-guidelines)

---

## Design Philosophy

### Core Principles

The Federal Dashboard design is guided by four fundamental principles that shape every visual and functional decision:

**Authority and Trust**: The interface must project governmental authority through its visual language. Navy blue serves as the primary color, historically associated with trust, stability, and institutional credibility. Gold accents add a touch of prestige and excellence, reflecting the UAE's commitment to world-class governance.

**Data-Driven Decision Making**: Every element on the dashboard serves a purpose—to inform, analyze, or enable action. The design prioritizes clarity of information over decorative elements. Charts, graphs, and metrics are given prominence, with generous whitespace ensuring each data point can be absorbed without cognitive overload.

**Hierarchical Information Architecture**: Federal users need to quickly grasp national-level trends before drilling into specifics. The dashboard employs a clear visual hierarchy: key performance indicators (KPIs) occupy the top tier, followed by trend visualizations, then detailed breakdowns. This structure mirrors the decision-making process from strategic overview to tactical detail.

**Professional Sophistication**: The interface targets senior government officials, policy makers, and strategic planners. The design reflects their professional context through refined typography, measured spacing, and a restrained color palette. Every interaction feels purposeful and efficient.

### Visual Language

The Federal Dashboard speaks through a visual language of **precision, clarity, and authority**. Sharp lines and defined boundaries create structure. Generous padding around elements provides breathing room for complex data. Subtle shadows add depth without distraction. The overall effect is one of confident professionalism—a tool built for serious work.

---

## Color Palette

### Primary Colors

The Federal interface employs a carefully calibrated navy-to-gold spectrum that balances authority with warmth.

| Color Name | Hex Code | RGB | Usage | Accessibility |
|------------|----------|-----|-------|---------------|
| **Deep Navy** | `#0A1F44` | rgb(10, 31, 68) | Primary backgrounds, headers | WCAG AAA on white |
| **Navy Blue** | `#1E3A5F` | rgb(30, 58, 95) | Secondary backgrounds, cards | WCAG AA on white |
| **Steel Blue** | `#2E5984` | rgb(46, 89, 132) | Interactive elements, links | WCAG AA on white |
| **Slate Blue** | `#4A7BA7` | rgb(74, 123, 167) | Hover states, accents | WCAG AA on white |
| **Light Blue** | `#7BA3C7` | rgb(123, 163, 199) | Borders, dividers | WCAG AA on dark |

### Accent Colors

| Color Name | Hex Code | RGB | Usage | Accessibility |
|------------|----------|-----|-------|---------------|
| **Royal Gold** | `#D4AF37` | rgb(212, 175, 55) | Primary CTAs, highlights | WCAG AA on navy |
| **Amber** | `#F0C419` | rgb(240, 196, 25) | Warnings, important metrics | WCAG AAA on navy |
| **Pale Gold** | `#F5E6D3` | rgb(245, 230, 211) | Subtle backgrounds, cards | WCAG AAA on navy |

### Semantic Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Success Green** | `#28A745` | rgb(40, 167, 69) | Positive trends, achievements |
| **Warning Orange** | `#FFA500` | rgb(255, 165, 0) | Alerts, attention needed |
| **Danger Red** | `#DC3545` | rgb(220, 53, 69) | Critical issues, errors |
| **Info Blue** | `#17A2B8` | rgb(23, 162, 184) | Informational messages |

### Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Text on dark, card backgrounds |
| **Off White** | `#F8F9FA` | rgb(248, 249, 250) | Page backgrounds |
| **Light Gray** | `#E9ECEF` | rgb(233, 236, 239) | Borders, dividers |
| **Medium Gray** | `#6C757D` | rgb(108, 117, 125) | Secondary text |
| **Dark Gray** | `#343A40` | rgb(52, 58, 64) | Body text |
| **Near Black** | `#212529` | rgb(33, 37, 41) | Headings, emphasis |

### Color Usage Guidelines

**Backgrounds**: Deep Navy (`#0A1F44`) for the main header and navigation. Off White (`#F8F9FA`) for the page background. Navy Blue (`#1E3A5F`) for card backgrounds when elevated above the page.

**Text**: Near Black (`#212529`) for headings on light backgrounds. Pure White (`#FFFFFF`) for text on navy backgrounds. Medium Gray (`#6C757D`) for secondary text and labels.

**Interactive Elements**: Steel Blue (`#2E5984`) for links and buttons in their default state. Slate Blue (`#4A7BA7`) on hover. Royal Gold (`#D4AF37`) for primary CTAs that demand attention.

**Data Visualization**: Use the full navy-to-light-blue spectrum for multi-series charts. Reserve gold for highlighting the most important data series or current selection.

---

## Typography

### Font Families

The Federal Dashboard employs a dual-font system that balances authority with readability.

**Headings**: **Playfair Display** (serif)  
- A classic serif typeface that conveys authority and tradition
- Used for page titles, section headings, and key metrics
- Weights: 600 (Semi-Bold), 700 (Bold)

**Body Text**: **Inter** (sans-serif)  
- A modern, highly legible sans-serif optimized for screens
- Used for all body text, labels, and UI elements
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold)

### Type Scale

The dashboard employs a modular scale (1.250 - Major Third) for consistent typography.

| Element | Font | Size | Weight | Line Height | Usage |
|---------|------|------|--------|-------------|-------|
| **H1** | Playfair Display | 48px | 700 | 1.2 | Page title |
| **H2** | Playfair Display | 36px | 700 | 1.3 | Section headings |
| **H3** | Playfair Display | 28px | 600 | 1.4 | Subsection headings |
| **H4** | Inter | 20px | 600 | 1.5 | Card titles |
| **Body Large** | Inter | 18px | 400 | 1.6 | Important body text |
| **Body** | Inter | 16px | 400 | 1.6 | Standard body text |
| **Body Small** | Inter | 14px | 400 | 1.5 | Secondary text, labels |
| **Caption** | Inter | 12px | 500 | 1.4 | Captions, metadata |
| **Metric Large** | Inter | 42px | 600 | 1.2 | Key performance indicators |
| **Metric** | Inter | 32px | 600 | 1.2 | Standard metrics |

### Typography Guidelines

**Hierarchy**: Establish clear visual hierarchy through size, weight, and color. Page titles should be immediately distinguishable from section headings, which should stand apart from body text.

**Contrast**: Maintain sufficient contrast between text and background. All text must meet WCAG AA standards (4.5:1 for body text, 3:1 for large text).

**Spacing**: Use generous line height (1.6 for body text) to improve readability. Add ample margin between paragraphs (1em minimum).

**Number Formatting**: Format large numbers with commas (e.g., 1,234,567). Use appropriate units (K for thousands, M for millions). Align numbers right in tables for easy comparison.

---

## Layout Structure

### Grid System

The Federal Dashboard employs a **12-column grid** with responsive breakpoints.

**Desktop (1920px+)**:
- Container max-width: 1680px
- Column width: 120px
- Gutter: 24px
- Margin: 120px

**Laptop (1440px)**:
- Container max-width: 1280px
- Column width: 88px
- Gutter: 24px
- Margin: 80px

**Tablet (1024px)**:
- Container max-width: 944px
- Column width: 64px
- Gutter: 16px
- Margin: 40px

**Mobile (768px)**:
- Container max-width: 688px
- Column width: 48px
- Gutter: 16px
- Margin: 40px

### Spacing System

The dashboard uses an 8px base unit for all spacing, creating visual rhythm and consistency.

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Tight spacing within components |
| `space-sm` | 8px | Component internal padding |
| `space-md` | 16px | Standard spacing between elements |
| `space-lg` | 24px | Section spacing |
| `space-xl` | 32px | Major section breaks |
| `space-2xl` | 48px | Page-level spacing |
| `space-3xl` | 64px | Maximum spacing |

### Dashboard Layout

The Federal Dashboard follows a **fixed sidebar + main content** layout.

```
┌─────────────────────────────────────────────────────────┐
│  Header (80px height)                                   │
│  - Logo | Navigation | User Menu                        │
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ Sidebar  │  Main Content Area                           │
│ (280px)  │  - Breadcrumb                                │
│          │  - Page Title                                │
│ - Nav    │  - KPI Cards (4 across)                      │
│ - Links  │  - Charts (2 columns)                        │
│ - Stats  │  - Data Tables                               │
│          │                                              │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

**Header**: Fixed at top, 80px height, Deep Navy background, contains logo, main navigation, and user menu.

**Sidebar**: Fixed left, 280px width, Navy Blue background, contains secondary navigation, quick stats, and contextual filters.

**Main Content**: Fluid width, Off White background, contains breadcrumb, page title, and dashboard content in a 12-column grid.

---

## Component Specifications

### KPI Cards

Key Performance Indicator cards are the primary data display component.

**Visual Specifications**:
- Width: Spans 3 columns (25% of container)
- Height: 160px
- Background: Pure White
- Border: 1px solid Light Gray
- Border Radius: 8px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Padding: 24px

**Content Structure**:
```
┌────────────────────────────────┐
│ [Icon]  Label (Body Small)     │
│                                │
│ 1,234,567  (Metric Large)      │
│                                │
│ ↑ 12.5% vs last month          │
│ (Caption, Success Green)       │
└────────────────────────────────┘
```

**States**:
- **Default**: White background, Light Gray border
- **Hover**: Shadow increases to `0 4px 16px rgba(0, 0, 0, 0.12)`
- **Active**: Steel Blue border, no shadow change

**Typography**:
- Label: Inter 14px Regular, Medium Gray
- Metric: Inter 42px Semi-Bold, Near Black
- Change: Inter 12px Medium, Success Green/Danger Red

### Chart Cards

Charts are contained in elevated cards for visual separation.

**Visual Specifications**:
- Width: Spans 6 columns (50% of container) or 12 columns (100%)
- Height: Variable (minimum 400px)
- Background: Pure White
- Border: 1px solid Light Gray
- Border Radius: 8px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Padding: 24px

**Header Structure**:
- Title: Inter 20px Semi-Bold, Near Black
- Subtitle: Inter 14px Regular, Medium Gray
- Action Menu: Icon button (24x24px) aligned right

**Chart Area**:
- Minimum height: 320px
- Padding: 16px
- Background: Transparent
- Grid lines: Light Gray, 1px, dashed

**Chart Colors** (in order):
1. Steel Blue (`#2E5984`)
2. Royal Gold (`#D4AF37`)
3. Success Green (`#28A745`)
4. Slate Blue (`#4A7BA7`)
5. Amber (`#F0C419`)
6. Info Blue (`#17A2B8`)

### Data Tables

Tables display detailed information with sorting and filtering.

**Visual Specifications**:
- Width: Spans 12 columns (100% of container)
- Background: Pure White
- Border: 1px solid Light Gray
- Border Radius: 8px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`

**Header Row**:
- Height: 48px
- Background: Off White
- Border-bottom: 2px solid Light Gray
- Text: Inter 14px Semi-Bold, Near Black
- Padding: 12px 16px

**Body Rows**:
- Height: 56px
- Border-bottom: 1px solid Light Gray
- Text: Inter 14px Regular, Dark Gray
- Padding: 12px 16px
- Hover: Background changes to Pale Gold

**Column Alignment**:
- Text: Left-aligned
- Numbers: Right-aligned
- Actions: Center-aligned

### Buttons

Buttons follow a clear hierarchy of importance.

**Primary Button** (High emphasis):
- Background: Royal Gold (`#D4AF37`)
- Text: Deep Navy, Inter 16px Semi-Bold
- Padding: 12px 24px
- Border Radius: 6px
- Shadow: `0 2px 4px rgba(212, 175, 55, 0.3)`
- Hover: Background darkens to `#C19B2E`, shadow increases

**Secondary Button** (Medium emphasis):
- Background: Transparent
- Border: 2px solid Steel Blue
- Text: Steel Blue, Inter 16px Semi-Bold
- Padding: 10px 22px (adjusted for border)
- Border Radius: 6px
- Hover: Background Steel Blue, text Pure White

**Tertiary Button** (Low emphasis):
- Background: Transparent
- Text: Steel Blue, Inter 16px Medium
- Padding: 12px 16px
- Border Radius: 6px
- Hover: Background Light Blue (10% opacity)

### Navigation

**Top Navigation**:
- Height: 80px
- Background: Deep Navy
- Items: Inter 16px Medium, Pure White
- Spacing: 32px between items
- Active indicator: 4px gold underline

**Sidebar Navigation**:
- Item height: 48px
- Padding: 12px 16px
- Text: Inter 15px Regular, Light Blue
- Hover: Background Navy Blue (lighter)
- Active: Background Steel Blue, text Pure White, 4px gold left border

---

## Dashboard Sections

### 1. Header Section

The header anchors the entire interface, providing persistent navigation and context.

**Layout**:
```
┌──────────────────────────────────────────────────────────────┐
│  [NOOR Logo]  Dashboard  Analytics  Reports  [User Avatar ▼] │
└──────────────────────────────────────────────────────────────┘
```

**Components**:
- **Logo**: 40x40px, positioned 24px from left edge
- **Navigation Links**: Horizontal list, 32px spacing, Pure White text
- **User Menu**: Avatar (36x36px), name, dropdown icon, positioned 24px from right edge

**Behavior**:
- Fixed position at top of viewport
- Casts shadow on scroll: `0 2px 8px rgba(0, 0, 0, 0.15)`
- Dropdown menus appear below with 8px offset

---

### 2. Sidebar Section

The sidebar provides contextual navigation and quick access to filters.

**Layout**:
```
┌──────────────────┐
│ Main Navigation  │
│ ───────────────  │
│ • Dashboard      │
│ • Workforce      │
│ • Analytics      │
│ • Reports        │
│                  │
│ Quick Stats      │
│ ───────────────  │
│ Total Workforce  │
│ 1.2M             │
│                  │
│ Emiratization    │
│ 42.3%            │
└──────────────────┘
```

**Components**:
- **Section Headings**: Inter 12px Semi-Bold, uppercase, Medium Gray, 16px bottom margin
- **Nav Items**: 48px height, 12px vertical padding, 16px horizontal padding
- **Quick Stats**: Compact KPI display, 80px height, 16px padding

---

### 3. Main Content Area

The main content area houses the primary dashboard information.

#### Breadcrumb

**Layout**: `Home > Federal Dashboard > Workforce Analytics`

**Styling**:
- Inter 14px Regular, Medium Gray
- Separator: `/` or `>`, 8px horizontal margin
- Current page: Near Black, not clickable
- Links: Steel Blue, underline on hover

#### Page Title

**Layout**:
```
National Workforce Dashboard
Real-time insights into UAE's workforce landscape
```

**Styling**:
- Title: Playfair Display 48px Bold, Near Black
- Subtitle: Inter 18px Regular, Medium Gray
- Margin-bottom: 32px

#### KPI Row

Four KPI cards spanning the full width (3 columns each).

**Example KPIs**:
1. **Total Workforce**: 1,234,567 | ↑ 2.3% vs last month
2. **Emiratization Rate**: 42.3% | ↑ 1.2% vs last month
3. **Job Openings**: 45,678 | ↓ 5.4% vs last month
4. **Skills Gap Index**: 67/100 | → 0% vs last month

**Layout**:
```
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ KPI1 │ │ KPI2 │ │ KPI3 │ │ KPI4 │
└──────┘ └──────┘ └──────┘ └──────┘
```

#### Charts Row

Two chart cards side by side (6 columns each).

**Left Chart**: Workforce Trends (Line chart)
- Shows total workforce, Emirati workforce, and expat workforce over 12 months
- Y-axis: Workforce count (0 to 1.5M)
- X-axis: Months (Jan to Dec)
- Legend: Bottom, horizontal

**Right Chart**: Emiratization by Sector (Bar chart)
- Shows Emiratization percentage by 8 major sectors
- Y-axis: Sectors (Government, Oil & Gas, Finance, etc.)
- X-axis: Percentage (0% to 100%)
- Target line: 40% (dashed gold line)

**Layout**:
```
┌─────────────────┐ ┌─────────────────┐
│ Workforce       │ │ Emiratization   │
│ Trends          │ │ by Sector       │
│                 │ │                 │
│ [Line Chart]    │ │ [Bar Chart]     │
│                 │ │                 │
└─────────────────┘ └─────────────────┘
```

#### Regional Map

Full-width interactive map of UAE showing workforce distribution.

**Visual Specifications**:
- Width: 12 columns (100%)
- Height: 500px
- Background: Pure White
- Border: 1px solid Light Gray
- Border Radius: 8px
- Padding: 24px

**Map Features**:
- UAE map with 7 emirates clearly delineated
- Color-coded by workforce density (light to dark navy)
- Hover shows tooltip with emirate name and workforce count
- Click navigates to emirate-specific dashboard

#### Data Table

Full-width table showing sector-wise breakdown.

**Columns**:
1. Sector (left-aligned)
2. Total Workforce (right-aligned)
3. Emirati (right-aligned)
4. Expat (right-aligned)
5. Emiratization % (right-aligned)
6. Change (right-aligned, color-coded)
7. Actions (center-aligned)

**Example Row**:
| Sector | Total Workforce | Emirati | Expat | Emiratization % | Change | Actions |
|--------|----------------|---------|-------|-----------------|--------|---------|
| Government | 234,567 | 145,678 | 88,889 | 62.1% | ↑ 2.3% | [View] |

---

## Figma Prompts

### Prompt 1: Federal Dashboard - Full Page Layout

```
Create a Federal Government Dashboard interface for the NOOR Platform with the following specifications:

LAYOUT:
- Desktop viewport: 1920x1080px
- Fixed header at top: 80px height, deep navy background (#0A1F44)
- Fixed sidebar on left: 280px width, navy blue background (#1E3A5F)
- Main content area: Fluid width, off-white background (#F8F9FA)
- 12-column grid with 24px gutters

HEADER:
- NOOR logo (40x40px) on the left with "NOOR Platform" text in white
- Horizontal navigation: "Dashboard", "Analytics", "Reports", "Settings"
- User avatar (36x36px) with name and dropdown icon on the right
- All text in white, Inter font, 16px medium weight

SIDEBAR:
- Section heading "Main Navigation" in uppercase, 12px, gray
- Navigation items: Dashboard, Workforce, Eight-Faculty, Regional, Sectors, Skills Gap, Policy, Export
- Each item 48px height with icon on left
- Active item has steel blue background and 4px gold left border
- Quick stats section at bottom showing "Total Workforce: 1.2M" and "Emiratization: 42.3%"

MAIN CONTENT:
- Breadcrumb: "Home > Federal Dashboard" (14px, gray)
- Page title: "National Workforce Dashboard" (Playfair Display, 48px, bold)
- Subtitle: "Real-time insights into UAE's workforce landscape" (Inter, 18px, gray)
- Four KPI cards in a row (each 25% width):
  1. Total Workforce: 1,234,567 with up arrow and +2.3%
  2. Emiratization Rate: 42.3% with up arrow and +1.2%
  3. Job Openings: 45,678 with down arrow and -5.4%
  4. Skills Gap Index: 67/100 with neutral indicator
- Two charts side by side (each 50% width):
  - Left: Line chart showing workforce trends over 12 months
  - Right: Horizontal bar chart showing Emiratization by sector
- Full-width UAE map showing workforce distribution by emirate
- Full-width data table with sector breakdown

COLORS:
- Primary: Deep Navy (#0A1F44), Navy Blue (#1E3A5F), Steel Blue (#2E5984)
- Accent: Royal Gold (#D4AF37), Amber (#F0C419)
- Background: Off White (#F8F9FA), Pure White (#FFFFFF)
- Text: Near Black (#212529), Medium Gray (#6C757D)
- Success: Green (#28A745), Danger: Red (#DC3545)

TYPOGRAPHY:
- Headings: Playfair Display (serif), bold
- Body: Inter (sans-serif), regular to semi-bold
- Maintain clear hierarchy with size and weight

STYLE:
- Professional, authoritative, data-driven
- Clean lines, generous spacing, subtle shadows
- Cards have 8px border radius and soft shadow
- Hover states increase shadow depth
- All elements aligned to 8px grid

DETAILS:
- Use actual data visualizations (not placeholders)
- Include realistic numbers and percentages
- Show proper chart legends and axis labels
- Ensure all text is readable and properly contrasted
```

---

### Prompt 2: Federal Dashboard - KPI Cards Component

```
Design a set of 4 KPI (Key Performance Indicator) cards for a Federal Government Dashboard with these specifications:

CARD DIMENSIONS:
- Width: 360px
- Height: 160px
- Background: Pure white (#FFFFFF)
- Border: 1px solid light gray (#E9ECEF)
- Border radius: 8px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
- Padding: 24px

CARD 1 - Total Workforce:
- Icon: Users icon in steel blue circle (32x32px) top-left
- Label: "Total Workforce" (Inter, 14px, gray #6C757D) below icon
- Main metric: "1,234,567" (Inter, 42px, semi-bold, near black #212529) center
- Change indicator: "↑ 2.3% vs last month" (Inter, 12px, success green #28A745) bottom

CARD 2 - Emiratization Rate:
- Icon: Flag icon in steel blue circle (32x32px) top-left
- Label: "Emiratization Rate" (Inter, 14px, gray) below icon
- Main metric: "42.3%" (Inter, 42px, semi-bold, near black) center
- Change indicator: "↑ 1.2% vs last month" (Inter, 12px, success green) bottom

CARD 3 - Job Openings:
- Icon: Briefcase icon in steel blue circle (32x32px) top-left
- Label: "Job Openings" (Inter, 14px, gray) below icon
- Main metric: "45,678" (Inter, 42px, semi-bold, near black) center
- Change indicator: "↓ 5.4% vs last month" (Inter, 12px, danger red #DC3545) bottom

CARD 4 - Skills Gap Index:
- Icon: Chart icon in steel blue circle (32x32px) top-left
- Label: "Skills Gap Index" (Inter, 14px, gray) below icon
- Main metric: "67/100" (Inter, 42px, semi-bold, near black) center
- Change indicator: "→ 0% vs last month" (Inter, 12px, medium gray) bottom

STATES:
- Default: As described above
- Hover: Shadow increases to 0 4px 16px rgba(0, 0, 0, 0.12)
- Active: Border changes to steel blue (#2E5984)

LAYOUT:
- Arrange all 4 cards in a horizontal row
- 24px spacing between cards
- Cards should be visually identical except for content
- Align all elements consistently across cards

STYLE:
- Clean, professional, government-appropriate
- Generous whitespace for easy scanning
- Clear visual hierarchy: icon → label → metric → change
- Use proper number formatting (commas for thousands)
- Arrows should be actual arrow symbols (↑ ↓ →), not text
```

---

### Prompt 3: Federal Dashboard - Workforce Trends Chart

```
Design a line chart component showing workforce trends for a Federal Government Dashboard:

CONTAINER:
- Width: 800px
- Height: 480px
- Background: Pure white (#FFFFFF)
- Border: 1px solid light gray (#E9ECEF)
- Border radius: 8px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
- Padding: 24px

HEADER:
- Title: "Workforce Trends" (Inter, 20px, semi-bold, near black #212529)
- Subtitle: "12-month overview" (Inter, 14px, gray #6C757D)
- Time range selector: "Last 12 months" dropdown (top-right)
- Export button: Icon button (24x24px) next to dropdown

CHART AREA:
- Width: 752px (full width minus padding)
- Height: 360px
- Background: Transparent
- Padding: 16px

AXES:
- Y-axis (left): Workforce count from 0 to 1.5M
  - Labels: "0", "500K", "1.0M", "1.5M" (Inter, 12px, gray)
  - Grid lines: Horizontal, dashed, light gray, 1px
- X-axis (bottom): Months from Jan to Dec
  - Labels: "Jan", "Feb", "Mar", etc. (Inter, 12px, gray)
  - No grid lines

DATA SERIES (3 lines):
1. Total Workforce:
   - Color: Steel blue (#2E5984)
   - Line width: 3px
   - Data points: Circular markers, 6px diameter
   - Trend: Gradual increase from 1.15M to 1.23M

2. Emirati Workforce:
   - Color: Royal gold (#D4AF37)
   - Line width: 3px
   - Data points: Circular markers, 6px diameter
   - Trend: Steady increase from 480K to 522K

3. Expat Workforce:
   - Color: Slate blue (#4A7BA7)
   - Line width: 3px
   - Data points: Circular markers, 6px diameter
   - Trend: Slight increase from 670K to 708K

LEGEND:
- Position: Bottom center, horizontal layout
- Items: "Total Workforce", "Emirati Workforce", "Expat Workforce"
- Each item: Color square (12x12px) + label (Inter, 14px, gray)
- Spacing: 32px between items

INTERACTIONS:
- Hover over data point: Show tooltip with exact value
- Tooltip: White background, dark text, 8px padding, 4px border radius, subtle shadow
- Example tooltip: "Total Workforce\nMarch 2024\n1,187,234"

STYLE:
- Professional, clean, data-focused
- Smooth line curves (not angular)
- Subtle animations on load (lines draw from left to right)
- Maintain government color scheme throughout
```

---

### Prompt 4: Federal Dashboard - UAE Regional Map

```
Design an interactive map of the UAE showing workforce distribution for a Federal Government Dashboard:

CONTAINER:
- Width: 1200px (full width)
- Height: 500px
- Background: Pure white (#FFFFFF)
- Border: 1px solid light gray (#E9ECEF)
- Border radius: 8px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
- Padding: 24px

HEADER:
- Title: "Regional Talent Distribution" (Inter, 20px, semi-bold, near black)
- Subtitle: "Workforce by Emirate" (Inter, 14px, gray)
- View toggle: "Map View" / "List View" buttons (top-right)

MAP AREA:
- Width: 1152px (full width minus padding)
- Height: 400px
- Background: Off-white (#F8F9FA)
- Border: 1px solid light gray

UAE MAP:
- Show all 7 emirates clearly delineated
- Emirates (from north to south):
  1. Ras Al Khaimah
  2. Umm Al Quwain
  3. Ajman
  4. Sharjah
  5. Dubai
  6. Abu Dhabi
  7. Fujairah

COLOR CODING (by workforce density):
- Highest density (Abu Dhabi, Dubai): Deep navy (#0A1F44)
- High density (Sharjah): Navy blue (#1E3A5F)
- Medium density (Ras Al Khaimah, Fujairah): Steel blue (#2E5984)
- Lower density (Ajman, Umm Al Quwain): Slate blue (#4A7BA7)
- Lowest density: Light blue (#7BA3C7)

EMIRATE LABELS:
- Positioned inside or adjacent to each emirate
- Font: Inter, 14px, semi-bold, white (on dark) or navy (on light)
- Include workforce count below name
- Example: "Dubai\n456,789"

LEGEND:
- Position: Bottom-right corner of map
- Title: "Workforce Density" (Inter, 12px, semi-bold, gray)
- Color scale: Gradient from light blue to deep navy
- Labels: "Low" (left) to "High" (right)
- Size: 200px wide, 60px tall

INTERACTIONS:
- Hover: Emirate brightens slightly, border appears (2px gold)
- Hover tooltip: Shows detailed stats
  - Emirate name
  - Total workforce
  - Emirati percentage
  - Top 3 sectors
- Click: Navigates to emirate-specific dashboard

TOOLTIP EXAMPLE:
```
Dubai
─────────────────
Total Workforce: 456,789
Emiratization: 38.2%

Top Sectors:
• Trade: 125,000
• Tourism: 98,000
• Finance: 87,000
```

STYLE:
- Clean, professional, government-appropriate
- Smooth transitions on hover (0.3s ease)
- Subtle shadow on hover to indicate interactivity
- Maintain navy-gold color scheme
- Ensure all text is readable against backgrounds
```

---

### Prompt 5: Federal Dashboard - Sector Data Table

```
Design a comprehensive data table showing sector-wise workforce breakdown for a Federal Government Dashboard:

CONTAINER:
- Width: 1200px (full width)
- Height: Auto (minimum 600px)
- Background: Pure white (#FFFFFF)
- Border: 1px solid light gray (#E9ECEF)
- Border radius: 8px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)

HEADER:
- Title: "Sector-wise Workforce Analysis" (Inter, 20px, semi-bold, near black)
- Subtitle: "Detailed breakdown by industry sector" (Inter, 14px, gray)
- Search box: "Search sectors..." (top-right, 280px wide)
- Filter button: Icon button next to search
- Export button: "Export CSV" button (steel blue, secondary style)

TABLE HEADER:
- Height: 48px
- Background: Off-white (#F8F9FA)
- Border-bottom: 2px solid light gray (#E9ECEF)
- Text: Inter, 14px, semi-bold, near black
- Padding: 12px 16px

COLUMNS (7 total):
1. Sector (left-aligned, 200px)
   - Icon + sector name
2. Total Workforce (right-aligned, 150px)
   - Formatted with commas
3. Emirati (right-aligned, 120px)
   - Count + percentage in parentheses
4. Expat (right-aligned, 120px)
   - Count + percentage in parentheses
5. Emiratization % (right-aligned, 140px)
   - Percentage with progress bar
6. Change (right-aligned, 100px)
   - Arrow + percentage, color-coded
7. Actions (center-aligned, 100px)
   - "View" button

TABLE ROWS (8 sectors):
1. Government: 234,567 | 145,678 (62%) | 88,889 (38%) | 62.1% | ↑ 2.3%
2. Oil & Gas: 187,234 | 56,789 (30%) | 130,445 (70%) | 30.3% | ↑ 1.8%
3. Finance: 156,789 | 67,890 (43%) | 88,899 (57%) | 43.3% | ↑ 3.2%
4. Healthcare: 145,678 | 54,321 (37%) | 91,357 (63%) | 37.3% | ↑ 2.1%
5. Education: 134,567 | 78,901 (59%) | 55,666 (41%) | 58.6% | ↑ 4.5%
6. Trade: 198,765 | 45,678 (23%) | 153,087 (77%) | 23.0% | ↓ 0.5%
7. Tourism: 123,456 | 34,567 (28%) | 88,889 (72%) | 28.0% | ↑ 1.2%
8. Technology: 87,654 | 28,901 (33%) | 58,753 (67%) | 33.0% | ↑ 5.7%

ROW STYLING:
- Height: 56px
- Border-bottom: 1px solid light gray
- Text: Inter, 14px, regular, dark gray (#343A40)
- Padding: 12px 16px
- Hover: Background changes to pale gold (#F5E6D3)

EMIRATIZATION PROGRESS BAR:
- Width: 80px
- Height: 8px
- Background: Light gray
- Fill: Royal gold (#D4AF37)
- Border radius: 4px
- Positioned next to percentage text

CHANGE INDICATORS:
- Positive (↑): Success green (#28A745)
- Negative (↓): Danger red (#DC3545)
- Neutral (→): Medium gray (#6C757D)

ACTIONS BUTTON:
- Text: "View" (Inter, 14px, medium, steel blue)
- Background: Transparent
- Border: 1px solid steel blue
- Padding: 6px 16px
- Border radius: 4px
- Hover: Background steel blue, text white

TABLE FOOTER:
- Height: 56px
- Background: Off-white
- Border-top: 2px solid light gray
- Shows totals: "Total: 1,268,710 workforce across 8 sectors"
- Pagination: "1 of 1" (right-aligned)

INTERACTIONS:
- Column headers: Clickable for sorting (show sort icon on hover)
- Rows: Clickable (entire row), cursor changes to pointer
- Hover: Row highlights with pale gold background
- Click: Navigates to sector-specific dashboard

STYLE:
- Clean, professional, data-focused
- Clear visual hierarchy
- Proper number formatting throughout
- Consistent alignment (text left, numbers right)
- Adequate spacing for readability
```

---

## Implementation Guidelines

### Responsive Behavior

The Federal Dashboard must adapt gracefully to different screen sizes while maintaining its professional appearance and functionality.

**Desktop (1920px+)**: Full layout as described, with all elements visible and properly spaced. KPI cards display 4 across. Charts display 2 across. Sidebar remains fixed.

**Laptop (1440px)**: Container width reduces to 1280px. KPI cards remain 4 across but with reduced padding. Charts remain 2 across. Sidebar width reduces to 240px.

**Tablet (1024px)**: Sidebar collapses to icon-only (80px width) or becomes a slide-out drawer. KPI cards display 2 across in 2 rows. Charts stack vertically (1 per row). Table becomes horizontally scrollable.

**Mobile (768px)**: Sidebar becomes a hamburger menu. KPI cards stack vertically (1 per row). Charts stack vertically with reduced height. Table becomes card-based layout for better mobile viewing.

### Accessibility

The Federal Dashboard must be accessible to all users, including those with disabilities.

**Color Contrast**: All text must meet WCAG AA standards (4.5:1 for body text, 3:1 for large text). Test all color combinations, especially navy backgrounds with white text.

**Keyboard Navigation**: All interactive elements must be keyboard accessible. Provide visible focus indicators (2px gold outline). Ensure logical tab order follows visual hierarchy.

**Screen Readers**: Use semantic HTML (header, nav, main, section, article). Provide alt text for all icons and images. Use ARIA labels for complex components. Announce dynamic content changes.

**Motion**: Respect `prefers-reduced-motion` media query. Disable or reduce animations for users who prefer reduced motion.

### Performance

The Federal Dashboard must load quickly and respond smoothly to user interactions.

**Initial Load**: Target < 3 seconds for first contentful paint. Lazy load charts and maps below the fold. Use skeleton screens while loading data.

**Data Updates**: Implement efficient polling or WebSocket connections for real-time data. Update only changed elements, not entire dashboard. Show loading indicators for data refreshes.

**Chart Rendering**: Use canvas-based charting libraries for large datasets. Implement data decimation for line charts with many points. Virtualize long tables to render only visible rows.

### Data Refresh

The Federal Dashboard displays real-time data that must be kept current.

**Automatic Refresh**: Poll API every 30 seconds for KPI updates. Poll every 5 minutes for chart data. Poll every 15 minutes for table data.

**Manual Refresh**: Provide refresh button in header. Show last updated timestamp. Indicate when refresh is in progress.

**Real-time Updates**: Use WebSocket for critical metrics that change frequently. Animate value changes to draw attention. Show notification badge when new data arrives.

---

## Conclusion

The Federal Government Dashboard represents the pinnacle of data-driven governance interfaces. Through its authoritative navy-and-gold color scheme, clear typographic hierarchy, and sophisticated data visualizations, it empowers federal decision-makers with the insights needed to guide UAE's workforce toward Vision 2071.

Every design decision—from the choice of Playfair Display for headings to the 8px spacing grid—serves the dual purpose of conveying authority and enabling efficient analysis. The dashboard doesn't just display data; it tells the story of UAE's workforce evolution, making complex national trends comprehensible at a glance.

By following these specifications and using the provided Figma prompts, designers can create a Federal Dashboard that meets the highest standards of governmental interface design while remaining accessible, performant, and user-friendly.

---

**Document Version**: 1.0  
**Last Updated**: November 4, 2024  
**Author**: Manus AI  
**Project**: NOOR Platform

🌟 **Illuminating Human Potential for UAE Vision 2071** 🇦🇪

