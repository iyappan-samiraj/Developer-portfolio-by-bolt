import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cloud, Smartphone, Palette, Brain } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 82 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 88 }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'TensorFlow', level: 78 },
        { name: 'PyTorch', level: 72 },
        { name: 'OpenAI API', level: 85 },
        { name: 'Computer Vision', level: 70 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Blockchain',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Solidity', level: 88 },
        { name: 'Web3.js', level: 85 },
        { name: 'Smart Contracts', level: 90 },
        { name: 'DeFi', level: 80 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 90 },
        { name: 'UI/UX Design', level: 78 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-purple-50/30 to-pink-50/30 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 0.1 + 0.5}s`
                          }}
                        >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Background Element */}
                <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${category.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Professional Highlights
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Constantly learning and adapting to new technologies. I believe in building scalable, 
                maintainable solutions that solve real-world problems. My diverse skill set allows me 
                to work across the entire technology stack, from user interfaces to smart contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;