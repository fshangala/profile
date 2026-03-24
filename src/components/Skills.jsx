import { motion } from 'framer-motion';
import { 
    FaPython, FaReact, FaNodeJs, FaJava, FaPhp, FaLaravel, 
    FaDatabase, FaAndroid, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub
} from 'react-icons/fa';
import { SiDjango, SiFlutter, SiDart, SiKotlin, SiC, SiLangchain, SiN8N, SiHuggingface, SiOllama, SiNextdotjs, SiOpenai, SiGnubash, SiDocker, SiArduino } from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';

export default function Skills() {
    const skills = [
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "Django", icon: <SiDjango className="text-green-900" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "LangChain", icon: <SiLangchain className="text-green-600" /> },
        { name: "Hugging Face", icon: <SiHuggingface className="text-yellow-500" /> },
        { name: "Prompt Engineering", icon: <SiOpenai className="text-green-600" /> },
        { name: "Ollama", icon: <SiOllama className="text-gray-800" /> },
        { name: "n8n", icon: <SiN8N className="text-red-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Arduino", icon: <SiArduino className="text-teal-600" /> },
        { name: "PowerShell", icon: <VscTerminalPowershell className="text-blue-600" /> },
        { name: "Bash", icon: <SiGnubash className="text-gray-700" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
        { name: "Dart", icon: <SiDart className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
        { name: "SQL", icon: <FaDatabase className="text-gray-600" /> },
        { name: "C", icon: <SiC className="text-blue-700" /> },
    ];

    const otherSkills = [
        "Electronics", "Software Troubleshooting", "Systems Automation", 
        "Project Management", "Store Management"
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
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center border border-gray-100 transition-all cursor-default"
                        >
                            <div className="text-4xl mb-3">{skill.icon}</div>
                            <span className="font-medium text-gray-700">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-bold text-blue-800 mb-4">Other Competencies</h3>
                        <div className="flex flex-wrap gap-2">
                            {otherSkills.map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-purple-50 rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-bold text-purple-800 mb-4">Awards & Certifications</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="mr-2 text-purple-600">🏆</span>
                                <span className="text-gray-700">JETS PHYSICS Olympiads - Honors</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-purple-600">📜</span>
                                <span className="text-gray-700">Class C Commercial Driver License</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}