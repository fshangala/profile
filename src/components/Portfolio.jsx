import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import premiumfreshImg from '../assets/premiumfresh.png';
import lamboImg from '../assets/lambo.png';

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Lambo",
            shortDescription: "Master-slave automation app for synchronized web browsing.",
            fullDescription: "A robust master-slave automation system featuring a Dart-based WebSocket relay server and a Flutter mobile application. The server facilitates real-time device synchronization within isolated rooms, broadcasting actions from a master device to connected slaves. The Flutter app supports universal synchronized browsing, action replication (clicks, input changes), and persistent site history.",
            technologies: ["Dart", "Flutter", "WebSockets", "Material 3", "Docker", "JavaScript"],
            image: lamboImg,
            links: {
                github: "https://github.com/fshangala/lambo/tree/main",
                demo: "https://fshangala.github.io/lambo/"
            }
        },
        {
            id: 2,
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
            id: 3,
            title: "Developer Portfolio - Funduluka Shangala",
            shortDescription: "Professional, high-performance portfolio with React & Framer Motion.",
            fullDescription: "A professional, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion. This project showcases the skills, experience, and educational background of Funduluka Shangala, a Software Developer based in Lusaka, Zambia. Features include a modern UI/UX with glassmorphism, dynamic animations, GitHub profile integration, and an interactive project showcase.",
            technologies: ["React 19", "Tailwind CSS 4", "Framer Motion", "Vite", "React Icons"],
            image: "🚀",
            links: {
                github: "https://github.com/fshangala/profile",
                demo: "https://fshangala.github.io/profile/"
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center sm:px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm hidden sm:block"
                        ></motion.div>
                        
                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white sm:rounded-2xl shadow-2xl w-full h-full sm:h-auto sm:max-w-2xl overflow-y-auto sm:overflow-hidden z-10"
                        >
                            <div className="h-64 sm:h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-8xl overflow-hidden flex-shrink-0">
                                {selectedProject.image.includes('/') ? (
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                ) : (
                                    selectedProject.image
                                )}
                            </div>
                            
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors text-gray-700 z-20 shadow-md"
                            >
                                <FaTimes size={20} />
                            </button>

                            <div className="p-6 sm:p-8">
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

                                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                                    <a
                                        href={selectedProject.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium w-full sm:w-auto"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href={selectedProject.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-3 sm:py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium w-full sm:w-auto"
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