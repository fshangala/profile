import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-tr from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src={profileImg} 
                                alt="Funduluka Shangala" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Full-Stack Developer & Tech Enthusiast
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            I am a Full-Stack Software Developer with a strong background in project management, 
                            store management, and systems automation. My passion lies in creating efficient, 
                            user-friendly, and innovative solutions that solve real-world problems.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            With experience ranging from web development to IT support, I bring a versatile 
                            skill set to every project. I thrive in collaborative environments and am always 
                            eager to learn new technologies.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <span className="block text-2xl font-bold text-blue-600 mb-1">7+</span>
                                <span className="text-gray-600">Years Experience</span>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <span className="block text-2xl font-bold text-purple-600 mb-1">10+</span>
                                <span className="text-gray-600">Projects Completed</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}