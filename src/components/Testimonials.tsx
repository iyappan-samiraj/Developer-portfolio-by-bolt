import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      company: 'TechCorp Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'John is an exceptional instructor and developer. His full-stack course at Easto Academy completely transformed my understanding of web development. The way he explains complex concepts with real-world examples is outstanding.',
      category: 'Student'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'We hired John for a critical blockchain project, and he delivered beyond expectations. His expertise in smart contracts and DeFi protocols helped us launch our platform ahead of schedule. Highly recommended!',
      category: 'Client'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Full Stack Developer',
      company: 'Digital Solutions',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'John\'s mentorship during my career transition was invaluable. His AI and machine learning course gave me the skills I needed to land my dream job. He\'s patient, knowledgeable, and truly cares about his students.',
      category: 'Student'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Product Manager',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Working with John on our e-commerce platform was a fantastic experience. His technical expertise, combined with his ability to understand business requirements, resulted in a product that exceeded our expectations.',
      category: 'Client'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Software Engineer',
      company: 'CloudTech',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The blockchain development course was exactly what I needed to advance my career. John\'s practical approach and hands-on projects made learning Solidity and Web3 technologies engaging and effective.',
      category: 'Student'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      role: 'Engineering Manager',
      company: 'TechGlobal',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'John\'s ability to architect scalable solutions is remarkable. He helped us rebuild our legacy system using modern technologies, improving performance by 60% and reducing maintenance costs significantly.',
      category: 'Client'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-orange-50/30 to-red-50/30 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-red-950/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Testimonials from students, clients, and colleagues who have worked with me.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 dark:border-gray-700/30 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-8 text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 italic">
                "{current.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-800 dark:text-white">
                    {current.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {current.role} at {current.company}
                  </div>
                  <div className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                    {current.category}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4">
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                currentIndex === index ? 'ring-2 ring-amber-500' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                />
                <div className="ml-3">
                  <div className="font-semibold text-gray-800 dark:text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {testimonial.category}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Happy Students</div>
          </div>
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">4.9/5</div>
            <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
          </div>
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">95%</div>
            <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;