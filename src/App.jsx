import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';
import NotFound from './components/NotFound/NotFound';

import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import DSA from './components/DSA/DSA';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const { theme, toggle, isDark } = useDarkMode();

  // Smooth scroll for all anchor hash links
  useEffect(() => {
    const handleClick = e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <Routes>
      {/* ── Main portfolio page ── */}
      <Route
        path="/"
        element={
          <>
            <ScrollProgress />
            <Navbar isDark={isDark} toggleTheme={toggle} />
            <main>
              <Hero />
              <About />
              <Education />
              <Skills />
              <Projects />
              <DSA />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </>
        }
      />

      {/* ── 404 catch-all ── */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

