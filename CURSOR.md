# Cursor IDE Guidelines & Shortcuts (CURSOR.md)

Welcome! This document provides guidelines for configuring and using the **Cursor IDE** in the **Alvion Website** workspace. Adhering to these setups and shortcuts maximizes developer productivity, enforces code quality, and ensures seamless cooperation with the AI engine.

---

## 1. Project Configuration & Workspace Rules

Cursor uses local configurations to index the codebase, apply project rules, and direct agent operations.

### File Indexing & Exclusions
To optimize Cursor's codebase indexing speed and ensure AI agents do not scan unnecessary system logs or cached files, configure your standard ignore folders. Ensure your local `.gitignore` or Cursor workspace settings ignore:
- `.next/`
- `node_modules/`
- `out/`
- `package-lock.json` (to avoid large diff scans)
- `.git/`

---

## 2. Cursor Core Features & Workflows

Cursor has custom tooling that changes how we code. Leverage these core techniques:

### A. Composer (Ctrl + I / Cmd + I)
Composer is your primary interface for multi-file generation and broad refactoring.
- **When to Use:** Use when you need to make edits that touch multiple directories (such as updating a component definition and applying it across all static route pages).
- **Pro-Tip:** Reference specific files directly in the Composer chat using the `@` symbol (e.g., `@app/team/page.tsx`) to pass accurate file context to the LLM.

### B. Chat & Code Referencing (Ctrl + L / Cmd + L)
Use Chat for debugging, asking questions, or writing single files.
- You can reference directories (e.g., `@components`) or code blocks to quickly get context on layout styling or helper logic.
- Press `Cmd + Shift + L` to add selected editor code directly to the chat context.

### C. Cursor Rules (`.cursorrules` & `.mdc` Rules)
We maintain project directives. For file-specific or workspace-wide rule configurations:
- Custom MDC rules are placed in `.cursor/rules/*.mdc`.
- These rules are loaded by the editor and automatically enforce our styling rules, import guidelines, and tech stack expectations whenever relevant files are opened.

---

## 3. Keyboard Shortcuts for Quick Navigation

Below is a curated set of the most useful Cursor/VSCode keyboard shortcuts for navigating and coding in this project:

| Action | Windows / Linux | macOS |
|--------|-----------------|-------|
| **Open Composer** | `Ctrl + I` | `Cmd + I` |
| **Open Cursor Chat** | `Ctrl + L` | `Cmd + L` |
| **Command Palette** | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| **Quick Open File** | `Ctrl + P` | `Cmd + P` |
| **Go to Symbol** | `Ctrl + Shift + O` | `Cmd + Shift + O` |
| **Toggle Sidebar** | `Ctrl + B` | `Cmd + B` |
| **Toggle Integrated Terminal** | `Ctrl + \`` | `Cmd + \`` |
| **Multi-Cursor Select** | `Alt + Click` | `Option + Click` |
| **Select Next Occurrence** | `Ctrl + D` | `Cmd + D` |
| **Trigger Suggestion / Autocomplete** | `Ctrl + Space` | `Cmd + Space` |

---

## 4. Linting & Validation Workflows

Before committing any updates:
1. Ensure your file has no ESLint or TypeScript compiler complaints.
2. In Cursor, run the project build locally (`npm run build`) in the integrated terminal to verify static routes compile perfectly.
3. Address any imported lints or type failures immediately to preserve workspace stability.

*Happy Coding in Cursor!*
