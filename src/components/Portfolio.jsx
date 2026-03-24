import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import premiumfreshImg from '../assets/premiumfresh.png';

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "PremiumFresh Subscription System",
            shortDescription: "A weekly vegetable delivery subscription platform.",
            fullDescription: "An information system built with Next.js that enables customers to subscribe to a weekly vegetable delivery service. Features include a customer portal with order history and profile settings, a driver dashboard with real-time delivery queues and mapping, and an admin area for order monitoring. Built with Supabase for auth/database and Leaflet for maps.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Leaflet"],
            image: premiumfreshImg,
            links: {
                github: "https://github.com/fshangala/fooddelivery",
                demo: "https://fooddelivery-two.vercel.app/"
            }
        },
        {
            id: 2,
            title: "E-Commerce Dashboard",
            shortDescription: "A comprehensive dashboard for managing online stores.",
            fullDescription: "A full-featured admin dashboard for e-commerce platforms. Features include real-time sales tracking, inventory management, customer analytics, and order processing. Built with performance and scalability in mind.",
            technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
            image: "🛒", // Placeholder using emoji for now, or could use a colored div
            links: {
                github: "#",
                demo: "#"
            }
        },
        {
            id: 3,
            title: "Task Management App",
            shortDescription: "Collaborative task manager with real-time updates.",
            fullDescription: "A productivity tool designed for teams. It supports drag-and-drop task organization, real-time collaboration via WebSockets, and detailed progress reporting. Includes user authentication and role-based access control.",
            technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
            image: "✅",
            links: {
                github: "#",
                demo: "#"
            }
        },
        {
            id: 4,
            title: "Weather Forecast API",
            shortDescription: "RESTful API for global weather data.",
            fullDescription: "A robust backend service that aggregates weather data from multiple sources. Provides endpoints for current conditions, forecasts, and historical data. Implements caching strategies for optimal performance.",
            technologies: ["Python", "FastAPI", "Redis", "Docker"],
            image: "☁️",
            links: {
                github: "#",
                demo: "#"
            }
        },
         {
            id: 5,
            title: "Portfolio Website V1",
            shortDescription: "My previous personal portfolio site.",
            fullDescription: "The first iteration of my personal portfolio. It focused on simplicity and fast load times. Served as a testing ground for learning new CSS techniques and responsive design principles.",
            technologies: ["HTML5", "SASS", "JavaScript"],
            image: "🎨",
            links: {
                github: "#",
                demo: "#"
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        A selection of projects I've worked on, ranging from web applications to backend services.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedProject(project)}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                        >
                            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                                {project.image.includes('/') ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                ) : (
                                    project.image
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        ></motion.div>
                        
                        <motion.div
                            layoutId={`project-${selectedProject.id}`} // layoutId for shared element transition if we link it to the card
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden z-10"
                        >
                            <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-8xl overflow-hidden">
                                {selectedProject.image.includes('/') ? (
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                ) : (
                                    selectedProject.image
                                )}
                            </div>
                            
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors text-gray-700"
                            >
                                <FaTimes size={20} />
                            </button>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {selectedProject.fullDescription}
                                </p>
                                
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-gray-100">
                                    <a
                                        href={selectedProject.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href={selectedProject.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}