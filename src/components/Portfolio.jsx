import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChartLine } from 'react-icons/fa';
import premiumfreshImg from '../assets/premiumfresh.png';
import lamboImg from '../assets/lambo.png';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Lambo',
      shortDescription: 'Master-slave automation app for synchronized web browsing.',
      fullDescription:
        'A robust master-slave automation system featuring a Dart-based WebSocket relay server and a Flutter mobile application. The server facilitates real-time device synchronization within isolated rooms, broadcasting actions from a master device to connected slaves. The Flutter app supports universal synchronized browsing, action replication, and persistent site history.',
      impact: 'Enabled near real-time action sync across connected clients with room-based broadcasting for reliable collaborative sessions.',
      technologies: ['Dart', 'Flutter', 'WebSockets', 'Material 3', 'Docker', 'JavaScript'],
      image: lamboImg,
      links: {
        github: 'https://github.com/fshangala/lambo/tree/main',
        demo: 'https://fshangala.github.io/lambo/',
      },
    },
    {
      id: 2,
      title: 'PremiumFresh Subscription System',
      shortDescription: 'A weekly vegetable delivery subscription platform.',
      fullDescription:
        'An information system built with Next.js that enables customers to subscribe to a weekly vegetable delivery service. Features include a customer portal with order history and profile settings, a driver dashboard with real-time delivery queues and mapping, and an admin area for order monitoring. Built with Supabase for auth/database and Leaflet for maps.',
      impact: 'Centralized customer, driver, and admin workflows in one platform, reducing manual coordination overhead for weekly deliveries.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Leaflet'],
      image: premiumfreshImg,
      links: {
        github: 'https://github.com/fshangala/fooddelivery',
        demo: 'https://fooddelivery-two.vercel.app/',
      },
    },
    {
      id: 3,
      title: 'Developer Portfolio - Funduluka Shangala',
      shortDescription: 'Professional, high-performance portfolio with React and Tailwind CSS.',
      fullDescription:
        'A professional, high-performance portfolio website built with React and Tailwind CSS. This project showcases the skills, experience, and educational background of Funduluka Shangala, a Software Developer based in Lusaka, Zambia. Features include a modern UI/UX, smooth CSS interactions, GitHub profile integration, and an interactive project showcase.',
      impact: 'Improved personal brand presentation with a polished, responsive interface and clear project storytelling for recruiters and clients.',
      technologies: ['React 19', 'Tailwind CSS 4', 'Vite', 'React Icons'],
      image: 'FS',
      links: {
        github: 'https://github.com/fshangala/profile',
        demo: 'https://fshangala.github.io/profile/',
      },
    },
  ];

  return (
    <section id="portfolio" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="section-title">Portfolio</h2>
          <div className="section-rule" />
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">A selection of projects ranging from web applications to backend and automation systems.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="card-surface group overflow-hidden text-left transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-100 to-slate-200 text-4xl font-bold text-slate-700">
                {project.image.includes('/') ? (
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  project.image
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="mb-4 line-clamp-2 text-slate-600">{project.shortDescription}</p>
                <p className="mb-4 flex items-start gap-2 text-sm text-slate-700">
                  <FaChartLine className="mt-0.5 shrink-0 text-brand-600" />
                  <span>{project.impact}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center sm:px-4">
          <button
            type="button"
            aria-label="Close project details"
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 hidden bg-slate-950/60 backdrop-blur-sm sm:block"
          />

          <div className="animate-pop-in relative z-10 h-full w-full overflow-y-auto bg-white sm:h-auto sm:max-w-2xl sm:rounded-2xl">
            <div className="flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-100 to-slate-200 text-7xl font-bold text-slate-700 sm:h-64">
              {selectedProject.image.includes('/') ? (
                <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full object-cover" />
              ) : (
                selectedProject.image
              )}
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-slate-700 shadow-md transition-colors hover:bg-white"
              aria-label="Close project details"
            >
              <FaTimes size={20} />
            </button>

            <div className="p-6 sm:p-8">
              <h3 className="mb-2 text-2xl font-bold text-slate-900">{selectedProject.title}</h3>
              <p className="mb-4 leading-relaxed text-slate-600">{selectedProject.fullDescription}</p>
              <p className="mb-6 rounded-lg bg-brand-50 p-3 text-sm text-slate-700">
                <strong className="text-brand-700">Outcome:</strong> {selectedProject.impact}
              </p>

              <div className="mb-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-900">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 font-medium text-white transition-colors hover:bg-slate-800 sm:w-auto"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
