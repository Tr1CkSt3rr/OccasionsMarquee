# Design Guidelines: Occasions Marquee Website

## Design Approach
**Selected Approach:** Reference-Based (Hospitality/Venue Focused)
- **Primary Inspiration:** Luxury hospitality platforms (Airbnb, venue websites) with emphasis on visual storytelling
- **Secondary Reference:** auragrande.com as mentioned in requirements
- **Justification:** Wedding venues require emotional connection through visual appeal; this is an experience-focused, visual-rich industry where design differentiation matters

## Core Design Elements

### Color Palette
**Light Mode:**
- Primary: 220 15% 25% (Deep charcoal navy for elegance and trust)
- Secondary: 45 25% 95% (Warm off-white for backgrounds)
- Accent: 350 80% 60% (Sophisticated rose gold for CTAs and highlights)
- Success: 140 60% 45% (Muted emerald for confirmations)

**Dark Mode:**
- Primary: 220 20% 85% (Light variant of primary)
- Secondary: 220 15% 15% (Deep background)
- Accent: 350 70% 70% (Lighter rose gold)
- Success: 140 50% 55% (Lighter emerald)

**Gradient Applications:**
- Hero overlays: Subtle gradient from 220 15% 25% to 220 15% 15% (charcoal to deeper charcoal)
- CTA buttons: Gentle gradient using accent colors
- Background treatments: Soft gradients in secondary color range for section breaks

### Typography
- **Primary Font:** "Playfair Display" (Google Fonts) - Elegant serif for headings and hero text
- **Secondary Font:** "Inter" (Google Fonts) - Clean sans-serif for body text and UI elements
- **Accent Font:** "Dancing Script" (Google Fonts) - Script font for romantic touches (use sparingly)

**Hierarchy:**
- Hero Headlines: Playfair Display, 3xl-6xl, font-semibold
- Section Headers: Playfair Display, xl-3xl, font-medium
- Body Text: Inter, base-lg, font-normal
- Captions: Inter, sm, font-light

### Layout System
**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 24 (p-4, m-8, h-12, etc.)
- **Container Max Width:** 7xl (1280px) for main content
- **Section Padding:** py-16 md:py-24 for vertical spacing
- **Grid System:** 12-column grid with responsive breakpoints

### Component Library

**Navigation:**
- Sticky header with transparent overlay on hero
- Elegant typography with smooth scroll animations
- Mobile hamburger with slide-out panel

**Hero Section:**
- Full-viewport slideshow with elegant image transitions
- Centered content with dramatic typography overlay
- Two primary CTAs: "Book a Tour" and "View Gallery"
- Subtle scroll indicator

**Gallery Components:**
- Masonry-style grid layout with hover effects
- Category filters (Weddings, Receptions, Engagements)
- Lightbox modal with smooth transitions
- Lazy loading implementation

**Forms:**
- Elegant card-based inquiry form
- Floating labels with subtle animations
- Date picker integration for event planning
- Dropdown for guest count ranges

**Testimonials:**
- Card-based layout with client photos
- Elegant quote typography
- Star ratings with custom styling
- Carousel for mobile, grid for desktop

**FAQ Section:**
- Accordion with smooth expand/collapse
- Custom icons for common question categories
- Elegant typography hierarchy

## Images
The website will feature a prominent hero image slideshow showcasing the venue's most elegant spaces. Key image requirements:

**Hero Images (3-5 rotating):**
- Full-viewport wedding ceremony setups
- Reception hall configurations
- Dramatic evening lighting of the venue
- Outdoor/indoor space combinations

**Gallery Images:**
- High-quality event photography categorized by:
  - Wedding ceremonies
  - Reception celebrations  
  - Engagement parties
  - Corporate events
- Professional venue photography showing:
  - Different lighting configurations
  - Various seating arrangements
  - Décor possibilities

**Supporting Images:**
- Team/staff professional headshots
- Venue exterior and entrance
- Detail shots of amenities and features

## Special Considerations

**Performance Optimization:**
- Lazy loading for all gallery images
- WebP format with fallbacks
- Optimized hero image carousel
- Minimal animation library usage

**Mobile Experience:**
- Touch-friendly gallery navigation
- Simplified hero on mobile devices
- Collapsible navigation with elegant transitions
- Mobile-optimized contact form

**Conversion Focus:**
- Strategic CTA placement throughout
- Contact information always visible
- Social proof integration
- Clear value proposition messaging

This design approach creates an elegant, trustworthy presence that emphasizes the venue's premium positioning while maintaining excellent usability across all devices.