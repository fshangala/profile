import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Let's Connect
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed max-w-md">
                            I'm currently open to new opportunities and collaborations. 
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        
                        <div className="space-y-4">
                            <a href="mailto:fshangala@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                                    <FaEnvelope />
                                </div>
                                <span>fshangala@gmail.com</span>
                            </a>
                            <a href="https://wa.me/260974836436" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-500 transition-colors">
                                    <FaWhatsapp />
                                </div>
                                <span>+260 974 836 436</span>
                            </a>
                            <div className="flex items-center text-gray-300">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                                    <FaMapMarkerAlt />
                                </div>
                                <span>Lusaka, Zambia</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center items-center md:items-end"
                    >
                        <div className="flex space-x-6 mb-8">
                            <a 
                                href="https://github.com/fshangala" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all transform hover:scale-110"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/fshangala" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all transform hover:scale-110"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a 
                                href="https://www.upwork.com/freelancers/~01ca44d8a44361a13d?mp_source=share" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all transform hover:scale-110"
                            >
                                <SiUpwork size={24} />
                            </a>
                        </div>
                        <p className="text-gray-500 text-center md:text-right">
                            "Innovation is the ability to see change as an opportunity - not a threat."
                        </p>
                    </motion.div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} Funduluka Shangala. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}