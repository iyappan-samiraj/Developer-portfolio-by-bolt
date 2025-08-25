import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Blockchain Developer',
    'Tech Educator'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let index = 0;
    
    const typeWriter = setInterval(() => {
      if (index <= currentRole.length) {
        setDisplayText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          const eraser = setInterval(() => {
            if (index > 0) {
              setDisplayText(currentRole.slice(0, index - 1));
              index--;
            } else {
              clearInterval(eraser);
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // In a real app, this would download an actual PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 dark:from-blue-800/30 dark:via-indigo-800/30 dark:to-purple-800/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-600 dark:text-gray-300">JD</span>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/50 to-indigo-600/50 rounded-full blur-lg animate-pulse" />
        </div>

        {/* Main Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            John Doe
          </span>
        </h1>

        <div className="text-2xl md:text-4xl font-semibold mb-8 h-16 flex items-center justify-center">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="ml-1 w-1 h-8 bg-blue-600 animate-pulse" />
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions with cutting-edge technology. 
          Building the future one line of code at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={downloadResume}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </button>
          
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center px-8 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:john@example.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce hover:animate-none transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;