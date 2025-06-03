import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import heroImage from '../assets/images/hero-image-optimized.avif';
import image1 from '../assets/images/card-1.avif';
import image2 from '../assets/images/card-2.avif';
import image3 from '../assets/images/card-3.avif';


export const OptimizedExample: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
              srcSet={heroImage}
              media="(min-width: 1024px)"
              type="image/webp"
            />
            <img
              src={heroImage}
              alt="Hero"
              width="1176"
              height="400"
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
              image1, // Modern office
              image2, // City buildings
              image3, // Architecture
            ].map((photoId, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <picture>
                  <source
                    srcSet={photoId}
                    type="image/webp"
                  />
                  <img
                    src={photoId}
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