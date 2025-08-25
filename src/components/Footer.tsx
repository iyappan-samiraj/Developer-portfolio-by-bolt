import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:john@example.com', label: 'Email' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  John Doe
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Full Stack Developer, AI Enthusiast, and Blockchain Developer passionate about 
                creating innovative solutions and teaching the next generation of developers.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>San Francisco, CA</p>
                <p>john.doe@example.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest articles and updates delivered to your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-r-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center text-gray-300 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-400 fill-current animate-pulse" />
            <span>by John Doe © {currentYear}. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <button 
              onClick={() => alert('Privacy Policy')}
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => alert('Terms of Service')}
              className="hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-0 w-40 h-40 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl" />
    </footer>
  );
};

export default Footer;