import React from 'react';
import { ArrowDown, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('fonts');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900">
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-8">
            <Zap size={16} className="mr-1" />
            Web Performance Optimization
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Boost Your Web Vitals<br />
            <span className="text-blue-600 dark:text-blue-400">One Optimization at a Time</span>
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
            Explore before and after examples of common optimization techniques
            to improve page speed, user experience, and Core Web Vitals metrics.
          </p>
          
          <button
            onClick={scrollToContent}
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            See examples
            <ArrowDown size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};