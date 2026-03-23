import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}