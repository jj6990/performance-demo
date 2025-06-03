import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const OptimizedExample: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" crossOrigin="anonymous" fetchpriority="high" />
      </Helmet>
      <header className="sticky top-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm z-50">
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

      {/* Banner with absolute positioning */}
      {showBanner && (
        <div className="absolute top-16 left-0 right-0 bg-blue-600 text-white text-center z-40">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <p>🎉 Welcome to our demo site! Check out our new features.</p>
            <button
              onClick={() => setShowBanner(false)}
              className="transform hover:scale-105 transition-transform"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <main>
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <picture>
            <source
              srcSet="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              type="image/webp"
            />
            <img
              src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Modern office space"
              width="1920"
              height="1080"
              fetchpriority="high"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
          </picture>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Optimized Page Example</h1>
              <p className="text-xl mb-8">This page demonstrates performance best practices and their positive impact on Core Web Vitals.</p>
              <button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium transform hover:scale-105 transition-transform"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8">Image Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              2387793, // Modern office
              3182835, // City buildings
              3182774, // Architecture
              2869215, // Business meeting
              3182812, // Modern interior
              3182750, // Urban landscape
              2869207, // Team collaboration
              3182777, // Design space
              3182814, // Workspace
              2869217, // Conference room
              3182836, // City view
              2887767  // Creative office
            ].map((photoId, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <picture>
                  <source
                    srcSet={`https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`}
                    type="image/webp"
                  />
                  <img
                    src={`https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`}
                    alt={`Sample image ${i + 1}`}
                    loading="lazy"
                    width="800"
                    height="600"
                    className="w-full h-48 object-cover"
                  />
                </picture>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Image {i + 1}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    This image uses modern formats, lazy loading, and proper dimensions.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <script async src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
          <script defer src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
          <script defer src="https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js"></script>
        </div>
      </main>
    </div>
  );
};