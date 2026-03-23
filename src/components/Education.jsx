import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4 md:mb-0 md:mr-6 shrink-0">
                            <FaGraduationCap />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Kafue Boys Secondary School</h3>
                            <p className="text-blue-600 font-medium mb-2">Grade 12 Certificate, High School/Secondary Diplomas and Certificates</p>
                            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-500 font-medium">
                                2016 - 2019
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}