import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaAward,
  FaCertificate,
} from 'react-icons/fa';
import {
  SiDjango,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiC,
  SiLangchain,
  SiN8N,
  SiHuggingface,
  SiOllama,
  SiNextdotjs,
  SiOpenai,
  SiGnubash,
  SiDocker,
  SiArduino,
} from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-blue-500" /> },
    { name: 'Django', icon: <SiDjango className="text-green-900" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-slate-900" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-amber-400" /> },
    { name: 'LangChain', icon: <SiLangchain className="text-green-600" /> },
    { name: 'Hugging Face', icon: <SiHuggingface className="text-yellow-500" /> },
    { name: 'Prompt Engineering', icon: <SiOpenai className="text-emerald-600" /> },
    { name: 'Ollama', icon: <SiOllama className="text-slate-700" /> },
    { name: 'n8n', icon: <SiN8N className="text-red-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-slate-900" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
    { name: 'Arduino', icon: <SiArduino className="text-teal-600" /> },
    { name: 'PowerShell', icon: <VscTerminalPowershell className="text-blue-600" /> },
    { name: 'Bash', icon: <SiGnubash className="text-slate-700" /> },
    { name: 'Flutter', icon: <SiFlutter className="text-blue-400" /> },
    { name: 'Dart', icon: <SiDart className="text-blue-600" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'Kotlin', icon: <SiKotlin className="text-violet-600" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-500" /> },
    { name: 'Laravel', icon: <FaLaravel className="text-red-600" /> },
    { name: 'SQL', icon: <FaDatabase className="text-slate-600" /> },
    { name: 'C', icon: <SiC className="text-blue-700" /> },
  ];

  const otherSkills = ['Electronics', 'Software Troubleshooting', 'Systems Automation', 'Project Management', 'Store Management'];

  return (
    <section id="skills" className="section-shell bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-rule" />
        </div>

        <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 animate-fade-in-up">
          {skills.map((skill) => (
            <div key={skill.name} className="card-surface flex cursor-default flex-col items-center justify-center p-6 transition-all hover:-translate-y-1">
              <div className="mb-3 text-4xl">{skill.icon}</div>
              <span className="text-center font-medium text-slate-700">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 animate-fade-in-up">
          <div className="card-surface bg-brand-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-brand-700">Other Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill) => (
                <span key={skill} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-700 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card-surface bg-slate-100 p-8">
            <h3 className="mb-4 text-xl font-bold text-slate-800">Awards & Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-700">
                <FaAward className="mt-1 text-amber-500" />
                <span>JETS Physics Olympiads - Honors</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <FaCertificate className="mt-1 text-brand-600" />
                <span>Class C Commercial Driver License</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
