import React from 'react';
import { OptimizationCard } from './OptimizationCard';

export const PictureElement: React.FC = () => {
  const beforeCode = `<!-- Before: Single image source -->
<img src="image-desktop.jpg" alt="Description">`;

  const afterCode = `<!-- After: Responsive images with picture element -->
<picture>
  <!-- Modern format with different sizes -->
  <source
    media="(min-width: 1024px)"
    srcset="large.avif 1280w, medium.avif 640w"
    type="image/avif"
    sizes="(min-width: 1280px) 1280px, 100vw">
  <source
    media="(min-width: 1024px)"
    srcset="large.webp 1280w, medium.webp 640w"
    type="image/webp"
    sizes="(min-width: 1280px) 1280px, 100vw">
  
  <!-- Mobile images -->
  <source
    media="(max-width: 1023px)"
    srcset="mobile.avif"
    type="image/avif">
  <source
    media="(max-width: 1023px)"
    srcset="mobile.webp"
    type="image/webp">
    
  <!-- Fallback -->
  <img src="fallback.jpg" alt="Description">
</picture>`;

  const BeforeComponent = () => (
    <div className="p-6 border border-red-200 dark:border-red-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Single Image Source</h3>
      
      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Desktop (1920×1080)</span>
            <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-0.5 rounded">500 KB</span>
          </div>
          <div className="h-32 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm">Large image loaded on all devices</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="aspect-[9/16] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center p-2 text-center">
              <span className="text-gray-500 dark:text-gray-400 text-xs">Mobile users download the full 500 KB image</span>
            </div>
          </div>
          <div>
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center p-2 text-center">
              <span className="text-gray-500 dark:text-gray-400 text-xs">Tablet users download the full 500 KB image</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
          One size doesn't fit all devices
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
          Mobile users waste bandwidth
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
          No format flexibility
        </p>
      </div>
      
      <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-800 text-red-800 dark:text-red-300">
        <p className="text-sm">Impact: Wasted bandwidth, slower loading on mobile, poor user experience</p>
      </div>
    </div>
  );

  const AfterComponent = () => (
    <div className="p-6 border border-green-200 dark:border-green-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Responsive Picture Element</h3>
      
      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Desktop (1920×1080)</span>
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-0.5 rounded">200 KB (AVIF)</span>
          </div>
          <div className="h-32 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm">Large image with modern format</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="aspect-[9/16] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center p-2 text-center">
              <div className="flex flex-col items-center">
                <span className="text-gray-500 dark:text-gray-400 text-xs mb-1">Mobile-optimized</span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1.5 py-0.5 rounded">80 KB</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center p-2 text-center">
              <div className="flex flex-col items-center">
                <span className="text-gray-500 dark:text-gray-400 text-xs mb-1">Tablet-optimized</span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1.5 py-0.5 rounded">120 KB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
          Right size for each device
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
          Modern formats with fallbacks
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
          Bandwidth efficient
        </p>
      </div>
      
      <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-800 dark:text-green-300">
        <p className="text-sm">Benefit: Optimized for each device, modern formats, better user experience</p>
      </div>
    </div>
  );

  return (
    <OptimizationCard
      id="picture-element"
      title="Responsive Images with Picture Element"
      description="Use the picture element to serve different images based on device capabilities, screen size, and browser support."
      beforeComponent={<BeforeComponent />}
      afterComponent={<AfterComponent />}
      beforeCode={beforeCode}
      afterCode={afterCode}
    />
  );
};