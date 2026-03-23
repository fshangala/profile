import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                        Funduluka Shangala
                    </h1>
                    <h3 className="text-2xl md:text-4xl font-medium text-gray-600 mb-8">
                        Software Developer
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        Crafting efficient and innovative software solutions. 
                        Based in Lusaka, Zambia.
                    </p>
                    
                    <div className="flex justify-center space-x-6 mb-12">
                        <motion.a 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/fshangala" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <FaGithub size={32} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/in/fshangala" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-700 transition-colors"
                        >
                            <FaLinkedin size={32} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:fshangala@gmail.com"
                            className="text-gray-600 hover:text-red-500 transition-colors"
                        >
                            <FaEnvelope size={32} />
                        </motion.a>
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}