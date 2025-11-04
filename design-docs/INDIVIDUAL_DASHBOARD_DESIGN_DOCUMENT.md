# Individual Citizens Dashboard - Design Document & Figma Prompts

**Project**: NOOR Platform - National Opportunities Optimization & Realization  
**Interface**: Individual Citizens Dashboard  
**Version**: 1.0  
**Date**: November 4, 2024  
**Author**: Manus AI

---

## Executive Summary

The Individual Citizens Dashboard is the heart of personal development and career advancement on the NOOR Platform. This interface serves UAE citizens and residents seeking to enhance their skills, discover opportunities, and realize their full potential. The design embodies optimism, motivation, and aspiration through a vibrant blue spectrum complemented by warm engagement colors.

Unlike the authoritative Federal Dashboard, the Individual interface adopts a more approachable, encouraging tone while maintaining professionalism. The **blue-based color palette** (80% cool blues, 20% warm accents) creates a sense of trust and possibility, inviting users to explore, learn, and grow. Every element is designed to motivate action—whether completing an assessment, enrolling in a course, or applying for a job.

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

The Individual Dashboard is guided by four principles that shape its visual identity and user experience:

**Optimism and Aspiration**: The interface must inspire users to pursue their goals. The blue spectrum—from deep ocean blues to bright sky blues—evokes feelings of possibility, growth, and achievement. Warm orange and red accents add energy and urgency, encouraging users to take action. Every interaction should feel like a step forward on their journey.

**Personal Empowerment**: Unlike institutional interfaces that display aggregate data, the Individual Dashboard is deeply personal. It shows "your" skills, "your" progress, "your" opportunities. The design uses first-person language, personalized recommendations, and progress tracking to make each user feel seen and supported. Gamification elements (tokens, badges, levels) reinforce the sense of personal achievement.

**Clarity and Accessibility**: While the platform offers sophisticated features (Eight-Faculty assessment, AI-powered job matching, comprehensive learning center), the interface must remain approachable for users of all technical backgrounds. Clear labels, intuitive navigation, and progressive disclosure ensure users can accomplish their goals without confusion. Visual hierarchy guides attention to the most important actions.

**Motivation Through Progress**: The dashboard makes progress visible and celebrates achievements. Progress bars, completion percentages, streak counters, and achievement badges provide constant feedback. Users can always see how far they've come and what's next. This creates a positive feedback loop that encourages continued engagement.

### Visual Language

The Individual Dashboard speaks through a visual language of **growth, possibility, and achievement**. Rounded corners soften the interface, making it feel friendly and approachable. Gradients add depth and visual interest. Animations celebrate milestones. The overall effect is energizing yet professional—a platform that takes your development seriously while making the journey enjoyable.

---

## Color Palette

### Primary Blues (80% of Design)

The Individual interface employs a carefully calibrated blue spectrum that progresses from deep to light, symbolizing the journey from current state to aspirational future.

| Color Name | Hex Code | RGB | Usage | Accessibility |
|------------|----------|-----|-------|---------------|
| **Deep Blue** | `#0B3C78` | rgb(11, 60, 120) | Primary headers, navigation | WCAG AAA on white |
| **Royal Blue** | `#164BA1` | rgb(22, 75, 161) | Primary actions, buttons | WCAG AA on white |
| **Azure** | `#2D8BE0` | rgb(45, 139, 224) | Links, interactive elements | WCAG AA on white |
| **Sky Blue** | `#7EBCEE` | rgb(126, 188, 238) | Backgrounds, highlights | WCAG AA on dark |
| **Ice Blue** | `#EAF4FB` | rgb(234, 244, 251) | Subtle backgrounds, cards | WCAG AAA on dark |

### Engagement Colors (20% of Design)

| Color Name | Hex Code | RGB | Usage | Accessibility |
|------------|----------|-----|-------|---------------|
| **Orange** | `#F87428` | rgb(248, 116, 40) | Primary CTAs, tokens | WCAG AA on white |
| **Bright Red** | `#CF2B1A` | rgb(207, 43, 26) | Urgent actions, alerts | WCAG AA on white |
| **Peach** | `#F8B896` | rgb(248, 184, 150) | Achievements, celebrations | WCAG AA on dark |

### Semantic Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Success Green** | `#10B981` | rgb(16, 185, 129) | Completed tasks, positive feedback |
| **Warning Amber** | `#F59E0B` | rgb(245, 158, 11) | Warnings, pending actions |
| **Error Red** | `#EF4444` | rgb(239, 68, 68) | Errors, critical issues |
| **Info Cyan** | `#06B6D4` | rgb(6, 182, 212) | Informational messages |

### Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Card backgrounds, text on dark |
| **Off White** | `#F9FAFB` | rgb(249, 250, 251) | Page backgrounds |
| **Light Gray** | `#E5E7EB` | rgb(229, 231, 235) | Borders, dividers |
| **Medium Gray** | `#6B7280` | rgb(107, 114, 128) | Secondary text |
| **Dark Gray** | `#374151` | rgb(55, 65, 81) | Body text |
| **Near Black** | `#1F2937` | rgb(31, 41, 55) | Headings, emphasis |

### Color Usage Guidelines

**80/20 Balance**: Maintain approximately 80% cool blues and 20% warm engagement colors throughout the interface. Blues dominate backgrounds, navigation, and informational elements. Orange and red accent important CTAs, token displays, and achievement celebrations.

**Backgrounds**: Ice Blue (`#EAF4FB`) for the main page background creates a calm, spacious feel. Pure White (`#FFFFFF`) for card backgrounds provides clear content separation. Deep Blue (`#0B3C78`) for headers and navigation establishes hierarchy.

**Text**: Near Black (`#1F2937`) for headings and important content. Dark Gray (`#374151`) for body text. Medium Gray (`#6B7280`) for secondary information and labels. Pure White on blue backgrounds.

**Interactive Elements**: Royal Blue (`#164BA1`) for primary buttons and key actions. Azure (`#2D8BE0`) for links and secondary interactions. Orange (`#F87428`) for high-emphasis CTAs like "Buy Tokens" or "Apply Now". Hover states use lighter shades of the same color family.

**Progress and Gamification**: Use gradient fills for progress bars (Deep Blue to Azure). Orange for token counts and rewards. Peach for achievement badges. Success Green for completed milestones.

---

## Typography

### Font Families

The Individual Dashboard employs the same dual-font system as the Federal interface but with different usage patterns that reflect its more personal, approachable nature.

**Headings**: **Playfair Display** (serif)  
- Used more sparingly than in Federal interface
- Reserved for page titles and major section headings
- Conveys importance without being intimidating
- Weights: 600 (Semi-Bold), 700 (Bold)

**Body Text**: **Inter** (sans-serif)  
- Primary typeface for the Individual interface
- Used for headings, body text, labels, and UI elements
- Clean, modern, highly readable
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### Type Scale

The dashboard employs a modular scale (1.250 - Major Third) for consistent typography, with slightly smaller sizes than the Federal interface to fit more content in personal views.

| Element | Font | Size | Weight | Line Height | Usage |
|---------|------|------|--------|-------------|-------|
| **H1** | Playfair Display | 42px | 700 | 1.2 | Page title |
| **H2** | Inter | 32px | 700 | 1.3 | Section headings |
| **H3** | Inter | 24px | 600 | 1.4 | Subsection headings |
| **H4** | Inter | 18px | 600 | 1.5 | Card titles |
| **Body Large** | Inter | 17px | 400 | 1.6 | Important body text |
| **Body** | Inter | 15px | 400 | 1.6 | Standard body text |
| **Body Small** | Inter | 13px | 400 | 1.5 | Secondary text, labels |
| **Caption** | Inter | 11px | 500 | 1.4 | Captions, metadata |
| **Metric Large** | Inter | 36px | 700 | 1.2 | Key metrics, token count |
| **Metric** | Inter | 28px | 600 | 1.2 | Standard metrics |
| **Button** | Inter | 15px | 600 | 1.0 | Button text |

### Typography Guidelines

**Friendly Tone**: Use sentence case for headings rather than title case (e.g., "Your learning journey" instead of "Your Learning Journey"). This creates a more conversational, approachable tone.

**Personal Language**: Use first and second person ("Your skills", "You've earned", "Complete your profile"). This reinforces the personal nature of the interface.

**Emphasis**: Use bold weight for key terms and actions. Use color (Royal Blue or Orange) for clickable elements. Avoid using all caps except for small labels (e.g., "NEW", "HOT").

**Number Formatting**: Format numbers clearly (e.g., "1,234 tokens", "85% complete"). Use progress indicators alongside percentages. Add units where appropriate.

---

## Layout Structure

### Grid System

The Individual Dashboard employs the same **12-column grid** as the Federal interface but with different spacing to create a more intimate feel.

**Desktop (1920px+)**:
- Container max-width: 1440px (narrower than Federal)
- Column width: 100px
- Gutter: 24px
- Margin: 120px

**Laptop (1440px)**:
- Container max-width: 1200px
- Column width: 84px
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

### Dashboard Layout

The Individual Dashboard follows a **top navigation + main content** layout (no sidebar).

```
┌─────────────────────────────────────────────────────────┐
│  Header (72px height)                                   │
│  - Logo | Navigation | Tokens | Notifications | Avatar  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Main Content Area (centered, max-width 1440px)        │
│  - Welcome Banner                                       │
│  - Quick Actions                                        │
│  - Progress Overview                                    │
│  - Recommended Opportunities                            │
│  - Learning Path                                        │
│  - Recent Activity                                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Header**: Fixed at top, 72px height, Deep Blue background with gradient, contains logo, main navigation, token count, notifications, and user avatar.

**Main Content**: Centered, max-width 1440px, Ice Blue background, contains personalized dashboard content in a 12-column grid.

**No Sidebar**: Unlike Federal interface, Individual dashboard has no persistent sidebar. This creates a cleaner, less cluttered experience focused on the user's journey.

---

## Component Specifications

### Welcome Banner

The welcome banner greets users and displays their current status.

**Visual Specifications**:
- Width: 12 columns (100% of container)
- Height: 200px
- Background: Gradient from Deep Blue to Royal Blue
- Border Radius: 12px
- Shadow: `0 4px 16px rgba(11, 60, 120, 0.15)`
- Padding: 32px

**Content Structure**:
```
┌────────────────────────────────────────────────────────┐
│ Good morning, Ahmed! 👋                                │
│                                                        │
│ You're on a 7-day learning streak! 🔥                  │
│ Complete today's lesson to keep it going.             │
│                                                        │
│ [Continue Learning →]                                  │
└────────────────────────────────────────────────────────┘
```

**Typography**:
- Greeting: Inter 32px Bold, Pure White
- Message: Inter 17px Regular, Sky Blue (90% opacity)
- Button: Inter 15px Semi-Bold, Orange background

**Decorative Elements**:
- Subtle pattern or illustration on the right side
- Emoji for personality (👋 🔥 ⭐ etc.)
- Optional avatar image on the left

---

### Progress Overview Cards

Three cards showing key progress metrics.

**Visual Specifications**:
- Width: 4 columns each (33.33% of container)
- Height: 160px
- Background: Pure White
- Border: 1px solid Light Gray
- Border Radius: 12px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.06)`
- Padding: 24px

**Card 1 - Skills Passport**:
```
┌────────────────────────┐
│ Skills Passport        │
│                        │
│ 85% Complete           │
│ [Progress Bar]         │
│                        │
│ 8 of 96 competencies   │
└────────────────────────┘
```

**Card 2 - Learning Progress**:
```
┌────────────────────────┐
│ Learning Progress      │
│                        │
│ 12 Courses             │
│ [Progress Bar]         │
│                        │
│ 3 in progress          │
└────────────────────────┘
```

**Card 3 - Job Applications**:
```
┌────────────────────────┐
│ Job Applications       │
│                        │
│ 5 Active               │
│ [Status Icons]         │
│                        │
│ 2 interviews scheduled │
└────────────────────────┘
```

**Progress Bar**:
- Height: 8px
- Background: Light Gray
- Fill: Gradient from Deep Blue to Azure
- Border Radius: 4px
- Animated fill on load

---

### Quick Action Buttons

Large, prominent buttons for primary actions.

**Visual Specifications**:
- Width: 3 columns each (25% of container)
- Height: 120px
- Background: Gradient (varies by action)
- Border Radius: 12px
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.1)`
- Padding: 20px

**Action 1 - Take Assessment**:
- Background: Gradient from Royal Blue to Azure
- Icon: Clipboard with checkmark (32x32px)
- Text: "Take Assessment" (Inter 18px Bold, White)
- Subtitle: "Discover your strengths" (Inter 13px Regular, White 80%)

**Action 2 - Find Jobs**:
- Background: Gradient from Orange to Bright Red
- Icon: Briefcase (32x32px)
- Text: "Find Jobs" (Inter 18px Bold, White)
- Subtitle: "1,234 opportunities" (Inter 13px Regular, White 80%)

**Action 3 - Start Learning**:
- Background: Gradient from Azure to Sky Blue
- Icon: Book (32x32px)
- Text: "Start Learning" (Inter 18px Bold, White)
- Subtitle: "456 courses available" (Inter 13px Regular, White 80%)

**Action 4 - Buy Tokens**:
- Background: Gradient from Orange to Peach
- Icon: Coin stack (32x32px)
- Text: "Buy Tokens" (Inter 18px Bold, White)
- Subtitle: "Unlock premium features" (Inter 13px Regular, White 80%)

**Hover State**:
- Scale: 1.02 (subtle lift)
- Shadow: Increases to `0 6px 20px rgba(0, 0, 0, 0.15)`
- Transition: 0.2s ease

---

### Opportunity Cards

Cards displaying job opportunities, courses, or events.

**Visual Specifications**:
- Width: 4 columns each (33.33% of container)
- Height: Variable (minimum 280px)
- Background: Pure White
- Border: 1px solid Light Gray
- Border Radius: 12px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.06)`
- Padding: 0 (image full-width at top)

**Content Structure**:
```
┌────────────────────────┐
│ [Image - 100% width]   │
│ 160px height           │
├────────────────────────┤
│ Padding: 20px          │
│                        │
│ Job Title              │
│ Company Name           │
│                        │
│ 📍 Location            │
│ 💰 Salary Range        │
│ 🕐 Posted 2 days ago   │
│                        │
│ [Apply Now Button]     │
└────────────────────────┘
```

**Image**:
- Width: 100%
- Height: 160px
- Object-fit: cover
- Border-radius: 12px 12px 0 0

**Title**:
- Inter 18px Semi-Bold, Near Black
- Margin-bottom: 8px
- Max 2 lines, ellipsis overflow

**Company**:
- Inter 15px Regular, Medium Gray
- Margin-bottom: 16px

**Metadata**:
- Inter 13px Regular, Medium Gray
- Icons: 16x16px, Medium Gray
- 8px spacing between items

**Button**:
- Full width
- Royal Blue background
- Inter 15px Semi-Bold, White
- Padding: 12px
- Border-radius: 8px
- Hover: Darker Royal Blue

---

### Achievement Badges

Visual representations of earned achievements.

**Visual Specifications**:
- Size: 80x80px
- Background: Gradient circle
- Border: 3px solid white
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.15)`

**Badge Types**:

**Level 1 (Bronze)**:
- Background: Gradient from `#CD7F32` to `#E6A85C`
- Icon: Star (40x40px, white)

**Level 2 (Silver)**:
- Background: Gradient from `#C0C0C0` to `#E8E8E8`
- Icon: Two stars (40x40px, white)

**Level 3 (Gold)**:
- Background: Gradient from `#FFD700` to `#FFA500`
- Icon: Three stars (40x40px, white)

**Level 4 (Platinum)**:
- Background: Gradient from `#E5E4E2` to `#B9F2FF`
- Icon: Crown (40x40px, white)

**Locked State**:
- Background: Light Gray
- Icon: Lock (40x40px, Medium Gray)
- Opacity: 0.5

**Hover State** (unlocked):
- Scale: 1.1
- Shadow increases
- Tooltip appears with badge name and description

---

### Token Display

Prominent display of user's token balance.

**Visual Specifications**:
- Width: Auto (fits content)
- Height: 40px
- Background: Gradient from Orange to Peach
- Border Radius: 999px (pill shape)
- Shadow: `0 2px 8px rgba(248, 116, 40, 0.3)`
- Padding: 8px 16px

**Content**:
```
[Coin Icon] 1,234 Tokens [+]
```

**Elements**:
- Icon: Coin (24x24px, white)
- Count: Inter 15px Bold, White
- Plus button: 24x24px circle, white background, orange icon

**Hover State**:
- Shadow increases
- Plus button scales to 1.1
- Cursor: pointer

**Click Behavior**:
- Opens token purchase modal
- Animates coin icon (spin or bounce)

---

## Dashboard Sections

### 1. Header Section

The header provides persistent navigation and key information.

**Layout**:
```
┌──────────────────────────────────────────────────────────────┐
│  [Logo] Dashboard  Jobs  Learning  [1,234 🪙] [🔔] [Avatar]  │
└──────────────────────────────────────────────────────────────┘
```

**Components**:
- **Logo**: 40x40px, positioned 24px from left
- **Navigation Links**: "Dashboard", "Jobs", "Learning", "Community"
  - Inter 15px Medium, White (80% opacity)
  - Active: White (100% opacity), 3px bottom border (Orange)
  - Spacing: 32px between items
- **Token Display**: As specified above
- **Notifications**: Bell icon (24x24px), badge with count
- **User Avatar**: 36x36px circle, dropdown on click

**Background**:
- Gradient from Deep Blue to Royal Blue (left to right)
- Fixed position at top
- Casts shadow on scroll: `0 2px 12px rgba(11, 60, 120, 0.2)`

---

### 2. Welcome Banner Section

Personalized greeting and motivation.

**Layout**:
```
┌────────────────────────────────────────────────────────┐
│ Good morning, Ahmed! 👋                [Illustration]  │
│                                                        │
│ You're on a 7-day learning streak! 🔥                  │
│ Complete today's lesson to keep it going.             │
│                                                        │
│ [Continue Learning →]                                  │
└────────────────────────────────────────────────────────┘
```

**Personalization**:
- Greeting changes by time of day (morning/afternoon/evening)
- Message adapts to user's current status
- CTA button leads to most relevant next action

**Illustration**:
- Positioned on the right side
- Abstract or character-based
- Complements the message theme
- Uses light blues and white

---

### 3. Progress Overview Section

Three cards showing key metrics.

**Layout**:
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Skills       │ │ Learning     │ │ Applications │
│ Passport     │ │ Progress     │ │              │
│              │ │              │ │              │
│ 85% Complete │ │ 12 Courses   │ │ 5 Active     │
│ [Progress]   │ │ [Progress]   │ │ [Status]     │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Spacing**:
- 24px gap between cards
- 32px margin-top from welcome banner
- 32px margin-bottom to next section

---

### 4. Quick Actions Section

Four prominent action buttons.

**Layout**:
```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ Take     │ │ Find     │ │ Start    │ │ Buy      │
│ Assess   │ │ Jobs     │ │ Learning │ │ Tokens   │
└──────────┘ └──────────┘ └──────────┘ └──────────┘
```

**Spacing**:
- 24px gap between buttons
- 32px margin-top from progress cards
- 48px margin-bottom to next section

---

### 5. Recommended Opportunities Section

Personalized job recommendations.

**Layout**:
```
Recommended for you

┌──────────┐ ┌──────────┐ ┌──────────┐
│ Job 1    │ │ Job 2    │ │ Job 3    │
│ [Image]  │ │ [Image]  │ │ [Image]  │
│          │ │          │ │          │
│ Details  │ │ Details  │ │ Details  │
│          │ │          │ │          │
│ [Apply]  │ │ [Apply]  │ │ [Apply]  │
└──────────┘ └──────────┘ └──────────┘

[View All Jobs →]
```

**Section Header**:
- Inter 28px Bold, Near Black
- Margin-bottom: 24px
- Optional subtitle explaining recommendations

**Cards**:
- 3 across on desktop
- 2 across on tablet
- 1 across on mobile
- 24px gap between cards

**View All Link**:
- Centered below cards
- Inter 15px Semi-Bold, Royal Blue
- Arrow icon on right
- Hover: Underline

---

### 6. Learning Path Section

Current courses and progress.

**Layout**:
```
Your learning path

┌────────────────────────────────────────────────────────┐
│ [Course Icon] Introduction to Data Science             │
│                                                        │
│ Progress: 65% [████████████░░░░░░░░]                   │
│                                                        │
│ Next lesson: Data Visualization Basics                │
│ 45 minutes remaining                                   │
│                                                        │
│ [Continue →]                                           │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ [Course Icon] Advanced Excel for Business              │
│                                                        │
│ Progress: 30% [██████░░░░░░░░░░░░░░]                   │
│                                                        │
│ Next lesson: Pivot Tables and Charts                  │
│ 1 hour 20 minutes remaining                           │
│                                                        │
│ [Continue →]                                           │
└────────────────────────────────────────────────────────┘

[Browse All Courses →]
```

**Course Card**:
- Full width (12 columns)
- Height: 140px
- Pure White background
- Border: 1px solid Light Gray
- Border-radius: 12px
- Padding: 24px
- Margin-bottom: 16px

**Progress Bar**:
- Full width
- Height: 8px
- Background: Light Gray
- Fill: Gradient from Deep Blue to Azure
- Border-radius: 4px

---

### 7. Recent Activity Section

Timeline of recent actions.

**Layout**:
```
Recent activity

┌────────────────────────────────────────────────────────┐
│ • You completed "Introduction to Python" course        │
│   2 hours ago                                          │
│                                                        │
│ • You earned the "Fast Learner" badge 🏆               │
│   Yesterday                                            │
│                                                        │
│ • You applied for "Data Analyst" at TechCorp          │
│   3 days ago                                           │
│                                                        │
│ • You updated your Skills Passport                    │
│   1 week ago                                           │
└────────────────────────────────────────────────────────┘

[View All Activity →]
```

**Activity Item**:
- Bullet point (8px circle, Royal Blue)
- Text: Inter 15px Regular, Dark Gray
- Timestamp: Inter 13px Regular, Medium Gray
- 20px spacing between items

---

## Figma Prompts

### Prompt 1: Individual Dashboard - Full Page Layout

```
Create an Individual Citizens Dashboard interface for the NOOR Platform with the following specifications:

LAYOUT:
- Desktop viewport: 1920x1080px
- Fixed header at top: 72px height, gradient background (Deep Blue #0B3C78 to Royal Blue #164BA1)
- Main content area: Centered, max-width 1440px, Ice Blue background (#EAF4FB)
- 12-column grid with 24px gutters
- No sidebar (cleaner than Federal interface)

HEADER:
- NOOR logo (40x40px) on the left with "NOOR" text in white
- Horizontal navigation: "Dashboard", "Jobs", "Learning", "Community"
  - Inter 15px Medium, White 80% opacity
  - Active item: White 100%, 3px orange bottom border
  - 32px spacing between items
- Token display: Pill-shaped (999px border-radius), gradient orange to peach
  - [Coin icon] 1,234 Tokens [+]
  - Inter 15px Bold, White
- Notification bell icon (24x24px) with red badge showing "3"
- User avatar (36x36px circle) with name "Ahmed" and dropdown icon

WELCOME BANNER:
- Full width (12 columns), 200px height
- Gradient background: Deep Blue to Royal Blue (left to right)
- Border-radius: 12px
- Shadow: 0 4px 16px rgba(11, 60, 120, 0.15)
- Padding: 32px
- Content:
  - "Good morning, Ahmed! 👋" (Inter 32px Bold, White)
  - "You're on a 7-day learning streak! 🔥" (Inter 17px Regular, Sky Blue 90%)
  - "Complete today's lesson to keep it going." (Inter 17px Regular, Sky Blue 90%)
  - [Continue Learning →] button (Orange background, white text, pill-shaped)
- Illustration on right side (abstract learning/growth theme, light blues and white)

PROGRESS OVERVIEW (3 cards):
- Each card: 4 columns wide (33.33%), 160px height
- Pure white background, 1px light gray border, 12px border-radius
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.06)
- Padding: 24px
- 24px gap between cards

Card 1 - Skills Passport:
- Title: "Skills Passport" (Inter 15px Semi-Bold, Medium Gray)
- Metric: "85% Complete" (Inter 28px Bold, Near Black)
- Progress bar: 8px height, gradient blue fill
- Subtitle: "8 of 96 competencies" (Inter 13px Regular, Medium Gray)

Card 2 - Learning Progress:
- Title: "Learning Progress" (Inter 15px Semi-Bold, Medium Gray)
- Metric: "12 Courses" (Inter 28px Bold, Near Black)
- Progress bar: 8px height, gradient blue fill
- Subtitle: "3 in progress" (Inter 13px Regular, Medium Gray)

Card 3 - Job Applications:
- Title: "Job Applications" (Inter 15px Semi-Bold, Medium Gray)
- Metric: "5 Active" (Inter 28px Bold, Near Black)
- Status icons: 5 circles with different colors (green, yellow, blue)
- Subtitle: "2 interviews scheduled" (Inter 13px Regular, Medium Gray)

QUICK ACTIONS (4 buttons):
- Each button: 3 columns wide (25%), 120px height
- Gradient backgrounds (different for each)
- Border-radius: 12px
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.1)
- Padding: 20px
- 24px gap between buttons

Button 1 - Take Assessment:
- Gradient: Royal Blue to Azure
- Icon: Clipboard (32x32px, white)
- Text: "Take Assessment" (Inter 18px Bold, White)
- Subtitle: "Discover your strengths" (Inter 13px Regular, White 80%)

Button 2 - Find Jobs:
- Gradient: Orange to Bright Red
- Icon: Briefcase (32x32px, white)
- Text: "Find Jobs" (Inter 18px Bold, White)
- Subtitle: "1,234 opportunities" (Inter 13px Regular, White 80%)

Button 3 - Start Learning:
- Gradient: Azure to Sky Blue
- Icon: Book (32x32px, white)
- Text: "Start Learning" (Inter 18px Bold, White)
- Subtitle: "456 courses available" (Inter 13px Regular, White 80%)

Button 4 - Buy Tokens:
- Gradient: Orange to Peach
- Icon: Coins (32x32px, white)
- Text: "Buy Tokens" (Inter 18px Bold, White)
- Subtitle: "Unlock premium features" (Inter 13px Regular, White 80%)

RECOMMENDED OPPORTUNITIES:
- Section title: "Recommended for you" (Inter 28px Bold, Near Black)
- 3 job cards in a row (4 columns each)
- Each card: White background, 1px light gray border, 12px border-radius
- Card structure:
  - Image at top (100% width, 160px height, cover fit)
  - Padding: 20px
  - Job title (Inter 18px Semi-Bold, Near Black)
  - Company name (Inter 15px Regular, Medium Gray)
  - Location, salary, time posted (Inter 13px Regular, Medium Gray with icons)
  - [Apply Now] button (full width, Royal Blue, white text)

COLORS:
- Primary Blues: Deep Blue (#0B3C78), Royal Blue (#164BA1), Azure (#2D8BE0), Sky Blue (#7EBCEE), Ice Blue (#EAF4FB)
- Engagement: Orange (#F87428), Bright Red (#CF2B1A), Peach (#F8B896)
- Background: Ice Blue (#EAF4FB), Pure White (#FFFFFF)
- Text: Near Black (#1F2937), Dark Gray (#374151), Medium Gray (#6B7280)

TYPOGRAPHY:
- Headings: Playfair Display (page titles only) or Inter Bold
- Body: Inter (sans-serif), regular to bold
- Maintain clear hierarchy with size and weight

STYLE:
- Optimistic, motivational, personal
- Rounded corners (12px) for friendly feel
- Gradients for visual interest and depth
- Generous spacing for clarity
- Hover states: slight scale (1.02) and shadow increase
- All elements aligned to 8px grid

DETAILS:
- Use realistic content (not placeholder text)
- Include proper icons (not text placeholders)
- Show actual progress bars with gradients
- Ensure all text is readable and properly contrasted
- Add subtle animations (progress bars fill, cards lift on hover)
```

---

### Prompt 2: Individual Dashboard - Welcome Banner Component

```
Design a personalized welcome banner for an Individual Citizens Dashboard with these specifications:

DIMENSIONS:
- Width: 1200px (full container width)
- Height: 200px
- Background: Gradient from Deep Blue (#0B3C78) to Royal Blue (#164BA1), left to right
- Border-radius: 12px
- Shadow: 0 4px 16px rgba(11, 60, 120, 0.15)
- Padding: 32px

CONTENT LAYOUT:
- Left side (70%): Text content
- Right side (30%): Illustration

LEFT SIDE TEXT:
- Greeting: "Good morning, Ahmed! 👋"
  - Inter 32px Bold, Pure White (#FFFFFF)
  - Include waving hand emoji
  - Margin-bottom: 16px

- Streak message: "You're on a 7-day learning streak! 🔥"
  - Inter 17px Regular, Sky Blue (#7EBCEE) at 90% opacity
  - Include fire emoji
  - Margin-bottom: 8px

- Encouragement: "Complete today's lesson to keep it going."
  - Inter 17px Regular, Sky Blue (#7EBCEE) at 90% opacity
  - Margin-bottom: 24px

- CTA Button: "Continue Learning →"
  - Background: Gradient from Orange (#F87428) to Peach (#F8B896)
  - Text: Inter 15px Semi-Bold, Pure White
  - Padding: 12px 24px
  - Border-radius: 999px (pill shape)
  - Shadow: 0 2px 8px rgba(248, 116, 40, 0.3)
  - Include right arrow icon
  - Hover: Scale 1.05, shadow increases

RIGHT SIDE ILLUSTRATION:
- Abstract illustration representing learning/growth
- Style: Modern, minimalist, geometric
- Colors: Light blues (#7EBCEE, #EAF4FB) and white
- Elements: Books, upward arrows, stars, or achievement symbols
- Should complement (not compete with) the text
- Opacity: 80-90% to stay subtle

DECORATIVE ELEMENTS:
- Subtle dot pattern in background (optional)
- Soft glow around illustration (optional)
- Sparkle effects near streak emoji (optional)

PERSONALIZATION NOTES:
- Greeting changes by time:
  - Morning (5am-12pm): "Good morning"
  - Afternoon (12pm-6pm): "Good afternoon"
  - Evening (6pm-5am): "Good evening"
- Message adapts to user status:
  - Active streak: Show streak count
  - No streak: Encourage starting one
  - Completed today: Celebrate achievement
- CTA button adapts to next action:
  - Lesson in progress: "Continue Learning"
  - Assessment pending: "Complete Assessment"
  - New user: "Get Started"

STATES:
- Default: As described
- Hover (on button): Scale 1.05, shadow increases
- Loading: Skeleton screen with shimmer effect

STYLE:
- Warm, welcoming, motivational
- Personal tone (use user's name)
- Emoji for personality and emotion
- Clear visual hierarchy (greeting → message → CTA)
- Gradient adds depth and visual interest
```

---

### Prompt 3: Individual Dashboard - Opportunity Card Component

```
Design a job opportunity card for an Individual Citizens Dashboard with these specifications:

CARD DIMENSIONS:
- Width: 360px
- Height: 380px
- Background: Pure White (#FFFFFF)
- Border: 1px solid Light Gray (#E5E7EB)
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.06)
- Padding: 0 (image full-width at top)

IMAGE SECTION:
- Width: 100% (360px)
- Height: 160px
- Object-fit: cover
- Border-radius: 12px 12px 0 0
- Show company office or relevant job image
- Overlay gradient (optional): Linear gradient from transparent to rgba(0,0,0,0.2) bottom

CONTENT SECTION:
- Padding: 20px
- Background: Pure White

JOB TITLE:
- Text: "Senior Data Analyst"
- Font: Inter 18px Semi-Bold, Near Black (#1F2937)
- Margin-bottom: 8px
- Max 2 lines, ellipsis overflow

COMPANY NAME:
- Text: "TechCorp UAE"
- Font: Inter 15px Regular, Medium Gray (#6B7280)
- Margin-bottom: 16px

METADATA (3 items):
- Layout: Vertical list, 8px spacing between items
- Each item: Icon (16x16px) + Text (Inter 13px Regular, Medium Gray)

Item 1 - Location:
- Icon: Map pin (Medium Gray)
- Text: "Dubai, UAE"

Item 2 - Salary:
- Icon: Money bag (Medium Gray)
- Text: "AED 15,000 - 20,000/month"

Item 3 - Posted:
- Icon: Clock (Medium Gray)
- Text: "Posted 2 days ago"

TAGS (optional):
- Margin-top: 16px
- Layout: Horizontal, wrap, 8px gap
- Each tag: Pill-shaped, Ice Blue background, Royal Blue text
- Examples: "Full-time", "Remote", "Urgent"
- Font: Inter 11px Medium
- Padding: 4px 12px
- Border-radius: 999px

APPLY BUTTON:
- Margin-top: 16px
- Width: 100% (full width of card)
- Height: 44px
- Background: Royal Blue (#164BA1)
- Text: "Apply Now" (Inter 15px Semi-Bold, Pure White)
- Border-radius: 8px
- Shadow: 0 2px 4px rgba(22, 75, 161, 0.2)
- Hover: Background darkens to #0F3A7A, shadow increases

BOOKMARK ICON:
- Position: Absolute, top-right corner of image
- Size: 32x32px
- Background: White with 80% opacity
- Icon: Bookmark outline (16x16px, Royal Blue)
- Border-radius: 8px
- Shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
- Hover: Background opacity 100%, icon fills

MATCH INDICATOR (optional):
- Position: Absolute, top-left corner of image
- Background: Success Green (#10B981)
- Text: "95% Match" (Inter 11px Bold, White)
- Padding: 6px 12px
- Border-radius: 0 0 8px 0

STATES:
- Default: As described
- Hover: Shadow increases to 0 4px 16px rgba(0, 0, 0, 0.12), slight lift (translateY -2px)
- Active/Clicked: Border changes to Royal Blue, shadow reduces
- Applied: Apply button changes to "Applied ✓" with Success Green background

VARIATIONS:
Create 3 cards with different content:

Card 1:
- Job: "Senior Data Analyst"
- Company: "TechCorp UAE"
- Location: "Dubai, UAE"
- Salary: "AED 15,000 - 20,000/month"
- Posted: "2 days ago"
- Match: "95% Match"

Card 2:
- Job: "Marketing Manager"
- Company: "Retail Solutions"
- Location: "Abu Dhabi, UAE"
- Salary: "AED 18,000 - 25,000/month"
- Posted: "5 days ago"
- Match: "88% Match"

Card 3:
- Job: "Software Engineer"
- Company: "Innovation Labs"
- Location: "Sharjah, UAE"
- Salary: "AED 12,000 - 18,000/month"
- Posted: "1 week ago"
- Match: "82% Match"

STYLE:
- Clean, professional, inviting
- Clear visual hierarchy (image → title → company → details → CTA)
- Proper spacing for easy scanning
- Hover effects indicate interactivity
- Match indicator adds personalization
```

---

### Prompt 4: Individual Dashboard - Learning Progress Component

```
Design a learning progress component showing active courses for an Individual Citizens Dashboard:

SECTION HEADER:
- Title: "Your learning path" (Inter 28px Bold, Near Black #1F2937)
- Subtitle: "Continue where you left off" (Inter 15px Regular, Medium Gray #6B7280)
- Margin-bottom: 24px

COURSE CARD (create 2 cards):
- Width: 100% (full container width, 1200px)
- Height: 140px
- Background: Pure White (#FFFFFF)
- Border: 1px solid Light Gray (#E5E7EB)
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.06)
- Padding: 24px
- Margin-bottom: 16px

CARD LAYOUT:
- Left side (80px): Course icon/thumbnail
- Middle (flex-grow): Course details
- Right side (140px): Continue button

COURSE ICON:
- Size: 80x80px
- Border-radius: 8px
- Background: Gradient (varies by course)
- Icon: Subject-related icon (40x40px, white)
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.1)

COURSE DETAILS:
- Course title: Inter 18px Semi-Bold, Near Black
- Instructor: Inter 13px Regular, Medium Gray
- Progress text: "Progress: 65%" (Inter 15px Medium, Royal Blue)
- Progress bar: Full width, 8px height, gradient fill
- Next lesson: "Next: Data Visualization Basics" (Inter 13px Regular, Medium Gray)
- Time remaining: "45 minutes remaining" (Inter 13px Regular, Medium Gray)

PROGRESS BAR:
- Width: 100% of middle section
- Height: 8px
- Background: Light Gray (#E5E7EB)
- Fill: Gradient from Deep Blue (#0B3C78) to Azure (#2D8BE0)
- Border-radius: 4px
- Animated fill (smooth transition)

CONTINUE BUTTON:
- Width: 120px
- Height: 44px
- Background: Royal Blue (#164BA1)
- Text: "Continue →" (Inter 15px Semi-Bold, White)
- Border-radius: 8px
- Shadow: 0 2px 4px rgba(22, 75, 161, 0.2)
- Hover: Background darkens, shadow increases

COURSE 1 - Introduction to Data Science:
- Icon gradient: Deep Blue to Azure
- Icon: Chart/graph icon
- Title: "Introduction to Data Science"
- Instructor: "Dr. Sarah Ahmed"
- Progress: 65%
- Next lesson: "Data Visualization Basics"
- Time: "45 minutes remaining"

COURSE 2 - Advanced Excel for Business:
- Icon gradient: Success Green to Cyan
- Icon: Spreadsheet icon
- Title: "Advanced Excel for Business"
- Instructor: "Prof. Mohammed Ali"
- Progress: 30%
- Next lesson: "Pivot Tables and Charts"
- Time: "1 hour 20 minutes remaining"

VIEW ALL LINK:
- Position: Below cards, centered
- Text: "Browse All Courses →" (Inter 15px Semi-Bold, Royal Blue)
- Hover: Underline, color darkens
- Arrow icon on right

STATES:
- Default: As described
- Hover (card): Shadow increases to 0 4px 16px rgba(0, 0, 0, 0.12)
- Hover (button): Background darkens to #0F3A7A
- Loading: Skeleton screen with shimmer effect

RESPONSIVE:
- Desktop: Full layout as described
- Tablet: Button moves below details
- Mobile: Icon, details, and button stack vertically

STYLE:
- Clean, motivational, progress-focused
- Clear visual hierarchy
- Progress bars prominent (show achievement)
- Gradient fills add visual interest
- Adequate spacing for easy scanning
```

---

### Prompt 5: Individual Dashboard - Achievement Badges Component

```
Design an achievement badge showcase for an Individual Citizens Dashboard with these specifications:

SECTION HEADER:
- Title: "Your achievements" (Inter 28px Bold, Near Black #1F2937)
- Subtitle: "Unlock badges as you learn and grow" (Inter 15px Regular, Medium Gray)
- View all link: "View All →" (Inter 15px Semi-Bold, Royal Blue, right-aligned)
- Margin-bottom: 24px

BADGE CONTAINER:
- Width: 100% (1200px)
- Height: Auto
- Background: Pure White (#FFFFFF)
- Border: 1px solid Light Gray (#E5E7EB)
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.06)
- Padding: 32px

BADGE LAYOUT:
- Grid: 6 badges across on desktop
- Gap: 24px between badges
- Center-aligned

BADGE (unlocked):
- Size: 100x100px
- Background: Gradient circle (varies by level)
- Border: 4px solid white
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
- Icon: 48x48px, white
- Hover: Scale 1.1, shadow increases

BADGE LEVELS:

Level 1 - Bronze (3 badges):
- Gradient: #CD7F32 to #E6A85C
- Icon: Single star
- Names: "First Steps", "Quick Learner", "Dedicated"

Level 2 - Silver (2 badges):
- Gradient: #C0C0C0 to #E8E8E8
- Icon: Two stars
- Names: "Rising Star", "Team Player"

Level 3 - Gold (1 badge):
- Gradient: #FFD700 to #FFA500
- Icon: Three stars
- Name: "Excellence"

Level 4 - Platinum (locked):
- Background: Light Gray (#E5E7EB)
- Icon: Crown (48x48px, Medium Gray)
- Opacity: 0.5
- Name: "Master"

BADGE LABEL:
- Position: Below badge, centered
- Text: Badge name (Inter 13px Medium, Near Black)
- Margin-top: 8px

BADGE TOOLTIP (on hover):
- Width: 240px
- Background: Near Black (#1F2937) with 95% opacity
- Border-radius: 8px
- Shadow: 0 4px 16px rgba(0, 0, 0, 0.2)
- Padding: 16px
- Position: Above badge, centered

Tooltip content:
- Badge name: Inter 15px Semi-Bold, White
- Description: Inter 13px Regular, White 80%
- Earned date: Inter 11px Regular, White 60%
- Example: "First Steps\nComplete your first lesson\nEarned on March 15, 2024"

LOCKED BADGE TOOLTIP:
- Same styling as unlocked
- Content: Badge name + How to unlock
- Example: "Master\nComplete 100 courses and maintain a 30-day streak"

PROGRESS INDICATOR (optional):
- Position: Bottom of container
- Text: "6 of 10 badges unlocked" (Inter 13px Medium, Medium Gray)
- Progress bar: 200px wide, 6px height, gradient fill
- Centered

ANIMATION:
- Badge unlock: Scale from 0 to 1, rotate 360°, sparkle effect
- Hover: Smooth scale to 1.1, shadow increase
- Tooltip: Fade in 0.2s

STATES:
- Unlocked: Full color, full opacity, interactive
- Locked: Grayscale, 50% opacity, lock icon
- Recently unlocked: Glow effect, "NEW" label

BADGE DETAILS:

Badge 1 - First Steps (Bronze):
- Icon: Single star
- Description: "Complete your first lesson"
- Earned: "March 15, 2024"

Badge 2 - Quick Learner (Bronze):
- Icon: Lightning bolt
- Description: "Complete 5 lessons in one day"
- Earned: "March 18, 2024"

Badge 3 - Dedicated (Bronze):
- Icon: Calendar with check
- Description: "Maintain a 7-day learning streak"
- Earned: "March 22, 2024"

Badge 4 - Rising Star (Silver):
- Icon: Two stars
- Description: "Complete 10 courses"
- Earned: "April 5, 2024"

Badge 5 - Team Player (Silver):
- Icon: People
- Description: "Help 5 community members"
- Earned: "April 12, 2024"

Badge 6 - Excellence (Gold):
- Icon: Three stars
- Description: "Achieve 95%+ in 5 assessments"
- Earned: "April 20, 2024"

Badge 7 - Master (Platinum - Locked):
- Icon: Crown
- Description: "Complete 100 courses and maintain a 30-day streak"
- Status: Locked

STYLE:
- Celebratory, motivational, game-like
- Shiny gradients for visual appeal
- Clear locked vs unlocked states
- Tooltips provide context
- Hover effects encourage exploration
- Progress indicator shows journey
```

---

## Implementation Guidelines

### Responsive Behavior

The Individual Dashboard must adapt gracefully to different screen sizes while maintaining its motivational, personal feel.

**Desktop (1920px+)**: Full layout as described, with all elements visible and properly spaced. Quick action buttons display 4 across. Opportunity cards display 3 across. Learning cards full width.

**Laptop (1440px)**: Container width reduces to 1200px. Quick action buttons remain 4 across but with reduced padding. Opportunity cards remain 3 across. All proportions maintained.

**Tablet (1024px)**: Quick action buttons display 2 across in 2 rows. Opportunity cards display 2 across. Learning cards remain full width. Progress overview cards remain 3 across but may stack at smaller tablet sizes.

**Mobile (768px)**: All elements stack vertically (1 per row). Welcome banner height reduces to auto. Quick action buttons full width, stacked. Opportunity cards full width, stacked. Navigation becomes hamburger menu.

### Accessibility

The Individual Dashboard must be accessible to all users, including those with disabilities.

**Color Contrast**: All text must meet WCAG AA standards. Test all color combinations, especially white text on blue gradients. Ensure gradient backgrounds don't compromise text readability.

**Keyboard Navigation**: All interactive elements must be keyboard accessible. Provide visible focus indicators (2px orange outline). Ensure logical tab order follows visual hierarchy. Support keyboard shortcuts for common actions (e.g., "C" for continue learning).

**Screen Readers**: Use semantic HTML. Provide alt text for all icons and images. Use ARIA labels for complex components (progress bars, badges). Announce dynamic content changes (token balance updates, new notifications).

**Motion**: Respect `prefers-reduced-motion` media query. Disable or reduce animations for users who prefer reduced motion. Ensure core functionality works without animations.

### Performance

The Individual Dashboard must load quickly and respond smoothly to user interactions.

**Initial Load**: Target < 2 seconds for first contentful paint. Prioritize above-the-fold content (welcome banner, progress overview). Lazy load opportunity cards and learning section.

**Data Updates**: Implement efficient API calls for personalized content. Cache user data locally. Update only changed elements, not entire dashboard. Show loading indicators for data refreshes.

**Image Optimization**: Compress opportunity card images. Use responsive images (srcset). Lazy load images below the fold. Provide placeholder images while loading.

### Personalization

The Individual Dashboard is deeply personalized to each user.

**Dynamic Content**: Greeting changes by time of day and user name. Welcome message adapts to user's current status (streak, pending tasks, achievements). Recommended opportunities based on skills and preferences.

**Progress Tracking**: Show real progress from user's actual data. Update progress bars in real-time as user completes actions. Celebrate milestones with animations and notifications.

**Adaptive CTAs**: Primary CTA button adapts to user's most relevant next action. If user has lesson in progress, show "Continue Learning". If assessment pending, show "Complete Assessment". For new users, show "Get Started".

---

## Conclusion

The Individual Citizens Dashboard represents the personal empowerment interface of the NOOR Platform. Through its optimistic blue spectrum, warm engagement accents, and motivational design patterns, it inspires UAE citizens and residents to pursue their full potential.

Every design decision—from the friendly rounded corners to the celebratory achievement badges—serves to make personal development feel achievable, rewarding, and enjoyable. The dashboard doesn't just display information; it tells each user's unique story of growth and guides them toward their aspirations.

By following these specifications and using the provided Figma prompts, designers can create an Individual Dashboard that motivates action, celebrates progress, and empowers users to realize their potential in alignment with UAE Vision 2071.

---

**Document Version**: 1.0  
**Last Updated**: November 4, 2024  
**Author**: Manus AI  
**Project**: NOOR Platform

🌟 **Illuminating Human Potential for UAE Vision 2071** 🇦🇪

