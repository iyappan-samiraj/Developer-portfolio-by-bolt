import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      type: 'work',
      description: 'Leading development of enterprise applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.',
      achievements: ['Led team of 8 developers', 'Reduced system latency by 40%', 'Implemented CI/CD pipeline']
    },
    {
      year: '2023',
      title: 'Blockchain Development Certification',
      company: 'Ethereum Foundation',
      location: 'Online',
      type: 'education',
      description: 'Specialized certification in smart contract development, DeFi protocols, and Web3 technologies.',
      achievements: ['Deployed 5 smart contracts', 'Built DeFi application', 'Audited smart contracts']
    },
    {
      year: '2022',
      title: 'Full Stack Developer & Instructor',
      company: 'Easto Academy',
      location: 'New York, NY',
      type: 'work',
      description: 'Developing curriculum and teaching Full Stack development to 500+ students while working on client projects.',
      achievements: ['Taught 500+ students', 'Created 15 courses', '95% student satisfaction']
    },
    {
      year: '2021',
      title: 'AI/ML Specialization',
      company: 'Stanford University',
      location: 'Online',
      type: 'education',
      description: 'Completed advanced coursework in machine learning, neural networks, and artificial intelligence applications.',
      achievements: ['Built 10 ML models', 'Published research paper', 'Won hackathon']
    },
    {
      year: '2019',
      title: 'Full Stack Developer',
      company: 'StartupTech',
      location: 'Austin, TX',
      type: 'work',
      description: 'Developed and maintained multiple web applications using React, Express.js, and PostgreSQL.',
      achievements: ['Built 20+ applications', 'Improved performance by 60%', 'Led mobile development']
    },
    {
      year: '2018',
      title: 'Computer Science Degree',
      company: 'University of Texas',
      location: 'Austin, TX',
      type: 'education',
      description: 'Bachelor\'s degree in Computer Science with focus on software engineering and data structures.',
      achievements: ['Magna Cum Laude', 'Dean\'s List', 'CS Department Award']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-indigo-50/30 to-purple-50/30 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A timeline of my professional growth, education, and key achievements in the tech industry.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full transform md:-translate-x-0.5" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item opacity-0 relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 transform md:-translate-x-3 z-10">
                  <div className={`w-full h-full rounded-full border-4 ${
                    item.type === 'work' 
                      ? 'bg-blue-500 border-blue-200 dark:border-blue-800' 
                      : 'bg-green-500 border-green-200 dark:border-green-800'
                  } shadow-lg`}>
                    <div className="absolute inset-1 rounded-full bg-white/30 animate-pulse" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Year Badge */}
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-full mb-4">
                      {item.year}
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                        {item.type === 'work' ? <Award className="w-4 h-4 mr-2" /> : <GraduationCap className="w-4 h-4 mr-2" />}
                        <span className="font-medium">{item.company}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Timeline;