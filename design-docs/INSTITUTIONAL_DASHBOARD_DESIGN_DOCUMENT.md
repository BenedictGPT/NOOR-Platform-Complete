# Institutional Employers Dashboard - Design Document & Figma Prompts

**Project**: NOOR Platform - National Opportunities Optimization & Realization  
**Interface**: Institutional Employers Dashboard  
**Version**: 1.0  
**Date**: November 4, 2024  
**Author**: Manus AI

---

## Executive Summary

The Institutional Employers Dashboard serves as the strategic workforce management command center for UAE organizations. This interface empowers HR professionals, recruiters, and business leaders to optimize their workforce, track Emiratization progress, identify skills gaps, and make data-driven talent decisions. The design embodies **professional sophistication and premium quality** through a distinctive burgundy and gold color scheme.

Unlike the authoritative Federal Dashboard (navy/gold) and the optimistic Individual Dashboard (blue spectrum), the Institutional interface adopts a **corporate luxury aesthetic** that signals exclusivity, quality, and executive-level decision-making. The burgundy-to-gold palette conveys prestige, stability, and success—values that resonate with institutional clients who invest significantly in their workforce.

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

The Institutional Dashboard is guided by four principles that define its visual identity and functional approach:

**Professional Sophistication**: The interface must project executive-level professionalism. Burgundy serves as the primary color, historically associated with prestige, power, and corporate success. Gold accents add luxury and achievement, reflecting the high-value nature of institutional subscriptions. Every element communicates that this is a premium, enterprise-grade platform.

**Data-Driven Workforce Intelligence**: Organizations need actionable insights to optimize their workforce. The dashboard prioritizes key metrics that matter to HR and business leaders: Emiratization Quality Index (EQI), team performance, skills gaps, training ROI, and talent pipeline health. Complex data is presented clearly through sophisticated visualizations that support strategic decision-making.

**Efficiency and Control**: Institutional users manage multiple teams, job postings, and candidates simultaneously. The interface must enable efficient bulk operations, quick filtering, and streamlined workflows. Clear hierarchies, logical groupings, and powerful search capabilities ensure users can accomplish complex tasks with minimal friction.

**Premium Experience**: Institutional clients pay premium subscriptions and expect a premium experience. The design reflects this through refined details: subtle gradients, elegant transitions, high-quality imagery, and polished interactions. Every touchpoint reinforces the value proposition of the platform.

### Visual Language

The Institutional Dashboard speaks through a visual language of **prestige, control, and excellence**. Rich burgundy tones create a sense of corporate authority. Gold accents highlight achievements and key metrics. Crisp typography and generous whitespace project confidence and clarity. The overall effect is one of executive sophistication—a tool built for serious business.

---

## Color Palette

### Primary Burgundy Spectrum

The Institutional interface employs a carefully calibrated burgundy-to-oxblood spectrum that progresses from light to dark, creating depth and hierarchy.

| Color Name | Hex Code | RGB | Usage | Accessibility |
|------------|----------|-----|-------|---------------|
| **Crimson** | `#C21317` | rgb(194, 19, 23) | Primary CTAs, highlights | WCAG AA on white |
| **Burgundy** | `#7A0A0A` | rgb(122, 10, 10) | Primary actions, headers | WCAG AAA on white |
| **Oxblood** | `#4A0202` | rgb(74, 2, 2) | Elevated surfaces, navigation | WCAG AAA on white |
| **Near Black** | `#0A0000` | rgb(10, 0, 0) | Dark accents, emphasis | WCAG AAA on white |

### Gold Spectrum

| Color Name | Hex Code | RGB | Usage | Accessibility |
|------------|----------|-----|-------|---------------|
| **Gold Light** | `#F8D72E` | rgb(248, 215, 46) | Status indicators, chips | WCAG AAA on dark |
| **Gold** | `#F0A500` | rgb(240, 165, 0) | Secondary actions, tabs | WCAG AA on dark |
| **Amber** | `#D97A00` | rgb(217, 122, 0) | Emphasis, progress | WCAG AA on white |
| **Brown** | `#8A3C00` | rgb(138, 60, 0) | Borders, dividers | WCAG AA on white |

### Semantic Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Success Green** | `#059669` | rgb(5, 150, 105) | Positive metrics, completed |
| **Warning Orange** | `#EA580C` | rgb(234, 88, 12) | Warnings, attention needed |
| **Danger Red** | `#DC2626` | rgb(220, 38, 38) | Critical issues, errors |
| **Info Blue** | `#0284C7` | rgb(2, 132, 199) | Informational messages |

### Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Card backgrounds, text on dark |
| **Cream** | `#FFF8F0` | rgb(255, 248, 240) | Page backgrounds |
| **Light Beige** | `#F5E6D3` | rgb(245, 230, 211) | Subtle backgrounds |
| **Medium Gray** | `#78716C` | rgb(120, 113, 108) | Secondary text |
| **Dark Gray** | `#44403C` | rgb(68, 64, 60) | Body text |
| **Charcoal** | `#292524` | rgb(41, 37, 36) | Headings, emphasis |

### Color Usage Guidelines

**Backgrounds**: Oxblood (`#4A0202`) for the main header and navigation, creating a strong, authoritative presence. Cream (`#FFF8F0`) for the page background provides a warm, premium feel distinct from the stark white of other interfaces. Pure White (`#FFFFFF`) for card backgrounds ensures content clarity.

**Text**: Charcoal (`#292524`) for headings and important content. Dark Gray (`#44403C`) for body text. Medium Gray (`#78716C`) for secondary information and labels. Pure White on burgundy backgrounds.

**Interactive Elements**: Burgundy (`#7A0A0A`) for primary buttons and key actions. Crimson (`#C21317`) for high-emphasis CTAs and hover states. Gold (`#F0A500`) for secondary actions and highlights. Gold Light (`#F8D72E`) for status indicators and achievements.

**Data Visualization**: Use the burgundy-to-gold spectrum for multi-series charts. Burgundy for primary data series. Gold for secondary or comparative data. Success Green for positive trends. Danger Red for negative trends or alerts.

**Premium Accents**: Subtle gradients from Burgundy to Oxblood for elevated surfaces. Gold accents on premium features or achievements. Light Beige for subtle backgrounds that add warmth without distraction.

---

## Typography

### Font Families

The Institutional Dashboard employs the same dual-font system as other interfaces but with usage patterns that emphasize professionalism and authority.

**Headings**: **Playfair Display** (serif)  
- Used prominently for executive-level communication
- Conveys tradition, authority, and prestige
- Reserved for page titles, section headings, and key metrics
- Weights: 600 (Semi-Bold), 700 (Bold)

**Body Text**: **Inter** (sans-serif)  
- Primary typeface for body text, labels, and UI elements
- Clean, modern, highly readable
- Balances the traditional serif headings
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### Type Scale

The dashboard employs a modular scale (1.250 - Major Third) for consistent typography, with sizes optimized for executive-level information density.

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
| **Metric Large** | Playfair Display | 48px | 700 | 1.1 | Key performance indicators |
| **Metric** | Inter | 32px | 600 | 1.2 | Standard metrics |

### Typography Guidelines

**Executive Tone**: Use formal, professional language. Avoid casual phrasing. Use title case for major headings. This reinforces the executive-level positioning of the platform.

**Data Clarity**: Present numbers prominently with clear labels. Use consistent formatting (commas for thousands, appropriate decimal places). Add context (percentages, comparisons, trends) to make data actionable.

**Hierarchy**: Establish clear visual hierarchy through size, weight, and color. Executive summaries should be immediately distinguishable from detailed breakdowns. Use Playfair Display for high-level insights, Inter for detailed data.

**Emphasis**: Use bold weight for key terms and critical metrics. Use Gold color for achievements and positive highlights. Use Crimson for urgent actions or critical issues.

---

## Layout Structure

### Grid System

The Institutional Dashboard employs a **12-column grid** with responsive breakpoints optimized for executive displays.

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

The Institutional Dashboard follows a **fixed sidebar + main content** layout similar to the Federal interface but with distinct styling.

```
┌─────────────────────────────────────────────────────────┐
│  Header (80px height)                                   │
│  - Logo | Navigation | Notifications | User Menu        │
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ Sidebar  │  Main Content Area                           │
│ (280px)  │  - Breadcrumb                                │
│          │  - Page Title                                │
│ - Nav    │  - EQI Dashboard                             │
│ - Links  │  - Team Performance                          │
│ - Stats  │  - Active Job Postings                       │
│          │  - Candidate Pipeline                        │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

**Header**: Fixed at top, 80px height, Oxblood background, contains logo, main navigation, notifications, and user menu.

**Sidebar**: Fixed left, 280px width, Burgundy background, contains secondary navigation, quick stats, and organization info.

**Main Content**: Fluid width, Cream background, contains breadcrumb, page title, and dashboard content in a 12-column grid.

---

## Component Specifications

### EQI Dashboard Card

The Emiratization Quality Index (EQI) is the flagship metric for institutional clients.

**Visual Specifications**:
- Width: 12 columns (100% of container)
- Height: 280px
- Background: Pure White
- Border: 2px solid Gold
- Border Radius: 12px
- Shadow: `0 4px 16px rgba(122, 10, 10, 0.15)`
- Padding: 32px

**Content Structure**:
```
┌────────────────────────────────────────────────────────┐
│ Emiratization Quality Index (EQI)                      │
│                                                        │
│        78/100                    [Circular Gauge]      │
│     (Playfair 48px)                                    │
│                                                        │
│ ↑ 5 points vs last quarter                             │
│                                                        │
│ Breakdown:                                             │
│ • Hiring Quality: 82/100                               │
│ • Retention Rate: 76/100                               │
│ • Development Investment: 75/100                       │
└────────────────────────────────────────────────────────┘
```

**EQI Gauge**:
- Size: 180x180px
- Type: Circular progress gauge
- Background: Light Beige
- Fill: Gradient from Burgundy to Gold
- Stroke width: 16px
- Center text: EQI score (Playfair 48px Bold)
- Animated fill on load

**Color Coding**:
- 0-40: Danger Red (Needs Improvement)
- 41-60: Warning Orange (Below Target)
- 61-80: Amber (Good)
- 81-100: Gold (Excellent)

---

### Team Performance Cards

Cards displaying team-level metrics and competency distribution.

**Visual Specifications**:
- Width: 4 columns each (33.33% of container)
- Height: 200px
- Background: Pure White
- Border: 1px solid Light Beige
- Border Radius: 12px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Padding: 24px

**Card Structure**:
```
┌────────────────────────┐
│ [Team Icon]            │
│                        │
│ Engineering Team       │
│ 45 members             │
│                        │
│ Avg. Competency: 7.8   │
│ [Progress Bar]         │
│                        │
│ Top Faculty: Intellect │
└────────────────────────┘
```

**Team Icon**:
- Size: 48x48px
- Background: Gradient from Burgundy to Crimson
- Icon: Team/people icon (24x24px, white)
- Border-radius: 50% (circle)

**Metrics**:
- Team name: Inter 18px Semi-Bold, Charcoal
- Member count: Inter 14px Regular, Medium Gray
- Avg competency: Inter 16px Medium, Burgundy
- Top faculty: Inter 14px Regular, Gold

**Progress Bar**:
- Width: 100%
- Height: 8px
- Background: Light Beige
- Fill: Gradient from Burgundy to Gold
- Border-radius: 4px

---

### Job Posting Cards

Cards displaying active job postings with application metrics.

**Visual Specifications**:
- Width: 6 columns each (50% of container)
- Height: 240px
- Background: Pure White
- Border: 1px solid Light Beige
- Border Radius: 12px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Padding: 24px

**Card Structure**:
```
┌────────────────────────────────────┐
│ Senior Data Analyst                │
│ Posted 5 days ago                  │
│                                    │
│ 127 Applications                   │
│ 23 Shortlisted                     │
│ 5 Interviews Scheduled             │
│                                    │
│ Emiratization: 45% (57 Emirati)    │
│                                    │
│ [View Candidates] [Edit Posting]   │
└────────────────────────────────────┘
```

**Title**:
- Inter 20px Semi-Bold, Charcoal
- Margin-bottom: 8px

**Posted Date**:
- Inter 14px Regular, Medium Gray
- Margin-bottom: 16px

**Metrics** (3 rows):
- Label: Inter 14px Regular, Dark Gray
- Value: Inter 18px Semi-Bold, Burgundy
- 12px spacing between rows

**Emiratization Stat**:
- Background: Light Beige
- Padding: 12px
- Border-radius: 8px
- Border-left: 4px solid Gold
- Text: Inter 14px Medium, Dark Gray

**Action Buttons**:
- Primary: "View Candidates" (Burgundy background, white text)
- Secondary: "Edit Posting" (Transparent background, Burgundy border and text)
- Both: Inter 14px Semi-Bold, 8px padding, 6px border-radius

---

### Candidate Pipeline Funnel

Visual representation of the hiring pipeline.

**Visual Specifications**:
- Width: 12 columns (100% of container)
- Height: 320px
- Background: Pure White
- Border: 1px solid Light Beige
- Border Radius: 12px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Padding: 24px

**Funnel Structure**:
```
┌────────────────────────────────────────────────────────┐
│ Candidate Pipeline                                     │
│                                                        │
│ ████████████████████████████████ 450 Applications     │
│ ████████████████████ 180 Screened                     │
│ ████████████ 90 Shortlisted                           │
│ ████████ 45 Interviewed                               │
│ ████ 12 Offers                                        │
│ ██ 8 Accepted                                         │
└────────────────────────────────────────────────────────┘
```

**Funnel Stages** (6 stages):
1. Applications (100% width)
2. Screened (40% width)
3. Shortlisted (20% width)
4. Interviewed (10% width)
5. Offers (2.7% width)
6. Accepted (1.8% width)

**Stage Styling**:
- Height: 40px each
- Background: Gradient from Burgundy (left) to Gold (right)
- Border-radius: 4px
- Margin-bottom: 8px
- Text: Inter 16px Semi-Bold, White
- Count: Right-aligned within bar

**Conversion Rates**:
- Displayed between stages
- Example: "40% conversion" (Inter 12px Regular, Medium Gray)
- Positioned to the right of funnel

---

### Skills Gap Matrix

Heat map showing skills supply vs demand.

**Visual Specifications**:
- Width: 12 columns (100% of container)
- Height: 400px
- Background: Pure White
- Border: 1px solid Light Beige
- Border Radius: 12px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Padding: 24px

**Matrix Structure**:
```
┌────────────────────────────────────────────────────────┐
│ Skills Gap Matrix                                      │
│                                                        │
│           Low Demand    High Demand                    │
│ High     [Surplus]      [Optimal]                      │
│ Supply   Green cells    Gold cells                     │
│                                                        │
│ Low      [Low Priority] [Critical Gap]                 │
│ Supply   Gray cells     Red cells                      │
└────────────────────────────────────────────────────────┘
```

**Quadrants**:

**Top-Left (Surplus)**:
- Background: Success Green (light)
- Border: Success Green
- Skills: Basic Admin, Data Entry
- Action: "Redeploy or reduce hiring"

**Top-Right (Optimal)**:
- Background: Gold Light
- Border: Gold
- Skills: Project Management, Communication
- Action: "Maintain current levels"

**Bottom-Left (Low Priority)**:
- Background: Light Gray
- Border: Medium Gray
- Skills: Legacy Systems, Outdated Tech
- Action: "No immediate action"

**Bottom-Right (Critical Gap)**:
- Background: Danger Red (light)
- Border: Danger Red
- Skills: AI/ML, Cloud Architecture, Data Science
- Action: "Urgent hiring or training needed"

**Cell Content**:
- Skill name: Inter 14px Semi-Bold, Charcoal
- Supply/Demand values: Inter 12px Regular, Dark Gray
- Gap indicator: Icon (16x16px) + text

---

### Training ROI Dashboard

Metrics showing return on investment for training programs.

**Visual Specifications**:
- Width: 6 columns each (50% of container)
- Height: 280px
- Background: Pure White
- Border: 1px solid Light Beige
- Border Radius: 12px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Padding: 24px

**Content Structure**:
```
┌────────────────────────────────────┐
│ Training ROI                       │
│                                    │
│ 285%                               │
│ Return on Investment               │
│                                    │
│ Investment: AED 450,000            │
│ Value Generated: AED 1,282,500     │
│                                    │
│ [Bar Chart showing ROI trend]      │
│                                    │
│ Top Programs:                      │
│ 1. Leadership Development (420%)   │
│ 2. Technical Skills (310%)         │
│ 3. Soft Skills (180%)              │
└────────────────────────────────────┘
```

**ROI Metric**:
- Value: Playfair Display 48px Bold, Burgundy
- Label: Inter 14px Regular, Medium Gray
- Margin-bottom: 24px

**Investment Details**:
- Labels: Inter 14px Regular, Dark Gray
- Values: Inter 16px Semi-Bold, Charcoal
- 8px spacing between rows

**ROI Trend Chart**:
- Type: Bar chart
- Height: 80px
- Bars: Gradient from Burgundy to Gold
- X-axis: Last 6 quarters
- Y-axis: ROI percentage

**Top Programs List**:
- Title: Inter 14px Semi-Bold, Charcoal
- Items: Inter 13px Regular, Dark Gray
- ROI values: Inter 13px Semi-Bold, Gold
- 8px spacing between items

---

## Dashboard Sections

### 1. Header Section

The header provides persistent navigation and organizational context.

**Layout**:
```
┌──────────────────────────────────────────────────────────────┐
│  [Logo] Dashboard  Teams  Jobs  Analytics  [🔔] [Org ▼]      │
└──────────────────────────────────────────────────────────────┘
```

**Components**:
- **Logo**: 40x40px, positioned 24px from left
- **Navigation Links**: "Dashboard", "Teams", "Jobs", "Candidates", "Analytics"
  - Inter 16px Medium, Pure White (80% opacity)
  - Active: Pure White (100% opacity), 4px bottom border (Gold)
  - Spacing: 32px between items
- **Notifications**: Bell icon (24x24px), badge with count
- **Organization Menu**: Organization name + dropdown icon
  - Shows current organization
  - Dropdown for switching organizations (multi-org accounts)

**Background**:
- Solid Oxblood (`#4A0202`)
- Fixed position at top
- Casts shadow on scroll: `0 2px 12px rgba(74, 2, 2, 0.25)`

---

### 2. Sidebar Section

The sidebar provides contextual navigation and organization quick stats.

**Layout**:
```
┌──────────────────┐
│ Main Navigation  │
│ ───────────────  │
│ • Dashboard      │
│ • Team Mgmt      │
│ • Job Postings   │
│ • Candidates     │
│ • Analytics      │
│ • Settings       │
│                  │
│ Organization     │
│ ───────────────  │
│ TechCorp UAE     │
│ 450 employees    │
│                  │
│ EQI: 78/100      │
│ Emiratization:   │
│ 42.3%            │
└──────────────────┘
```

**Navigation Items**:
- Height: 48px
- Padding: 12px 16px
- Text: Inter 15px Regular, Light Beige
- Icon: 20x20px, Light Beige
- Hover: Background Oxblood (lighter)
- Active: Background Crimson, text Pure White, 4px gold left border

**Organization Info**:
- Background: Oxblood (darker)
- Padding: 16px
- Border-radius: 8px
- Text: Inter 14px Regular, Light Beige
- Metrics: Inter 16px Semi-Bold, Gold

---

### 3. Main Content Area

The main content area houses the primary dashboard information.

#### Breadcrumb

**Layout**: `Home > Institutional Dashboard > Team Management`

**Styling**:
- Inter 14px Regular, Medium Gray
- Separator: `/` or `>`, 8px horizontal margin
- Current page: Charcoal, not clickable
- Links: Burgundy, underline on hover

#### Page Title

**Layout**:
```
Workforce Intelligence Dashboard
Real-time insights into your organization's talent landscape
```

**Styling**:
- Title: Playfair Display 48px Bold, Charcoal
- Subtitle: Inter 18px Regular, Dark Gray
- Margin-bottom: 32px

#### EQI Dashboard

Full-width EQI card as specified above, positioned prominently at the top.

#### Team Performance Row

Three team performance cards spanning the full width (4 columns each).

**Layout**:
```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Team 1   │ │ Team 2   │ │ Team 3   │
└──────────┘ └──────────┘ └──────────┘
```

#### Active Job Postings Row

Two job posting cards side by side (6 columns each).

**Layout**:
```
┌─────────────────┐ ┌─────────────────┐
│ Job Posting 1   │ │ Job Posting 2   │
└─────────────────┘ └─────────────────┘
```

#### Candidate Pipeline

Full-width funnel visualization showing hiring pipeline.

#### Skills Gap Matrix

Full-width heat map showing skills supply vs demand.

#### Training ROI

Two ROI dashboard cards side by side (6 columns each).

---

## Figma Prompts

### Prompt 1: Institutional Dashboard - Full Page Layout

```
Create an Institutional Employers Dashboard interface for the NOOR Platform with the following specifications:

LAYOUT:
- Desktop viewport: 1920x1080px
- Fixed header at top: 80px height, oxblood background (#4A0202)
- Fixed sidebar on left: 280px width, burgundy background (#7A0A0A)
- Main content area: Fluid width, cream background (#FFF8F0)
- 12-column grid with 24px gutters

HEADER:
- NOOR logo (40x40px) on the left with "NOOR Platform" text in white
- Horizontal navigation: "Dashboard", "Teams", "Jobs", "Candidates", "Analytics"
- All text in white (80% opacity), Inter font, 16px medium weight
- Active item: white (100% opacity), 4px gold bottom border
- Notification bell icon (24x24px) with badge showing "5"
- Organization dropdown: "TechCorp UAE" with dropdown icon

SIDEBAR:
- Section heading "Main Navigation" in uppercase, 12px, light beige
- Navigation items: Dashboard, Team Management, Job Postings, Candidates, Analytics, Settings
- Each item 48px height with icon on left
- Active item has crimson background and 4px gold left border
- Organization info section at bottom:
  - Organization name: "TechCorp UAE"
  - Employee count: "450 employees"
  - EQI: "78/100" (gold color)
  - Emiratization: "42.3%" (gold color)

MAIN CONTENT:
- Breadcrumb: "Home > Institutional Dashboard" (14px, medium gray)
- Page title: "Workforce Intelligence Dashboard" (Playfair Display, 48px, bold, charcoal)
- Subtitle: "Real-time insights into your organization's talent landscape" (Inter, 18px, dark gray)

EQI DASHBOARD (full width):
- Pure white background, 2px gold border, 12px border-radius
- Height: 280px, padding: 32px
- Title: "Emiratization Quality Index (EQI)" (Inter, 24px, semi-bold)
- Large EQI score: "78/100" (Playfair Display, 48px, bold, burgundy)
- Circular gauge on right (180x180px, gradient burgundy to gold)
- Trend: "↑ 5 points vs last quarter" (success green)
- Breakdown:
  - Hiring Quality: 82/100
  - Retention Rate: 76/100
  - Development Investment: 75/100

TEAM PERFORMANCE (3 cards):
- Each card: 4 columns wide (33.33%), 200px height
- Pure white background, 1px light beige border, 12px border-radius
- Padding: 24px, 24px gap between cards

Card 1 - Engineering Team:
- Team icon (48x48px circle, burgundy gradient)
- Team name: "Engineering Team" (Inter, 18px, semi-bold)
- Member count: "45 members" (Inter, 14px, gray)
- Avg competency: "7.8" (Inter, 16px, burgundy)
- Progress bar (gradient burgundy to gold)
- Top faculty: "Intellect" (Inter, 14px, gold)

Card 2 - Sales Team:
- Same structure as Card 1
- Team name: "Sales Team"
- Member count: "32 members"
- Avg competency: "8.2"
- Top faculty: "Communication"

Card 3 - Operations Team:
- Same structure as Card 1
- Team name: "Operations Team"
- Member count: "28 members"
- Avg competency: "7.5"
- Top faculty: "Practical"

ACTIVE JOB POSTINGS (2 cards):
- Each card: 6 columns wide (50%), 240px height
- Pure white background, 1px light beige border, 12px border-radius
- Padding: 24px, 24px gap between cards

Card 1 - Senior Data Analyst:
- Job title: "Senior Data Analyst" (Inter, 20px, semi-bold, charcoal)
- Posted: "5 days ago" (Inter, 14px, medium gray)
- Metrics:
  - 127 Applications
  - 23 Shortlisted
  - 5 Interviews Scheduled
- Emiratization stat: "45% (57 Emirati)" in light beige box with gold border
- Buttons: "View Candidates" (burgundy) and "Edit Posting" (outline)

Card 2 - Marketing Manager:
- Same structure as Card 1
- Job title: "Marketing Manager"
- Posted: "1 week ago"
- Metrics:
  - 89 Applications
  - 15 Shortlisted
  - 3 Interviews Scheduled
- Emiratization stat: "38% (34 Emirati)"

CANDIDATE PIPELINE (full width):
- Pure white background, 1px light beige border, 12px border-radius
- Height: 320px, padding: 24px
- Title: "Candidate Pipeline" (Inter, 24px, semi-bold)
- Funnel visualization with 6 stages:
  1. 450 Applications (100% width, burgundy gradient)
  2. 180 Screened (40% width)
  3. 90 Shortlisted (20% width)
  4. 45 Interviewed (10% width)
  5. 12 Offers (2.7% width)
  6. 8 Accepted (1.8% width)
- Conversion rates shown between stages

COLORS:
- Primary: Crimson (#C21317), Burgundy (#7A0A0A), Oxblood (#4A0202)
- Accent: Gold Light (#F8D72E), Gold (#F0A500), Amber (#D97A00)
- Background: Cream (#FFF8F0), Pure White (#FFFFFF)
- Text: Charcoal (#292524), Dark Gray (#44403C), Medium Gray (#78716C)

TYPOGRAPHY:
- Headings: Playfair Display (serif), bold
- Body: Inter (sans-serif), regular to semi-bold
- Maintain clear hierarchy with size and weight

STYLE:
- Professional, sophisticated, premium
- Corporate luxury aesthetic
- Clean lines, generous spacing, refined shadows
- Cards have 12px border-radius and soft shadow
- Hover states increase shadow depth
- All elements aligned to 8px grid

DETAILS:
- Use actual data visualizations (not placeholders)
- Include realistic numbers and percentages
- Show proper chart legends and axis labels
- Ensure all text is readable and properly contrasted
```

---

### Prompt 2: Institutional Dashboard - EQI Dashboard Component

```
Design the flagship Emiratization Quality Index (EQI) dashboard component for an Institutional Employers Dashboard:

CONTAINER:
- Width: 1200px (full width)
- Height: 280px
- Background: Pure white (#FFFFFF)
- Border: 2px solid Gold (#F0A500)
- Border-radius: 12px
- Shadow: 0 4px 16px rgba(122, 10, 10, 0.15)
- Padding: 32px

LAYOUT:
- Left side (60%): Text content and breakdown
- Right side (40%): Circular gauge visualization

LEFT SIDE CONTENT:

Header:
- Title: "Emiratization Quality Index (EQI)"
  - Inter 24px Semi-Bold, Charcoal (#292524)
  - Margin-bottom: 24px

Main Score:
- Value: "78/100"
  - Playfair Display 48px Bold, Burgundy (#7A0A0A)
  - Margin-bottom: 16px

Trend Indicator:
- Text: "↑ 5 points vs last quarter"
  - Inter 16px Medium, Success Green (#059669)
  - Include up arrow icon
  - Margin-bottom: 32px

Breakdown Section:
- Title: "Breakdown:" (Inter 16px Semi-Bold, Dark Gray)
- Margin-bottom: 12px

Three metrics (vertical list, 12px spacing):
1. "Hiring Quality: 82/100"
   - Label: Inter 14px Regular, Dark Gray
   - Score: Inter 16px Semi-Bold, Gold

2. "Retention Rate: 76/100"
   - Same styling as above

3. "Development Investment: 75/100"
   - Same styling as above

RIGHT SIDE VISUALIZATION:

Circular Gauge:
- Size: 180x180px
- Type: Donut chart / circular progress
- Background ring: Light Beige (#F5E6D3), 16px stroke
- Progress ring: Gradient from Burgundy (#7A0A0A) to Gold (#F0A500), 16px stroke
- Fill: 78% (corresponding to EQI score)
- Center content:
  - Score: "78" (Playfair Display 48px Bold, Burgundy)
  - Label: "EQI" (Inter 14px Regular, Medium Gray)

Color Coding Legend (below gauge):
- Small color indicators with labels:
  - Red (0-40): "Needs Improvement"
  - Orange (41-60): "Below Target"
  - Amber (61-80): "Good"
  - Gold (81-100): "Excellent"
- Each: 8px circle + Inter 11px Regular, Medium Gray

DECORATIVE ELEMENTS:
- Subtle gold accent line on left edge (4px wide, full height)
- Optional: Subtle pattern or texture in background (very subtle, 5% opacity)

STATES:
- Default: As described
- Loading: Skeleton screen with shimmer effect
- Animated entry: Gauge fills from 0 to 78 over 1.5 seconds

INTERACTIVE ELEMENTS:
- Hover over breakdown items: Highlight corresponding segment in gauge
- Click on gauge: Open detailed EQI breakdown modal
- Export button (top-right): Icon button (24x24px) for exporting EQI report

RESPONSIVE:
- Desktop: Full layout as described
- Tablet: Gauge moves below text content
- Mobile: Gauge reduces to 140x140px

STYLE:
- Premium, executive-level presentation
- Clear visual hierarchy (score → trend → breakdown)
- Gauge provides at-a-glance understanding
- Burgundy-to-gold gradient reinforces positive progress
- Gold border emphasizes importance of this metric

NOTES:
- EQI is the flagship metric for institutional clients
- Should be the most prominent element on dashboard
- Gauge animation draws attention on page load
- Color coding helps quick interpretation
```

---

### Prompt 3: Institutional Dashboard - Candidate Pipeline Funnel

```
Design a candidate pipeline funnel visualization for an Institutional Employers Dashboard:

CONTAINER:
- Width: 1200px (full width)
- Height: 400px
- Background: Pure white (#FFFFFF)
- Border: 1px solid Light Beige (#F5E6D3)
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
- Padding: 32px

HEADER:
- Title: "Candidate Pipeline" (Inter, 24px, semi-bold, charcoal)
- Subtitle: "Hiring funnel for all active positions" (Inter, 14px, medium gray)
- Time filter: "Last 30 days" dropdown (top-right)
- Export button: Icon button (24x24px) next to dropdown

FUNNEL VISUALIZATION:

Stage 1 - Applications:
- Width: 100% (1136px)
- Height: 48px
- Background: Gradient from Burgundy (#7A0A0A) to Crimson (#C21317)
- Border-radius: 8px 8px 0 0
- Text: "450 Applications" (Inter, 18px, semi-bold, white)
- Padding: 12px 24px
- Icon: Document stack (20x20px, white)

Stage 2 - Screened:
- Width: 80% (909px)
- Height: 48px
- Background: Gradient from Burgundy to Crimson (slightly lighter)
- Border-radius: 0
- Text: "180 Screened" (Inter, 18px, semi-bold, white)
- Padding: 12px 24px
- Icon: Checkmark (20x20px, white)
- Margin-top: 4px

Stage 3 - Shortlisted:
- Width: 60% (682px)
- Height: 48px
- Background: Gradient from Burgundy to Amber (#D97A00)
- Border-radius: 0
- Text: "90 Shortlisted" (Inter, 18px, semi-bold, white)
- Padding: 12px 24px
- Icon: Star (20x20px, white)
- Margin-top: 4px

Stage 4 - Interviewed:
- Width: 40% (454px)
- Height: 48px
- Background: Gradient from Amber to Gold (#F0A500)
- Border-radius: 0
- Text: "45 Interviewed" (Inter, 18px, semi-bold, white)
- Padding: 12px 24px
- Icon: People (20x20px, white)
- Margin-top: 4px

Stage 5 - Offers:
- Width: 20% (227px)
- Height: 48px
- Background: Gradient from Gold to Gold Light (#F8D72E)
- Border-radius: 0
- Text: "12 Offers" (Inter, 18px, semi-bold, charcoal)
- Padding: 12px 24px
- Icon: Handshake (20x20px, charcoal)
- Margin-top: 4px

Stage 6 - Accepted:
- Width: 10% (114px)
- Height: 48px
- Background: Gold Light (#F8D72E)
- Border-radius: 0 0 8px 8px
- Text: "8 Accepted" (Inter, 18px, semi-bold, charcoal)
- Padding: 12px 24px
- Icon: Check circle (20x20px, success green)
- Margin-top: 4px

CONVERSION RATES:
- Position: To the right of each stage (except last)
- Background: Light Beige
- Padding: 6px 12px
- Border-radius: 4px
- Text: "40% conversion" (Inter, 13px, medium, dark gray)
- Arrow icon pointing down

Conversion 1 (Applications → Screened): "40%"
Conversion 2 (Screened → Shortlisted): "50%"
Conversion 3 (Shortlisted → Interviewed): "50%"
Conversion 4 (Interviewed → Offers): "27%"
Conversion 5 (Offers → Accepted): "67%"

EMIRATIZATION BREAKDOWN:
- Position: Below funnel
- Title: "Emiratization at each stage:" (Inter, 14px, semi-bold)
- Layout: Horizontal bar chart showing Emirati percentage per stage
- Colors: Gold for Emirati, Light Gray for non-Emirati
- Example: "Applications: 42% | Accepted: 63%"

INSIGHTS PANEL (optional):
- Position: Right side or below funnel
- Background: Light Beige
- Padding: 16px
- Border-radius: 8px
- Border-left: 4px solid Gold

Insights:
- "🎯 Strong conversion at interview stage (67%)"
- "⚠️ Low offer acceptance rate (27%) - review compensation"
- "✅ Emiratization improving through pipeline"

INTERACTIONS:
- Hover over stage: Highlight stage, show detailed tooltip
- Tooltip content:
  - Stage name
  - Count and percentage of total
  - Emirati vs non-Emirati breakdown
  - Average time in stage
- Click on stage: Navigate to detailed view of candidates in that stage

STATES:
- Default: As described
- Loading: Skeleton funnel with shimmer effect
- Animated entry: Stages build from top to bottom over 1.5 seconds
- Empty state: Show placeholder funnel with "No active candidates"

RESPONSIVE:
- Desktop: Full layout as described
- Tablet: Conversion rates move below stages
- Mobile: Funnel rotates to vertical orientation

STYLE:
- Professional, data-focused, executive-level
- Clear visual hierarchy (top to bottom = start to finish)
- Gradient colors show progression and quality improvement
- Conversion rates provide actionable insights
- Emiratization tracking integrated throughout

NOTES:
- Funnel should update in real-time as candidates move through stages
- Color progression from burgundy to gold represents journey to success
- Conversion rates help identify bottlenecks in hiring process
```

---

### Prompt 4: Institutional Dashboard - Skills Gap Matrix

```
Design a skills gap heat map matrix for an Institutional Employers Dashboard:

CONTAINER:
- Width: 1200px (full width)
- Height: 500px
- Background: Pure white (#FFFFFF)
- Border: 1px solid Light Beige (#F5E6D3)
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
- Padding: 32px

HEADER:
- Title: "Skills Gap Matrix" (Inter, 24px, semi-bold, charcoal)
- Subtitle: "Supply vs Demand Analysis" (Inter, 14px, medium gray)
- Filter buttons: "All Skills" | "Technical" | "Soft Skills" (top-right)
- View toggle: "Matrix" | "List" buttons

MATRIX LAYOUT:
- 2x2 grid (4 quadrants)
- Each quadrant: 540x180px
- 24px gap between quadrants

AXES LABELS:

Y-Axis (left):
- Label: "Internal Supply" (Inter, 14px, semi-bold, rotated -90°)
- Scale: "High" (top) to "Low" (bottom)

X-Axis (bottom):
- Label: "Market Demand" (Inter, 14px, semi-bold)
- Scale: "Low" (left) to "High" (right)

QUADRANT 1 - TOP-LEFT (High Supply, Low Demand):
- Background: Success Green (#059669) at 15% opacity
- Border: 2px solid Success Green
- Border-radius: 8px
- Padding: 20px

Header:
- Icon: Check circle (24x24px, success green)
- Title: "Surplus Skills" (Inter, 18px, semi-bold, charcoal)
- Badge: "3 skills" (Inter, 12px, medium, white on success green)

Skills (3 items):
1. "Basic Administration"
   - Supply: 45 employees
   - Demand: 12 positions
   - Gap: +33 (surplus)

2. "Data Entry"
   - Supply: 32 employees
   - Demand: 8 positions
   - Gap: +24 (surplus)

3. "Customer Service"
   - Supply: 28 employees
   - Demand: 15 positions
   - Gap: +13 (surplus)

Action:
- Text: "Consider redeployment or reduced hiring"
- Inter 13px Regular, Dark Gray
- Background: White, padding: 8px, border-radius: 4px

QUADRANT 2 - TOP-RIGHT (High Supply, High Demand):
- Background: Gold (#F0A500) at 15% opacity
- Border: 2px solid Gold
- Border-radius: 8px
- Padding: 20px

Header:
- Icon: Star (24x24px, gold)
- Title: "Optimal Balance" (Inter, 18px, semi-bold, charcoal)
- Badge: "5 skills" (Inter, 12px, medium, white on gold)

Skills (5 items):
1. "Project Management" - Supply: 18, Demand: 20, Gap: -2
2. "Communication" - Supply: 42, Demand: 45, Gap: -3
3. "Problem Solving" - Supply: 35, Demand: 38, Gap: -3
4. "Leadership" - Supply: 15, Demand: 16, Gap: -1
5. "Teamwork" - Supply: 50, Demand: 52, Gap: -2

Action:
- Text: "Maintain current hiring and development"
- Inter 13px Regular, Dark Gray
- Background: White, padding: 8px, border-radius: 4px

QUADRANT 3 - BOTTOM-LEFT (Low Supply, Low Demand):
- Background: Medium Gray (#78716C) at 15% opacity
- Border: 2px solid Medium Gray
- Border-radius: 8px
- Padding: 20px

Header:
- Icon: Minus circle (24x24px, medium gray)
- Title: "Low Priority" (Inter, 18px, semi-bold, charcoal)
- Badge: "2 skills" (Inter, 12px, medium, white on medium gray)

Skills (2 items):
1. "Legacy Systems" - Supply: 5, Demand: 2, Gap: +3
2. "Outdated Software" - Supply: 3, Demand: 1, Gap: +2

Action:
- Text: "No immediate action required"
- Inter 13px Regular, Dark Gray
- Background: White, padding: 8px, border-radius: 4px

QUADRANT 4 - BOTTOM-RIGHT (Low Supply, High Demand):
- Background: Danger Red (#DC2626) at 15% opacity
- Border: 2px solid Danger Red
- Border-radius: 8px
- Padding: 20px

Header:
- Icon: Alert triangle (24x24px, danger red)
- Title: "Critical Gaps" (Inter, 18px, semi-bold, charcoal)
- Badge: "6 skills" (Inter, 12px, medium, white on danger red)

Skills (6 items):
1. "AI/Machine Learning" - Supply: 2, Demand: 15, Gap: -13 (critical)
2. "Cloud Architecture" - Supply: 4, Demand: 12, Gap: -8 (critical)
3. "Data Science" - Supply: 3, Demand: 10, Gap: -7 (critical)
4. "Cybersecurity" - Supply: 5, Demand: 11, Gap: -6 (critical)
5. "DevOps" - Supply: 3, Demand: 8, Gap: -5 (critical)
6. "UX Design" - Supply: 4, Demand: 9, Gap: -5 (critical)

Action:
- Text: "🚨 Urgent: Hire externally or launch training programs"
- Inter 13px Semi-Bold, Danger Red
- Background: White, padding: 8px, border-radius: 4px

SKILL ITEM STYLING:
- Layout: Horizontal, space-between
- Skill name: Inter 14px Medium, Charcoal
- Gap value: Inter 14px Semi-Bold, color-coded
  - Positive (surplus): Success Green
  - Near zero (-5 to +5): Gold
  - Negative (shortage): Danger Red
- Supply/Demand: Inter 12px Regular, Medium Gray
- 8px spacing between items

LEGEND (bottom-right):
- Background: Light Beige
- Padding: 16px
- Border-radius: 8px
- Title: "Gap Severity" (Inter, 12px, semi-bold)
- Items:
  - Critical (≥10): Danger Red circle
  - High (5-9): Warning Orange circle
  - Medium (3-4): Amber circle
  - Low (1-2): Gold circle
  - Balanced (0): Success Green circle

INTERACTIONS:
- Hover over skill: Show detailed tooltip
  - Skill name
  - Current supply (count + names)
  - Market demand (open positions)
  - Gap analysis
  - Recommended actions
- Click on skill: Navigate to skill detail page
- Click on quadrant: Filter to show only skills in that quadrant

STATES:
- Default: As described
- Loading: Skeleton matrix with shimmer effect
- Empty state: Show placeholder with "No skills data available"

RESPONSIVE:
- Desktop: 2x2 grid as described
- Tablet: 2x2 grid with reduced padding
- Mobile: Stack quadrants vertically (4 rows)

STYLE:
- Professional, data-driven, actionable
- Color coding provides immediate insights
- Clear quadrant separation
- Action recommendations guide decision-making
- Critical gaps prominently highlighted

NOTES:
- Matrix should update in real-time as supply/demand changes
- Critical gaps (bottom-right) should draw immediate attention
- Color intensity could vary based on gap severity
- Export functionality to share with leadership
```

---

### Prompt 5: Institutional Dashboard - Training ROI Component

```
Design a training return on investment (ROI) dashboard component for an Institutional Employers Dashboard:

CONTAINER:
- Width: 580px (6 columns, 50% of container)
- Height: 360px
- Background: Pure white (#FFFFFF)
- Border: 1px solid Light Beige (#F5E6D3)
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
- Padding: 24px

HEADER:
- Title: "Training ROI" (Inter, 20px, semi-bold, charcoal)
- Subtitle: "Last 12 months" (Inter, 14px, medium gray)
- Info icon: (16x16px) with tooltip explaining ROI calculation

MAIN ROI METRIC:
- Value: "285%"
  - Playfair Display 48px Bold, Burgundy (#7A0A0A)
  - Margin-bottom: 8px
- Label: "Return on Investment"
  - Inter 14px Regular, Medium Gray
  - Margin-bottom: 24px

INVESTMENT DETAILS:
- Layout: Two columns

Left column:
- Label: "Total Investment"
  - Inter 14px Regular, Dark Gray
- Value: "AED 450,000"
  - Inter 18px Semi-Bold, Charcoal
  - Margin-bottom: 12px

Right column:
- Label: "Value Generated"
  - Inter 14px Regular, Dark Gray
- Value: "AED 1,282,500"
  - Inter 18px Semi-Bold, Success Green (#059669)
  - Margin-bottom: 24px

ROI TREND CHART:
- Type: Bar chart
- Height: 100px
- Width: 100% (532px)
- Background: Transparent
- Margin-bottom: 24px

Bars (6 bars for last 6 quarters):
- Width: 60px each
- Gap: 20px between bars
- Background: Gradient from Burgundy (#7A0A0A) to Gold (#F0A500)
- Border-radius: 4px 4px 0 0
- Values: Q1: 245%, Q2: 260%, Q3: 275%, Q4: 280%, Q5: 285%, Q6: 285%

X-axis:
- Labels: "Q1 2023", "Q2 2023", etc.
- Inter 11px Regular, Medium Gray

Y-axis:
- Labels: "0%", "100%", "200%", "300%"
- Inter 11px Regular, Medium Gray
- Grid lines: Dashed, Light Gray, 1px

TOP PROGRAMS SECTION:
- Title: "Top Performing Programs"
  - Inter 16px Semi-Bold, Charcoal
  - Margin-bottom: 12px

Program List (3 items):
1. Leadership Development
   - Program name: Inter 14px Medium, Dark Gray
   - ROI: "420%" (Inter 14px Semi-Bold, Gold)
   - Participants: "24 employees" (Inter 12px Regular, Medium Gray)
   - Icon: Trophy (16x16px, gold)
   - 12px spacing

2. Technical Skills
   - Program name: Inter 14px Medium, Dark Gray
   - ROI: "310%" (Inter 14px Semi-Bold, Gold)
   - Participants: "45 employees" (Inter 12px Regular, Medium Gray)
   - Icon: Code (16x16px, burgundy)
   - 12px spacing

3. Soft Skills
   - Program name: Inter 14px Medium, Dark Gray
   - ROI: "180%" (Inter 14px Semi-Bold, Amber)
   - Participants: "67 employees" (Inter 12px Regular, Medium Gray)
   - Icon: People (16x16px, amber)

CALCULATION METHOD (tooltip content):
- Title: "How ROI is Calculated"
- Formula: "(Value Generated - Investment) / Investment × 100%"
- Value Generated includes:
  - Productivity improvements
  - Reduced turnover costs
  - Increased revenue from skilled employees
  - Time saved through efficiency gains

ACTION BUTTON:
- Position: Bottom of card
- Text: "View Detailed Report →"
- Style: Text button (no background)
- Color: Burgundy
- Font: Inter 14px Semi-Bold
- Hover: Underline, color darkens

DECORATIVE ELEMENTS:
- Subtle gold accent line on left edge (4px wide, full height)
- Optional: Subtle upward arrow pattern in background (very subtle, 3% opacity)

STATES:
- Default: As described
- Loading: Skeleton screen with shimmer effect
- Hover (on programs): Highlight row, show detailed tooltip
- Empty state: "No training data available"

INTERACTIVE ELEMENTS:
- Hover over bar: Show tooltip with exact ROI and quarter
- Click on program: Navigate to program detail page
- Click on "View Detailed Report": Open full ROI analysis

RESPONSIVE:
- Desktop: Full layout as described
- Tablet: Chart height reduces to 80px
- Mobile: Bars reduce to 40px width, labels rotate

STYLE:
- Professional, data-driven, results-focused
- Burgundy-to-gold gradient emphasizes positive ROI
- Clear visual hierarchy (main ROI → trend → programs)
- Trophy icons celebrate top performers
- Clean, executive-level presentation

NOTES:
- ROI metric should be the most prominent element
- Trend chart shows consistent improvement over time
- Top programs list provides actionable insights
- Calculation tooltip ensures transparency
- Overall design reinforces value of training investment
```

---

## Implementation Guidelines

### Responsive Behavior

The Institutional Dashboard must adapt gracefully to different screen sizes while maintaining its professional, executive-level appearance.

**Desktop (1920px+)**: Full layout as described, with all elements visible and properly spaced. Sidebar remains fixed. Team cards display 3 across. Job posting cards display 2 across.

**Laptop (1440px)**: Container width reduces to 1280px. Sidebar width reduces to 240px. Team cards remain 3 across but with reduced padding. Job posting cards remain 2 across.

**Tablet (1024px)**: Sidebar collapses to icon-only (80px width) or becomes a slide-out drawer. Team cards display 2 across. Job posting cards stack vertically (1 per row). Skills gap matrix becomes 2x2 with reduced size.

**Mobile (768px)**: Sidebar becomes a hamburger menu. All cards stack vertically (1 per row). EQI dashboard adapts to mobile layout with gauge below text. Funnel visualization rotates to vertical orientation.

### Accessibility

The Institutional Dashboard must be accessible to all users, including those with disabilities.

**Color Contrast**: All text must meet WCAG AA standards (4.5:1 for body text, 3:1 for large text). Test all color combinations, especially white text on burgundy backgrounds. Ensure burgundy-to-gold gradients don't compromise text readability.

**Keyboard Navigation**: All interactive elements must be keyboard accessible. Provide visible focus indicators (2px gold outline). Ensure logical tab order follows visual hierarchy. Support keyboard shortcuts for common actions.

**Screen Readers**: Use semantic HTML (header, nav, main, section, article). Provide alt text for all icons and images. Use ARIA labels for complex components (gauges, funnels, matrices). Announce dynamic content changes (EQI updates, new candidates).

**Motion**: Respect `prefers-reduced-motion` media query. Disable or reduce animations for users who prefer reduced motion. Ensure core functionality works without animations.

### Performance

The Institutional Dashboard must load quickly and respond smoothly to user interactions.

**Initial Load**: Target < 3 seconds for first contentful paint. Prioritize EQI dashboard and team performance cards. Lazy load candidate pipeline and skills gap matrix.

**Data Updates**: Implement efficient polling or WebSocket connections for real-time data. Update only changed elements, not entire dashboard. Show loading indicators for data refreshes.

**Chart Rendering**: Use canvas-based charting libraries for large datasets. Implement data decimation for charts with many points. Virtualize long lists to render only visible items.

### Multi-Organization Support

Many institutional clients manage multiple organizations or subsidiaries.

**Organization Switching**: Provide organization dropdown in header. Switching organizations should reload dashboard with new organization's data. Maintain user preferences per organization.

**Cross-Organization Views**: Allow viewing aggregated data across all organizations. Provide comparison views to benchmark performance. Support filtering and grouping by organization.

**Permissions**: Respect role-based access control. Some users may have access to multiple organizations. Others may be restricted to specific teams or departments.

---

## Conclusion

The Institutional Employers Dashboard represents the premium, executive-level interface of the NOOR Platform. Through its sophisticated burgundy-and-gold color scheme, refined typography, and data-rich visualizations, it empowers HR professionals and business leaders to optimize their workforce strategically.

Every design decision—from the prestigious Playfair Display headings to the flagship EQI dashboard—serves to communicate premium quality and actionable intelligence. The dashboard doesn't just display data; it provides the insights needed to make high-stakes workforce decisions with confidence.

By following these specifications and using the provided Figma prompts, designers can create an Institutional Dashboard that meets the expectations of premium enterprise clients while delivering the sophisticated workforce intelligence tools they need to achieve their Emiratization and talent optimization goals.

---

**Document Version**: 1.0  
**Last Updated**: November 4, 2024  
**Author**: Manus AI  
**Project**: NOOR Platform

🌟 **Illuminating Human Potential for UAE Vision 2071** 🇦🇪

