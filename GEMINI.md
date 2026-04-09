# Gemini Instructions - Portfolio Project

This document provides foundational mandates and context for Gemini CLI when working on this repository.

## Project Goals
- Maintain a highly polished, visually appealing developer portfolio.
- Prioritize performance and smooth animations.

## Technical Standards
- **Styling**: Use Tailwind CSS 4 utility classes. Avoid inline styles unless necessary for dynamic animations.
- **Animations**: Use `framer-motion` for all scroll-linked and entry animations. 
  - Standard duration: `0.5s` to `0.8s`.
  - Use `whileInView` with `viewport={{ once: true }}` for most section reveals.
- **Components**: Keep components functional and modular. 
- **Icons**: Use `react-icons` (specifically `fa` and `si` sets) for consistency.
- **Responsiveness**: Always test changes for mobile (sm), tablet (md), and desktop (lg) breakpoints.

## Content Management
- When updating experience, skills, or projects, use the information provided manually by the user. 
- Ensure the `Portfolio`, `GitHub Profile`, and Experience timeline remain consistent with the latest provided details.

## Deployment
- Deployment is automated via GitHub Actions workflow: `.github/workflows/static.yml`.
- Deploys to **GitHub Pages** on:
  - Push to `master`
  - Manual trigger via `workflow_dispatch`
- CI uses **Node.js 20** with npm cache, then runs:
  - `npm ci`
  - `npm run build`
- The build output from `./dist` is uploaded and deployed using `actions/deploy-pages`.
- Keep the project buildable with `npm run build` at all times, since deployment depends on the CI build step passing.