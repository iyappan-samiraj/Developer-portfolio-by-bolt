import React, { useState } from 'react';
import { Calendar, Clock, Eye, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Full Stack Development in 2024',
      excerpt: 'Exploring emerging trends, technologies, and frameworks that are shaping the landscape of full stack development.',
      content: 'As we progress through 2024, the full stack development landscape continues to evolve rapidly...',
      category: 'fullstack',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 1245,
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'TypeScript', 'Cloud']
    },
    {
      id: 2,
      title: 'Building Scalable AI Applications with Modern Frameworks',
      excerpt: 'A comprehensive guide to developing AI-powered applications that can handle real-world scale and complexity.',
      content: 'Artificial Intelligence is no longer a luxury but a necessity in modern application development...',
      category: 'ai',
      date: '2024-01-08',
      readTime: '12 min read',
      views: 892,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow']
    },
    {
      id: 3,
      title: 'Smart Contract Security: Best Practices and Common Pitfalls',
      excerpt: 'Essential security considerations when developing and deploying smart contracts on blockchain networks.',
      content: 'Security in blockchain development is paramount. One small vulnerability can lead to significant losses...',
      category: 'blockchain',
      date: '2024-01-02',
      readTime: '10 min read',
      views: 673,
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Blockchain', 'Solidity', 'Security', 'DeFi']
    },
    {
      id: 4,
      title: 'Teaching Programming: From Concepts to Career Success',
      excerpt: 'Insights and strategies for effectively teaching programming skills and helping students transition into tech careers.',
      content: 'After teaching over 500 students at Easto Academy, I\'ve learned valuable lessons about effective programming education...',
      category: 'education',
      date: '2023-12-28',
      readTime: '6 min read',
      views: 567,
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Education', 'Career', 'Programming', 'Mentoring']
    },
    {
      id: 5,
      title: 'Optimizing React Applications for Production',
      excerpt: 'Performance optimization techniques and best practices for building lightning-fast React applications.',
      content: 'Performance is crucial for user experience. Here are the techniques I use to optimize React applications...',
      category: 'fullstack',
      date: '2023-12-22',
      readTime: '9 min read',
      views: 1034,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Performance', 'Optimization', 'JavaScript']
    },
    {
      id: 6,
      title: 'The Rise of Decentralized Finance (DeFi)',
      excerpt: 'Understanding DeFi protocols, yield farming, and the future of decentralized financial systems.',
      content: 'Decentralized Finance represents a paradigm shift in how we think about financial services...',
      category: 'blockchain',
      date: '2023-12-15',
      readTime: '11 min read',
      views: 789,
      image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['DeFi', 'Cryptocurrency', 'Blockchain', 'Finance']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'education', label: 'Education' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 via-teal-50/30 to-cyan-50/30 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-cyan-950/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Sharing insights, tutorials, and thoughts on modern web development, AI, blockchain, and education.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105'
                    : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-700/90'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/30 shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(filteredPosts[0].date).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {filteredPosts[0].title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {filteredPosts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {filteredPosts[0].readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {filteredPosts[0].views} views
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredPosts[0].tags.map(tag => (
                      <span
                        key={tag}
                        className="flex items-center px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="group flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${
                    post.category === 'fullstack' ? 'bg-blue-500' :
                    post.category === 'ai' ? 'bg-purple-500' :
                    post.category === 'blockchain' ? 'bg-orange-500' :
                    'bg-green-500'
                  }`}>
                    {post.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.views} views
                  </div>
                  
                  <button className="group flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Latest Articles
            </h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development, AI, blockchain, and education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 bg-white text-emerald-600 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;