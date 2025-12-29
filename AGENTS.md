# Agent Context: Portfolio Project

## Project Overview
- **Owner:** Funduluka Shangala (Full-stack Software Developer)
- **Repository:** `profile`
- **Live URL:** https://fshangala.github.io/profile/
- **Tech Stack:** React (Vite), Tailwind CSS v4, GitHub Actions.

## Development Environment
- **IDE:** VS Code
- **Launch Config:** - Use `Run Script: dev` for the node terminal.
  - Use `Dev + Debug` (Compound) to launch the Vite server and Chrome debugger simultaneously.
- **Workflow:** Prefers casual, concise code. Expertise in Flutter, Django, and LLM-powered apps.

## Technical Constraints & Config
- **Base Path:** `vite.config.js` MUST have `base: '/profile/'` for GitHub Pages asset resolution.
- **Tailwind v4:** Using `@tailwindcss/vite`. Styles are managed in `src/index.css` via `@theme` variables. No `tailwind.config.js` is required.
- **Routing:** Use `basename="/profile"` for all React Router configurations.

## Deployment
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`) handles the build.
- **Method:** Deploys the `./dist` folder to GitHub Pages on every push to `master`.
- **Optimization:** Uses `npm ci` and dependency caching for faster builds.

## Identity & Tone
- **Focus:** Highlight high-level engineering, MCP servers, and automation.
- **Inspiration:** "The way to love anything is to realize that it might be lost." — Robert Cialdini.

## Current Tasks
- [x] Configure Vite base path and Tailwind v4.
- [x] Set up VS Code compound debugging.
- [x] Update GitHub Actions to v4 with caching.
- [ ] Build core portfolio components (Hero, Projects, Skills).
- [ ] Integrate GitHub API to showcase recent activity.