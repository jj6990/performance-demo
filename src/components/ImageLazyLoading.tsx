import React from 'react';
import { OptimizationCard } from './OptimizationCard';

export const ImageLazyLoading: React.FC = () => {
  const beforeCode = `<!-- Before: Eager loading all images -->
<img src="hero-image.jpg" alt="Hero image">
<img src="product1.jpg" alt="Product 1">
<img src="product2.jpg" alt="Product 2">
<img src="product3.jpg" alt="Product 3">
<img src="footer-image.jpg" alt="Footer image">`;

  const afterCode = `<!-- After: Strategic loading with eager and lazy attributes -->
<!-- Critical above-the-fold image - eagerly loaded -->
<img src="hero-image.jpg" alt="Hero image" loading="eager">

<!-- Preload critical images -->
<link rel="preload" as="image" href="hero-image.jpg">

<!-- Below-the-fold images - lazy loaded -->
<img src="product1.jpg" alt="Product 1" loading="lazy">
<img src="product2.jpg" alt="Product 2" loading="lazy">
<img src="product3.jpg" alt="Product 3" loading="lazy">
<img src="footer-image.jpg" alt="Footer image" loading="lazy">`;

  const BeforeComponent = () => (
    <div className="p-6 border border-red-200 dark:border-red-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Eager Loading All Images</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 flex items-center justify-center rounded">
            <span className="text-blue-800 dark:text-blue-200 text-xs font-medium">Hero</span>
          </div>
          <div className="flex-1">
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900 flex items-center justify-center rounded">
            <span className="text-red-800 dark:text-red-200 text-xs font-medium">1</span>
          </div>
          <div className="flex-1">
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900 flex items-center justify-center rounded">
            <span className="text-red-800 dark:text-red-200 text-xs font-medium">2</span>
          </div>
          <div className="flex-1">
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <span className="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>
        <span>Visible content</span>
        <span className="inline-block w-3 h-3 bg-red-400 rounded-full ml-4"></span>
        <span>Off-screen content</span>
      </div>
      
      <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-800 text-red-800 dark:text-red-300">
        <p className="text-sm">Impact: All images load at once, consuming bandwidth and delaying LCP</p>
      </div>
    </div>
  );

  const AfterComponent = () => (
    <div className="p-6 border border-green-200 dark:border-green-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Strategic Lazy Loading</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 flex items-center justify-center rounded">
            <span className="text-green-800 dark:text-green-200 text-xs font-medium">Hero</span>
          </div>
          <div className="flex-1">
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
            eager + preload
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 flex items-center justify-center rounded">
            <span className="text-green-800 dark:text-green-200 text-xs font-medium">1</span>
          </div>
          <div className="flex-1">
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">
            lazy
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 flex items-center justify-center rounded">
            <span className="text-green-800 dark:text-green-200 text-xs font-medium">2</span>
          </div>
          <div className="flex-1">
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">
            lazy
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-800 dark:text-green-300">
        <p className="text-sm">Benefit: Prioritizes critical content, reduces initial page weight, improves LCP</p>
      </div>
    </div>
  );

  return (
    <OptimizationCard
      id="lazy-loading"
      title="Image Loading Strategy"
      description="Optimize resource loading by eagerly loading critical above-the-fold images while lazy-loading images that appear below the fold."
      beforeComponent={<BeforeComponent />}
      afterComponent={<AfterComponent />}
      beforeCode={beforeCode}
      afterCode={afterCode}
    />
  );
};