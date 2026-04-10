import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.25, 0.45, 0.75], rootMargin: '-80px 0px -30% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/75 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="bg-gradient-to-r from-brand-600 to-slate-800 bg-clip-text text-2xl font-bold text-transparent"
          aria-label="Go to home"
        >
          FS
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Desktop Navigation">
          {navLinks.map((link) => {
            const section = link.href.replace('#', '');
            const isActive = activeSection === section;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-visible:ring-offset-white ${
                  isActive ? 'text-brand-700' : 'interactive-link'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-md p-2 text-slate-700 transition-colors hover:text-brand-700 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="space-y-1 px-3 py-3">
          {navLinks.map((link) => {
            const section = link.href.replace('#', '');
            const isActive = activeSection === section;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-brand-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
