import { motion } from 'framer-motion';
import { FaBriefcase, FaServer, FaCode } from 'react-icons/fa';

export default function Experience() {
    const experiences = [
        {
            company: "Upwork",
            role: "Software Developer",
            period: "January 2019 - Present",
            description: "Developing and maintaining software applications. Utilizing skills in Python, SQL, software troubleshooting, programming, software logic, advanced analytical thinking, adaptability, JavaScript, user interface/user experience knowledge, Java, Kotlin, Dart, Flutter, React Native, React.js, Node.js, Django, PHP, and Laravel to create efficient and innovative solutions.",
            icon: <FaCode />,
            color: "bg-blue-100 text-blue-600"
        },
        {
            company: "Kafue Institute of Health Sciences and Research",
            role: "IT Support Technician",
            period: "June 2021 - June 2022",
            description: "Created and managed information systems and handled the IT work. Ensured smooth operation of technical infrastructure.",
            icon: <FaServer />,
            color: "bg-green-100 text-green-600"
        },
        {
            company: "Multifold IT Solutions Private Limited",
            role: "Web Developer",
            period: "2021 - 2022",
            description: "Responsible for designing and developing websites and web applications and information graphics. Collaborated with cross-functional teams to gather requirements, design user-friendly interfaces, and implement robust and scalable solutions.",
            icon: <FaBriefcase />,
            color: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${exp.color}`}>
                                {exp.icon}
                            </div>
                            
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                    <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-lg font-medium text-blue-600 mb-3">{exp.company}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}