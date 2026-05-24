# Alvion | Strategic Consulting Website

Welcome to the official repository of **Alvion**, an ultra-premium, student-led execution and strategic consulting platform. 

Alvion bridges the consulting gap by pairing high-potential student analysts from India's premier institutions (e.g., SRCC, IIT Bombay, Delhi University) with high-growth startups and established corporations. To guarantee enterprise-grade delivery, all projects are structured and overseen by experienced senior mentors (ex-McKinsey, Google, Accenture, upGrad, BCG, and Antler).

---

## 🚀 Key Value Metrics

- **1/10th Cost:** Strategic consulting at growth-stage pricing.
- **5x Speed:** Deliverables completed in 4 to 8 weeks (3x to 5x faster than traditional tier-1 firms).
- **Quality Assurance:** Senior industry experts review and validate every single deliverable before client presentation.
- **Client Base:** Trusted by industry leaders including Infosys, Bajaj, Puma, Unstop, Masters Union, and ManipalCigna.

---

## 🛠️ Technology Stack & Core Architecture

The website is a highly immersive, performant landing platform built with:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org) + [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (utility-first, modern compiling)
- **Animations:** [GSAP (GreenSock)](https://gsap.com) + `@gsap/react` + `ScrollTrigger` (dynamic page entry timers and numerical counters)
- **UI Components:** [Radix UI Primitives](https://www.radix-ui.com) (Accessible, unstyled components) + [Lucide Icons](https://lucide.dev)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org)

---

## 📚 Complete Repository Documentation

We maintain detailed documentation files to aid development, onboarding, and agent collaboration:

1. **[DOCS.md](./DOCS.md) (Website Documentation):** A comprehensive architectural overview. Contains details on pages structure, information routing, core component breakdowns, color/theme swatches, and responsive layout styling standards.
2. **[AGENTS.md](./AGENTS.md) (AI Agent Handbook):** Essential guidelines, rules, conventions, and formatting constraints for AI code agents when working inside this codebase.
3. **[CURSOR.md](./CURSOR.md) (Cursor Workspace Settings):** Guidelines on configuring Cursor IDE features (such as Composer and Chat), file indexing/indexing ignore lists, and high-productivity keyboard shortcuts.

---

## 💻 Getting Started Locally

Follow these steps to set up and run the Alvion website on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) (v18+ recommended) and a package manager (npm, yarn, pnpm, or bun) installed.

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/your-username/alvion-website.git
cd alvion-website

# Install packages
npm install
# or
bun install
```

### 2. Run the Development Server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production

To compile a highly optimized static build:

```bash
npm run build
npm run start
```

---

## 📁 Key Folder Structure Overview

```bash
├── app/                  # App Router views & route segments
│   ├── careers/          # Join Alvion page
│   ├── clientele/        # Portfolio case studies
│   ├── team/             # Team & mentor profiles
│   ├── why-alvion/       # Explaining Alvion & skeptic FAQ
│   ├── layout.tsx        # Base root layout wrapper
│   └── page.tsx          # Homepage landing page
├── components/           # Custom reusable react components
│   ├── ui/               # Lower-level headless buttons/cards
│   └── ...               # Sections: Hero, Services, Clientele, Stats, Contact
├── lib/                  # Shared helper functions (cn merge helper)
└── public/               # Static icons, pictures, and logos
```

---

## 🤝 Contribution & Standards

- **Code Style:** Strictly use TypeScript types. Prefer clean functional components.
- **Animations:** Standardize animation scopes in GSAP to avoid memory leaks. Bind triggers using container references (`useGSAP({ scope })`).
- **Styling:** Adhere to the official color swatches: Imperial Navy (`#0a1b2b`), Bright Gold (`#FFD700`), Warm Beige (`#F3F2ED`), and Matte Charcoal (`#1A1A1A`).

---
*Developed with ❤️ by the Alvion Engineering Team.*
