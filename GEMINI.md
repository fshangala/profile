# Gemini Instructions - Portfolio Project

This document provides foundational mandates and context for Gemini CLI when working on this repository.

## 🎯 Project Goals
- Maintain a highly polished, visually appealing developer portfolio.
- Ensure all content remains synchronized with `public/resume.pdf`.
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
- When updating experience or skills, cross-reference `public/resume.pdf`.
- If a new project is added to the resume, create a corresponding card in a (future) Projects section or update the Experience timeline.

## 🚀 Deployment
- The project is configured for static hosting. 
- Run `npm run build` before any deployment to verify bundle integrity.
