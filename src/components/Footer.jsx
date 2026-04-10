import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 pb-10 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 md:grid-cols-2 animate-fade-in-up">
          <div>
            <h2 className="mb-6 bg-gradient-to-r from-brand-500 to-sky-300 bg-clip-text text-3xl font-bold text-transparent">Let's Connect</h2>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-slate-300">
              I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you.
            </p>

            <div className="space-y-4">
              <a href="mailto:fshangala@gmail.com" className="group flex items-center text-slate-300 transition-colors hover:text-white">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors group-hover:bg-brand-600">
                  <FaEnvelope />
                </div>
                <span>fshangala@gmail.com</span>
              </a>
              <a
                href="https://wa.me/260974836436"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-slate-300 transition-colors hover:text-white"
              >
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors group-hover:bg-emerald-500">
                  <FaWhatsapp />
                </div>
                <span>+260 974 836 436</span>
              </a>
              <div className="flex items-center text-slate-300">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
                  <FaMapMarkerAlt />
                </div>
                <span>Lusaka, Zambia</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:items-end">
            <div className="mb-8 flex space-x-6">
              <a
                href="https://github.com/fshangala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-all hover:scale-105 hover:bg-slate-700 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/fshangala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-all hover:scale-105 hover:bg-brand-700 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01ca44d8a44361a13d?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-all hover:scale-105 hover:bg-emerald-600 hover:text-white"
                aria-label="Upwork"
              >
                <SiUpwork size={24} />
              </a>
            </div>
            <p className="text-center text-slate-400 md:text-right">"Innovation is the ability to see change as an opportunity, not a threat."</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} Funduluka Shangala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
