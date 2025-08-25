import React from 'react';
import { Code2, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building end-to-end solutions with modern technologies and best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user experiences that users love to interact with.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Ensuring applications are fast, efficient, and scalable for all users.'
    },
    {
      icon: Heart,
      title: 'Passion for Teaching',
      description: 'Sharing knowledge and helping others grow in their development journey.'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-8">
                <span className="text-6xl font-bold text-white">JD</span>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Students</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Tech Stack</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-indigo-600/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-600/30 rounded-full blur-xl animate-pulse delay-1000" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience creating 
                innovative digital solutions. My journey began with a curiosity about how things work, 
                which led me to explore the endless possibilities of code.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                At Easto Academy, I've had the privilege of teaching and mentoring over 500 students, 
                sharing my knowledge in Full Stack Development, AI, and Blockchain technologies. 
                I believe in learning by doing and love to see others grow in their development journey.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or working on side projects that solve real-world problems. I'm always excited about 
                the next challenge and opportunity to create something meaningful.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {features.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="group p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;