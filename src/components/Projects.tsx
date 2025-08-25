import React, { useState } from 'react';
import { Github, ExternalLink, Eye, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      stars: 124,
      forks: 32
    },
    {
      id: 2,
      title: 'AI Image Generator',
      description: 'An AI-powered image generation tool using OpenAI\'s DALL-E API. Users can create custom images from text descriptions with various styling options.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'OpenAI API', 'PostgreSQL', 'TypeScript'],
      category: 'ai',
      github: 'https://github.com',
      live: 'https://example.com',
      stars: 89,
      forks: 21
    },
    {
      id: 3,
      title: 'DeFi Trading Bot',
      description: 'Automated cryptocurrency trading bot built on Ethereum blockchain. Features smart contract integration, yield farming, and risk management.',
      image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Solidity', 'Web3.js', 'Python', 'Ethereum'],
      category: 'blockchain',
      github: 'https://github.com',
      live: 'https://example.com',
      stars: 156,
      forks: 45
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'Comprehensive LMS for Easto Academy with course management, video streaming, progress tracking, and certification features.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'AWS S3'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      stars: 67,
      forks: 18
    },
    {
      id: 5,
      title: 'Smart Contract Auditor',
      description: 'AI-powered tool for auditing smart contracts, detecting vulnerabilities, and providing security recommendations.',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Solidity', 'Flask'],
      category: 'ai',
      github: 'https://github.com',
      live: 'https://example.com',
      stars: 203,
      forks: 67
    },
    {
      id: 6,
      title: 'NFT Marketplace',
      description: 'Decentralized marketplace for buying, selling, and trading NFTs with MetaMask integration and IPFS storage.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Solidity', 'IPFS', 'MetaMask'],
      category: 'blockchain',
      github: 'https://github.com',
      live: 'https://example.com',
      stars: 178,
      forks: 52
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'blockchain', label: 'Blockchain' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-pink-50/30 to-orange-50/30 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-orange-950/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            A showcase of my recent work spanning full-stack development, AI/ML, and blockchain technologies.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-700/90'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-indigo-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;