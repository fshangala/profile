import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <section id="about" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="section-title">About Me</h2>
          <div className="section-rule" />
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 animate-fade-in-up">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-tr from-brand-100 to-slate-100 shadow-2xl">
              <img src={profileImg} alt="Funduluka Shangala" className="aspect-square w-full object-cover" />
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-slate-800">Full-Stack Developer & Tech Enthusiast</h3>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              I am a Full-Stack Software Developer with a strong background in project management, store management, and systems automation. My passion lies in creating efficient, user-friendly, and innovative solutions that solve real-world problems.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              With experience ranging from web development to IT support, I bring a versatile skill set to every project. I thrive in collaborative environments and am always eager to learn new technologies.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-surface p-4 transition-transform hover:-translate-y-1">
                <span className="mb-1 block text-2xl font-bold text-brand-700">7+</span>
                <span className="text-slate-600">Years Experience</span>
              </div>
              <div className="card-surface p-4 transition-transform hover:-translate-y-1">
                <span className="mb-1 block text-2xl font-bold text-slate-800">10+</span>
                <span className="text-slate-600">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
