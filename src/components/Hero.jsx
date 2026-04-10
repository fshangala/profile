import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowRight, FaFileDownload } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/fshangala', icon: FaGithub, hover: 'hover:text-slate-900' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fshangala', icon: FaLinkedin, hover: 'hover:text-brand-700' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01ca44d8a44361a13d?mp_source=share', icon: SiUpwork, hover: 'hover:text-emerald-600' },
  { label: 'WhatsApp', href: 'https://wa.me/260974836436', icon: FaWhatsapp, hover: 'hover:text-emerald-600' },
  { label: 'Email', href: 'mailto:fshangala@gmail.com', icon: FaEnvelope, hover: 'hover:text-rose-600' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-brand-50 to-slate-200"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/30 mix-blend-multiply blur-3xl animate-blob" />
        <div className="animation-delay-2000 absolute -left-6 top-12 h-80 w-80 rounded-full bg-sky-400/20 mix-blend-multiply blur-3xl animate-blob" />
        <div className="animation-delay-4000 absolute bottom-0 left-20 h-80 w-80 rounded-full bg-indigo-300/20 mix-blend-multiply blur-3xl animate-blob" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 text-center sm:px-6 lg:px-8">
        <div>
          <p className="mb-4 text-lg font-semibold text-brand-700 md:text-xl">Hello, I'm</p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">Funduluka Shangala</h1>
          <h2 className="mb-4 text-2xl font-semibold text-slate-700 md:text-4xl">Software Developer</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-700">
            I design and ship performant web applications, automation systems, and developer-focused products that solve practical business problems.
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-600">Based in Lusaka, Zambia.</p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#portfolio" className="btn-primary">
              View Projects <FaArrowRight />
            </a>
            <a href="#contact" className="btn-secondary">
              Download CV <FaFileDownload />
            </a>
          </div>
          <p className="mb-10 text-sm text-slate-500">CV download link will be added once the latest PDF is finalized.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`rounded-full border border-slate-200 bg-white/80 p-3 text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 ${link.hover}`}
                  aria-label={link.label}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
