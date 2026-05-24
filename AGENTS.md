# Alvion Codebase | Agent Guidelines (AGENTS.md)

Welcome, AI Agent! This document acts as your operational handbook when working with the **Alvion Website** codebase. It outlines the specific patterns, structural rules, conventions, and developer guidelines that you **must** adhere to when contributing code.

---

## 1. Codebase Philosophy & Architectural Patterns

Alvion is an ultra-premium, modern agency landing site. Code quality, aesthetic precision, and performance are our highest priorities.

### Core Stack Rules
- **Next.js 16.1.1 (App Router):** We use standard page-based routing. Keep layout logic in `app/layout.tsx` and specific route representations in `app/<route>/page.tsx`.
- **React 19.x & TypeScript 5.x:** Enforce strict type definitions. Avoid using `any` unless absolutely necessary; use typed interfaces for components, state, and properties.
- **Tailwind CSS v4:** Utilize utility classes for all layouts. Leverage native tailwind variables if needed. Use the `cn(...)` merging helper (`lib/utils.ts`) for dynamic class compositions.
- **GSAP for Animations:** We use GSAP and `@gsap/react` for complex animations. Always scope animations within a container ref using GSAP context to ensure safe unmounting and avoid memory leaks.

---

## 2. Agent Instruction Checklist

When implementing features or fixing bugs in this repository, you **must** follow these principles:

### A. General Conduct & Communication
- **No Emojis:** Do not include emojis in code comments, files, or user communications unless explicitly requested by the user.
- **Clear Explanations:** Keep comments brief and avoid narrating obvious code behaviors. Only comment to explain non-obvious intent, trade-offs, or constraints.
- **Read Before Modifying:** Always use the `Read` tool to examine files completely before proposing or applying code modifications. Never guess structure.

### B. Styling & Aesthetic Guidelines
- **Color Consistency:** Strictly use the official Alvion color swatches:
  - **Navy Blue (Imperial):** `#0a1b2b` (Text headings, dark backgrounds)
  - **Bright Gold:** `#FFD700` (Hero highlighting, active triggers, secondary accents)
  - **Warm Beige:** `#F3F2ED` (Global body background, soft structures)
  - **Matte Charcoal:** `#1A1A1A` (Dark sections, forms, and main footer background)
- **Responsive-First:** Every component must be built mobile-first. Test scaling from small touch screens (`320px`) up to massive desktop screens (`1440px+`).
- **Interactive States:** Use subtle hover states (`hover:`, `transition-all`, `duration-300`, `scale-`, `opacity-`) to create a highly tactile, luxury interface.

### C. Component Guidelines
- **Directive Usage:** Mark files that use react state, hooks, or event listeners with `"use client";` at line 1.
- **Modular Sections:** Keep components scoped and single-purpose. Separate raw content lists (like team, pricing, or list components) into local constants or data structures instead of mixing them directly in render loops.

---

## 3. Essential Workspace Conventions

### Adding or Editing Pages
When adding a new route, place it inside a folder in `app/` with a `page.tsx` file.
1. Match existing navbar links in `components/Navbar.tsx` if it's a global section.
2. Maintain layout consistency by importing the `Navbar` and `Footer` components.
3. Keep page containers wrapped in standard background colors matching `#F3F2ED` or `#FFFFFF`.

### Animation & GSAP Best Practices
To create a standard load animation or scroll-triggered behavior, follow this exact pattern:

```typescript
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function MyComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Always scope GSAP triggers inside the container ref
    gsap.from(".anim-item", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef }); // 2. Bind scope parameter

  return (
    <div ref={containerRef}>
      <div className="anim-item">Content 1</div>
      <div className="anim-item">Content 2</div>
    </div>
  );
}
```

---

## 4. Subagent Collaboration & Task Routing

If you are a spawned subagent or collaborating in a multi-agent environment:
1. **Parallel Tasks:** Run independent tasks (e.g., modifying disjoint files, compiling code, reading lints) in parallel to optimize response time.
2. **Git Branching:** Always ensure your working branch is correctly set. For additions or changes, check out standard branch titles (e.g., `cashkaro-project-addition`).
3. **Lint Verification:** Immediately run linter checks on any modified file using standard workspace linter commands before marking a task complete.

By adhering to these rules, we keep the Alvion codebase uniform, high-performing, and easy to maintain. Good luck!
