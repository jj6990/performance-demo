import React from 'react';
import { OptimizationCard } from './OptimizationCard';

export const ImageDimensions: React.FC = () => {
  const beforeCode = `<!-- Before: Missing dimensions -->
<img src="product.jpg" alt="Product">`;

  const afterCode = `<!-- After: Explicit width and height -->
<img src="product.jpg" alt="Product" width="400" height="300">

<!-- CSS to maintain aspect ratio while being responsive -->
<style>
img {
  aspect-ratio: attr(width) / attr(height);
  width: 100%;
  height: auto;
}
</style>`;

  const BeforeComponent = () => (
    <div className="p-6 border border-red-200 dark:border-red-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Without Dimensions</h3>
      
      <div className="space-y-8">
        <div className="relative border border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-lg">
          <span className="absolute -top-3 left-4 bg-white dark:bg-gray-800 px-2 text-xs text-gray-500 dark:text-gray-400">
            While loading
          </span>
          
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1 space-y-2">
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            
            <div className="w-full md:w-40 h-6 bg-gray-100 dark:bg-gray-900 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">Image loading...</span>
            </div>
          </div>
        </div>
        
        <div className="relative border border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-lg">
          <span className="absolute -top-3 left-4 bg-white dark:bg-gray-800 px-2 text-xs text-gray-500 dark:text-gray-400">
            After loading
          </span>
          
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1 space-y-2">
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            
            <div className="w-full md:w-40 h-32 bg-gray-200 dark:bg-gray-700 rounded">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-xs">Image</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2 flex items-center">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="ml-2 text-xs text-red-500">Layout shift!</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-800 text-red-800 dark:text-red-300">
        <p className="text-sm">Impact: Layout shifts (CLS) when images load, degraded user experience</p>
      </div>
    </div>
  );

  const AfterComponent = () => (
    <div className="p-6 border border-green-200 dark:border-green-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">With Explicit Dimensions</h3>
      
      <div className="space-y-8">
        <div className="relative border border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-lg">
          <span className="absolute -top-3 left-4 bg-white dark:bg-gray-800 px-2 text-xs text-gray-500 dark:text-gray-400">
            While loading
          </span>
          
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1 space-y-2">
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            
            <div className="w-full md:w-40 h-32 bg-gray-100 dark:bg-gray-900 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">Image loading...</span>
            </div>
          </div>
        </div>
        
        <div className="relative border border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-lg">
          <span className="absolute -top-3 left-4 bg-white dark:bg-gray-800 px-2 text-xs text-gray-500 dark:text-gray-400">
            After loading
          </span>
          
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1 space-y-2">
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            
            <div className="w-full md:w-40 h-32 bg-gray-200 dark:bg-gray-700 rounded">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-xs">Image</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2 flex items-center">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="ml-2 text-xs text-green-500">No layout shift!</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">width</code> and <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">height</code> attributes allow browsers to:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-4 space-y-1">
          <li>Reserve space before the image loads</li>
          <li>Calculate aspect ratio automatically</li>
          <li>Prevent layout shifts when images appear</li>
        </ul>
      </div>
      
      <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-800 dark:text-green-300">
        <p className="text-sm">Benefit: Eliminated layout shifts (improved CLS), better user experience</p>
      </div>
    </div>
  );

  return (
    <OptimizationCard
      id="image-dimensions"
      title="Image Dimension Attributes"
      description="Add width and height attributes to images to prevent layout shifts and improve Cumulative Layout Shift (CLS) scores."
      beforeComponent={<BeforeComponent />}
      afterComponent={<AfterComponent />}
      beforeCode={beforeCode}
      afterCode={afterCode}
    />
  );
};