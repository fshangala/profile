# Gemini Instructions - Portfolio Project

This document provides foundational mandates and context for Gemini CLI when working on this repository.

## 🎯 Project Goals
- Maintain a highly polished, visually appealing developer portfolio.
- Prioritize performance and smooth animations.

## 🛠️ Technical Standards
- **Styling**: Use Tailwind CSS 4 utility classes. Avoid inline styles unless necessary for dynamic animations.
- **Animations**: Use `framer-motion` for all scroll-linked and entry animations. 
  - Standard duration: `0.5s` to `0.8s`.
  - Use `whileInView` with `viewport={{ once: true }}` for most section reveals.
- **Components**: Keep components functional and modular. 
- **Icons**: Use `react-icons` (specifically `fa` and `si` sets) for consistency.
- **Responsiveness**: Always test changes for mobile (sm), tablet (md), and desktop (lg) breakpoints.

## 📝 Content Management
- When updating experience, skills, or projects, use the information provided manually by the user. 
- Ensure the `Portfolio`, `GitHub Profile`, and Experience timeline remain consistent with the latest provided details.

## 🚀 Deployment
- The project is configured for static hosting. 
- Run `npm run build` before any deployment to verify bundle integrity.
