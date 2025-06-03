import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

export const UnoptimizedExample: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft size={20} />
              <span>Back to Demo</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Banner with relative positioning */}
      {showBanner && (
        <div className="relative bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <p>🎉 Welcome to our demo site! Check out our new features.</p>
            <button onClick={() => setShowBanner(false)}>
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <main>
        {/* Unoptimized Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <img 
            src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Unoptimized Page Example</h1>
              <p className="text-xl mb-8">This page demonstrates common performance anti-patterns and their impact on user experience and Web Vitals.</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8">Image Gallery</h2>
          
          {/* Large images without optimization */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              325185, // Office
              3182835, // Buildings
              3182774, // Architecture
              2869215, // Meeting
              3182812, // Interior
              3182750, // Urban
              2869207, // Team
              3182777, // Design
              3182814, // Work
              2869217, // Conference
              3182836, // City
              2887767  // Office
            ].map((photoId, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg`}
                  alt={`Sample image ${i + 1}`}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Image {i + 1}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    This image is loaded without any optimization techniques.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scripts loaded without optimization */}
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js"></script>
        </div>
      </main>
    </div>
  );
};