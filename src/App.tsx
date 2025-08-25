import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 transition-all duration-500">
          <ParticleBackground />
          <Header />
          <Hero />
          <About />
          <Timeline />
          <Projects />
          <Skills />
          <Testimonials />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;