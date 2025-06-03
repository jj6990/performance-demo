import React from 'react';
import { OptimizationCard } from './OptimizationCard';

export const ImageFormats: React.FC = () => {
  const beforeCode = `<!-- Before: Using legacy image format -->
<img src="image.jpg" alt="Description">`;

  const afterCode = `<!-- After: Using modern image formats -->
<img src="image.webp" alt="Description">

<!-- Or even better, with AVIF and fallbacks -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>`;

  const BeforeComponent = () => (
    <div className="p-6 border border-red-200 dark:border-red-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Legacy Image Formats</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">forest.jpg</span>
              <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-0.5 rounded">240 KB</span>
            </div>
            <div className="h-36 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">JPEG Image</span>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
              Larger file size
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
              No transparency in JPEG
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
              Limited compression options
            </p>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">icon.png</span>
              <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-0.5 rounded">120 KB</span>
            </div>
            <div className="h-36 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">PNG Image</span>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-yellow-500 rounded-full mr-2"></span>
              Supports transparency
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
              Often larger than modern formats
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
              Not optimized for web
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-800 text-red-800 dark:text-red-300">
        <p className="text-sm">Impact: Larger page weight, slower load times, higher bandwidth usage</p>
      </div>
    </div>
  );

  const AfterComponent = () => (
    <div className="p-6 border border-green-200 dark:border-green-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Modern Image Formats</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">forest.webp</span>
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-0.5 rounded">90 KB</span>
            </div>
            <div className="h-36 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">WebP Image</span>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
              30% smaller than JPEG
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
              Supports transparency
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
              Widespread browser support
            </p>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">forest.avif</span>
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-0.5 rounded">60 KB</span>
            </div>
            <div className="h-36 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">AVIF Image</span>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
              50% smaller than JPEG
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
              Better quality at smaller sizes
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <span className="w-3 h-3 inline-block bg-yellow-500 rounded-full mr-2"></span>
              Growing browser support
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-800 dark:text-green-300">
        <p className="text-sm">Benefit: Significantly reduced page weight, faster loading, better quality-to-size ratio</p>
      </div>
    </div>
  );

  return (
    <OptimizationCard
      id="image-formats"
      title="Modern Image Formats"
      description="Use modern image formats like WebP and AVIF to dramatically reduce image file sizes while maintaining quality."
      beforeComponent={<BeforeComponent />}
      afterComponent={<AfterComponent />}
      beforeCode={beforeCode}
      afterCode={afterCode}
    />
  );
};