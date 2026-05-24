# Alvion | Website Documentation

Welcome to the official developer documentation for the **Alvion Website**. This document provides an in-depth breakdown of the project architecture, tech stack, pages, component definitions, styling standards, and development guidelines.

---

## 1. Executive Summary & Business Model

**Alvion** is a premium, student-led execution and strategic consulting platform. It matches high-potential analysts from India's elite institutions (such as SRCC, IIT Bombay, and Delhi University) with high-growth startups and established corporations. To guarantee institutional-grade quality, all deliverables are structured, reviewed, and approved by experienced senior industry mentors (ex-McKinsey, Google, Accenture, upGrad, BCG, and Antler).

### Value Proposition
- **High-Velocity Delivery:** 3x to 5x faster than traditional consulting firms.
- **Cost Efficiency:** Approximately 1/10th the cost of tier-1 consulting firms.
- **Structure-Driven Execution:** Experience is replaced with rigorous structure, standardized SOPs, playbooks, professional checklists, and robust mentor oversight.

---

## 2. Technology Stack & Key Dependencies

The codebase is built on modern web technologies optimized for speed, visual immersion, and performance.

### Core Frameworks
- **Next.js 16.1.1 (App Router):** Leverages server and client components, optimized image loading (`next/image`), and layout-based routing.
- **React 19.2.3 & React DOM 19.2.3:** Utilizes the latest rendering engine features.
- **TypeScript 5.x:** Enforces type safety across components and page configurations.

### Styling & UI Primitives
- **Tailwind CSS v4.x:** Provides utility-first styling with native CSS variable compiling.
- **Radix UI Primitives:** Accessible, headless UI widgets including:
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-slot`
- **Lucide React:** Icon library for consistent visual symbols.
- **Embla Carousel:** Used for modern touch-supported carousel foundations (where requested).

### Animations
- **GSAP (GreenSock Animation Platform) 3.14.2:** Handles advanced scroll-driven animations, numeric counters, and timeline-based orchestration.
- **@gsap/react 2.1.2:** Simplifies GSAP context scoping, lifecycle hook integration, and automatic cleanup (`useGSAP`).
- **ScrollTrigger:** GSAP plugin for binding custom transitions to scroll coordinates.

---

## 3. Directory Structure

Below is the structured layout of the project:

```bash
alvion-website/
├── app/                      # Next.js App Router root
│   ├── careers/              # Join Alvion recruitment page
│   │   └── page.tsx
│   ├── clientele/            # Portfolio & client case studies
│   │   └── page.tsx
│   ├── team/                 # Complete directory of team & mentors
│   │   └── page.tsx
│   ├── why-alvion/           # In-depth FAQ and skeptic address page
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css           # Custom CSS utilities & base tailwind overrides
│   ├── layout.tsx            # Global layout wrapper
│   └── page.tsx              # Home Landing Page
├── components/               # Custom modular sections and layouts
│   ├── ui/                   # Shared UI primitives (buttons, cards, etc.)
│   ├── Clientele.tsx         # Endless marquee client slider
│   ├── Contact.tsx           # Contact form with email generator
│   ├── CTA.tsx               # Standalone call-to-action banner
│   ├── FAQ.tsx               # Simple accordion questions list
│   ├── Footer.tsx            # Site footer with brand social links
│   ├── Hero.tsx              # Dynamic hero landing screen with GSAP
│   ├── Insights.tsx          # 3D interactive flip-card engagement models
│   ├── MentorBoard.tsx       # Compact team showcase with details
│   ├── Navbar.tsx            # Responsive floating blurred header
│   ├── Problems.tsx          # Interactive 2x2 consulting market matrix
│   ├── Services.tsx          # Animated services catalog grid
│   └── Stats.tsx             # ScrollTrigger-driven numerical counter
├── lib/                      # Base shared helper utilities
│   └── utils.ts              # classnames (cn) merging helper
├── public/                   # Static media assets (logos, pictures, vector icons)
├── package.json              # Dependencies and scripts definitions
├── tsconfig.json             # TypeScript configuration
└── components.json           # Shadcn UI environment setup
```

---

## 4. Information Architecture & Routing

The application utilizes Next.js file-system routing. Every route is managed as a subdirectory under the `app/` directory containing a `page.tsx`.

### A. Home Landing Page (`/`)
- **File:** `app/page.tsx`
- **Summary:** The core showcase page of Alvion, serving as a unified funnel.
- **Composition Sequence:**
  1. `Navbar`
  2. `Hero` (Cityscape + unique tagline)
  3. `Clientele` (Horizontal continuous sliding marquee)
  4. `Stats` (Key metric counters)
  5. `Problems` (2x2 Matrix showing consulting gap)
  6. `Services` (Grid of 6 core services)
  7. `Insights` (Interactive engagement model cards)
  8. `MentorBoard` (Founding team highlight + links to full team)
  9. `FAQ` (General inquiries)
  10. `Contact` (Email inquiry interface)
  11. `Footer`

### B. "Why Alvion?" Page (`/why-alvion`)
- **File:** `app/why-alvion/page.tsx`
- **Summary:** A text-rich, animated section designed to address skeptic questions directly.
- **Key Highlights:**
  - **Typewriter Statement:** Smooth typing text explaining Alvion's philosophy.
  - **Alvion's Position Pills:** interactive badges highlighting key pillars (Structured Execution + Real Accountability + Student Talent + Mentor Oversight).
  - **Addressing Skeptics (FAQ Grid):** Structured answers to 10 common client objections (e.g., student experience, continuity, quality assurance).
  - **Animated Elements:** Fully integrated with GSAP ScrollTrigger to stagger entry cards.

### C. Clientele Page (`/clientele`)
- **File:** `app/clientele/page.tsx`
- **Summary:** Dedicated portfolio page showing case studies for 14 notable clients.
- **Interactive UI:** A grid of cards displaying the company logo by default. Upon hovering, a smooth slide overlay displays a list of specific consulting deliverables executed by Alvion for that specific client.

### D. Team & Mentors Page (`/team`)
- **File:** `app/team/page.tsx`
- **Summary:** Complete registry of Alvion personnel.
- **Structure:**
  - **Founding Team:** Krish Mittal (CEO), Sushant (CGO), and Harsh Chaurasiya (COO).
  - **Directors:** Suhani Jain and Kayana Agarwal.
  - **Mentors:** 12 industry veterans with extensive credentials in top firms (Bain, BCG, Antler, McKinsey, upGrad, EY, Infosys).
  - **Visual Cards:** Clean cards that flip on hover (using pure 3D CSS transforms) to display detailed descriptions, education history, specific expertise, achievements, and a direct LinkedIn profile link.

### E. Careers Page (`/careers`)
- **File:** `app/careers/page.tsx`
- **Summary:** Landing page for recruiting talent from top-tier universities. Includes reasons to join, core organizational values, and a direct recruitment submission funnel.

---

## 5. Detailed Component Anatomy

### `Navbar` (`components/Navbar.tsx`)
- **Behavior:** Dynamically adapts its styling based on user interaction. It starts transparent (if on the home page) and transitions into a solid white, blurred background (`bg-white/90 backdrop-blur-xl`) with a bottom border once scrolled past 80% of the viewport height. On subpages (such as `/team` or `/why-alvion`), it remains in solid state permanently.
- **Mobile Support:** Implements a sliding right drawer for navigation, locked scroll on the document body during active states, and custom call-to-actions.

### `Hero` (`components/Hero.tsx`)
- **Styling:** Features a premium high-resolution cityscape background masked by a dark navy gradient overlay.
- **Visuals:** Uses a high-impact serif italic highlighted heading and a gold CTA layout (`#FFD700`).
- **Animations:** Animates title, description, and buttons on page load using GSAP timelines (`stagger: 0.1`).

### `Clientele` (`components/Clientele.tsx`)
- **Visual:** Smooth continuous carousel displaying client brand logos.
- **Mechanics:** Employs a tailwind transition animation (`animate-marquee`) moving duplicated list elements infinitely. Utilizes gradient masks on the left and right edges for a seamless blending effect.

### `Stats` (`components/Stats.tsx`)
- **Logic:** Renders six critical stats cards shaped inside SVG shield frames.
- **Animation:** Utilizes GSAP ScrollTrigger. Upon scrolling the cards into view, the numbers increment from `0` to their respective targets over 2 seconds before snapping to round numbers with appropriate suffixes (`+`, `x`).

### `Problems` (`components/Problems.tsx`)
- **Visual:** A 2x2 custom coordinate matrix mapped on Y-Axis (Value: Low to High) and X-Axis (Flexibility: Low to High).
- **Goal:** Highlights Alvion in the top-right quadrant (High Value + High Flexibility), comparing it visually against Traditional Consulting Firms, Internships, and Freelancers.

### `Services` (`components/Services.tsx`)
- **Grid:** Lists Alvion's six core deliverables (Market Research, GTM Strategy, Pricing, AI Enablement, Expansion, Offerings Review).
- **Visual Hover:** Individual cards feature dual border gradients (Gold/Blue) fading in opacity on hover.

### `Insights` (`components/Insights.tsx`)
- **Grid:** Outlines Alvion's 4 core operational models.
- **Effect:** Employs pure CSS 3D perspectives (`perspective: 1000px`, `backface-visibility: hidden`) to create elegant flip cards showing descriptions on the reverse side upon hover.

### `MentorBoard` (`components/MentorBoard.tsx`)
- **Visual:** Flip-card structure for the primary founders. Links to the broader team catalog on `/team`.

### `Contact` (`components/Contact.tsx`)
- **Interface:** Modern dual-column card (Form on left, contact metadata on right).
- **Backend-free Handling:** Once submitted, the component captures state parameters and opens a native system mail client redirecting directly to `office@alvion.in` with populated subject/body fields. This removes backend vulnerability and maintains zero infrastructure maintenance.

---

## 6. Styling & Theme Conventions

The project adheres to a strict corporate luxury aesthetic.

### Typography
- **Primary Sans:** `Inter` (configured natively via `next/font/google`). Applied globally to body tags.
- **High Contrast Serif:** Used on select headline triggers for premium editorial design (e.g., italic tagline blocks).

### Color Swatches
| Semantic Name | Hex Code | Purpose |
|---------------|----------|---------|
| **Imperial Navy** | `#0a1b2b` | Primary branding backgrounds, text headings, and main brand identity. |
| **Bright Gold** | `#FFD700` | Highlighting text, buttons, borders of active items, and primary CTA accents. |
| **Soft Beige/Off-White**| `#F3F2ED` | Global page body backgrounds, footers, and soft surface backgrounds. |
| **Matte Charcoal** | `#1A1A1A` | Secondary banners and major CTA layouts. |
| **Pure White** | `#FFFFFF` | Core card structures, active menus, and header drawer components. |

---

## 7. Development Guidelines

### Code Conventions
- **Client Components:** Always mark components using state, event listeners, or animation triggers with the `"use client";` directive at the very top.
- **Responsive Layouts:** Tailor layouts for standard breakpoints (`sm`, `md`, `lg`, `xl`) to ensure absolute fidelity on both mobile devices and wide screens.
- **Animation Safety:** Ensure GSAP animations utilize scopes (`useGSAP` or reverting scopes on cleanup) to prevent layout memory leaks on Next.js client routing transitions.
- **Tailwind v4:** Write modern class names and compile safely. Merging dynamic class configurations should be routed through the `cn` utility located in `lib/utils.ts`.

### Adding New Team Members or Clients
To add or update brand assets, team profiles, or client success records, modify the following static objects:
- **Team members:** `teamMembers` or `mentors` inside `app/team/page.tsx`
- **Clients & Case Studies:** `companies` inside `app/clientele/page.tsx`
- **Engagement Models:** `engagementModels` inside `components/Insights.tsx`

---
*Created and maintained by the Alvion Engineering Team.*
