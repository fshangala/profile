import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  return (
    <section id="education" className="section-shell bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="section-title">Education</h2>
          <div className="section-rule" />
        </div>

        <div className="mx-auto max-w-3xl animate-fade-in-up">
          <div className="card-surface flex flex-col items-center p-8 text-center md:flex-row md:items-start md:text-left transition-transform hover:-translate-y-1">
            <div className="mb-4 mr-0 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-100 text-2xl text-brand-700 md:mb-0 md:mr-6">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">Kafue Boys Secondary School</h3>
              <p className="mb-2 font-medium text-brand-700">Grade 12 Certificate, High School/Secondary Diplomas and Certificates</p>
              <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">2016 - 2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
