# Silverline Bank - Design Guidelines

## Design Approach: Reference-Based (Wells Fargo)

**Primary Reference:** Wells Fargo's online banking interface
**Objective:** Create a professional banking website that closely mirrors Wells Fargo's established design patterns while branded as "Silverline Bank"

---

## Core Design Elements

### A. Color Palette

**Primary Brand Color:**
- Silverline Red: 0 85% 45% (signature red matching Wells Fargo's brand)
- Deep Red: 0 85% 35% (darker variant for hover states)

**Supporting Colors:**
- White/Light Gray: 0 0% 98% (backgrounds)
- Charcoal: 220 20% 20% (primary text)
- Medium Gray: 220 15% 60% (secondary text)
- Light Gray: 220 10% 95% (section backgrounds)
- Border Gray: 220 10% 85%

**Accent Colors for Promotional Cards:**
- Teal: 180 65% 45%
- Purple: 270 60% 50%
- Orange: 25 85% 55%
- Green: 140 50% 45%

### B. Typography

**Font Families:**
- Primary: 'Inter', 'Helvetica Neue', sans-serif
- Headers: 'Inter', weights 600-700
- Body: 'Inter', weight 400-500

**Scale:**
- Hero Headline: text-4xl md:text-5xl, font-semibold
- Section Headers: text-3xl md:text-4xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg
- Fine Print/Disclaimers: text-xs md:text-sm

### C. Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-12 md:py-20
- Card spacing: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8

**Container Widths:**
- Full-width sections: max-w-7xl mx-auto
- Content sections: px-4 md:px-8
- Promotional cards: max-w-sm to max-w-md

### D. Component Library

**Header:**
- Fixed red banner (h-16) with "Silverline Bank" logo left-aligned
- "Sign On" button and hamburger menu icon right-aligned
- White text on red background

**Hero Section:**
- Large promotional offer card with white/light background
- Bold headline emphasizing dollar amount ($325 bonus)
- Subtle decorative graphics or patterns
- Primary red CTA button
- Small disclaimer text below

**Product Grid:**
- 2-column mobile, 4-column desktop grid
- Icon-based cards with labels (Credit Cards, Home Loans, Personal Loans, Auto Loans, Investing, Premier, Education & Tools)
- Clean icons with text below
- Light hover states

**Promotional Cards:**
- Multi-column responsive grid (1-col mobile, 2-3 col desktop)
- Colorful background accents (teal, purple, orange)
- Bold percentage/number displays (0% APR, interest rates)
- White text on colored backgrounds
- Minimal shadow: shadow-md

**Financial Guidance Cards:**
- Image-heavy lifestyle photography
- Overlay text with semi-transparent dark backgrounds
- "Ready. Set. Save." messaging style
- Large, impactful imagery

**Help Section:**
- Three-column grid: "Find a location", "Make an appointment", "Quick help"
- Icon + text combination
- Simple, clean design

**Footer:**
- Multi-column layout with link groups
- Legal disclaimers in small text
- Social media icons
- Privacy, Terms, Careers links
- Light gray background

### E. Imagery

**Hero Section:** Decorative pattern or subtle financial-themed graphics (not photographic)

**Financial Guidance:** High-quality lifestyle photography showing:
- Families/people in aspirational settings
- Modern interiors, home ownership scenes
- Professional business contexts
- Diverse, authentic representation

**Promotional Cards:** Abstract financial graphics, credit card mockups, or solid colored backgrounds with white text

**Community Section:** Authentic photography of people, community events, or local scenes

---

## Key Design Patterns

1. **Wells Fargo Red Dominance:** Use signature red sparingly but strategically - header, primary CTAs, and accent elements
2. **Card-Based Layout:** Everything organized in clean, rectangular cards with consistent spacing
3. **Professional Trust:** Clean lines, ample whitespace, professional photography
4. **Promotional Focus:** Multiple promotional offers prominently displayed with clear value propositions
5. **Mobile-First Responsive:** Stack cards vertically on mobile, expand to grids on desktop
6. **Minimal Animation:** Subtle hover states only, no distracting motion
7. **Legal Compliance:** Prominent disclaimers in small text below all promotional content