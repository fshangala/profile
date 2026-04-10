import { FaBriefcase, FaServer, FaCode } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      company: 'Upwork',
      role: 'Software Developer',
      period: 'January 2019 - Present',
      description:
        'Developing and maintaining software applications. Utilizing skills in Python, SQL, software troubleshooting, programming, software logic, advanced analytical thinking, adaptability, JavaScript, UI/UX knowledge, Java, Kotlin, Dart, Flutter, React Native, React.js, Node.js, Django, PHP, and Laravel to create efficient and innovative solutions.',
      icon: <FaCode />,
      color: 'bg-brand-100 text-brand-700',
    },
    {
      company: 'Kafue Institute of Health Sciences and Research',
      role: 'IT Support Technician',
      period: 'June 2021 - June 2022',
      description:
        'Created and managed information systems and handled IT operations. Ensured reliable technical infrastructure across daily workflows.',
      icon: <FaServer />,
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      company: 'Multifold IT Solutions Private Limited',
      role: 'Web Developer',
      period: '2021 - 2022',
      description:
        'Designed and built websites, web applications, and information graphics. Collaborated with cross-functional teams to gather requirements and ship scalable user-focused solutions.',
      icon: <FaBriefcase />,
      color: 'bg-slate-200 text-slate-700',
    },
  ];

  return (
    <section id="experience" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-rule" />
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0 animate-fade-in-up">
          {experiences.map((exp) => (
            <div key={exp.role} className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${exp.color}`}
              >
                {exp.icon}
              </div>

              <div className="card-surface w-[calc(100%-4rem)] p-6 transition-all hover:-translate-y-1 hover:shadow-lg md:w-[calc(50%-2.5rem)]">
                <div className="mb-2 flex flex-col items-start justify-between sm:flex-row sm:items-center">
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="mt-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 sm:mt-0">{exp.period}</span>
                </div>
                <h4 className="mb-3 text-lg font-medium text-brand-700">{exp.company}</h4>
                <p className="text-sm leading-relaxed text-slate-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
