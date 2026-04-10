# Gemini Instructions - Portfolio Project

This document provides foundational mandates and context for Gemini CLI when working on this repository.

## Project Goals
- Maintain a highly polished, visually appealing developer portfolio.
- Prioritize performance and smooth animations.

## Technical Standards
- **Styling**: Use Tailwind CSS 4 utility classes. Avoid inline styles unless necessary for dynamic effects.
- **Animations**: Use Tailwind CSS animations/transitions for all motion effects.
  - Prefer custom keyframes/utilities in `src/index.css`.
  - Keep animation duration in the `0.5s` to `0.8s` range for section-level motion.
  - Keep richer animation only for Hero visuals and Portfolio modal transitions.
  - Respect reduced-motion preferences (`prefers-reduced-motion`) and disable non-essential motion.
- **Components**: Keep components functional and modular.
- **Icons**: Use `react-icons` (specifically `fa` and `si` sets) for consistency.
- **Responsiveness**: Always test changes for mobile (sm), tablet (md), and desktop (lg) breakpoints.

## Content Management
- When updating experience, skills, or projects, use the information provided manually by the user.
- Ensure the `Portfolio`, `GitHub Profile`, and Experience timeline remain consistent with the latest provided details.

## Deployment
- Deployment is automated with split workflows:
  - CI: `.github/workflows/ci.yml`
  - Deploy: `.github/workflows/deploy.yml`
- **CI workflow** runs on pull requests and pushes:
  - `npm ci`
  - `npm run lint`
  - `npm run build`
- **Deploy workflow** runs on push to `master` and manual `workflow_dispatch`, but deploy job is gated to `refs/heads/master`.
- Deploy publishes `./dist` to **GitHub Pages** via `actions/deploy-pages`.
- Workflows use branch-safe concurrency and upload diagnostics artifacts on failure.
- Runtime standard is **Node.js 20** (`.nvmrc` and `package.json` engines).
