import React from 'react';
import { OptimizationCard } from './OptimizationCard';

export const FetchPriority: React.FC = () => {
  const beforeCode = `<!-- Before: No fetch priority hints -->
<img src="hero.jpg" alt="Hero image">
<img src="logo.svg" alt="Logo">
<img src="banner.jpg" alt="Banner">`;

  const afterCode = `<!-- After: Using fetchpriority attribute -->
<img src="hero.jpg" alt="Hero image" fetchpriority="high">
<img src="logo.svg" alt="Logo" fetchpriority="auto">
<img src="banner.jpg" alt="Banner" fetchpriority="low">`;

  const BeforeComponent = () => (
    <div className="p-6 border border-red-200 dark:border-red-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Without Fetch Priority</h3>
      
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 bg-gray-300 dark:bg-gray-600 rounded-md flex items-center justify-center text-xs">image</div>
            <div className="flex-1">
              <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-2"></div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Browser decides priority</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 bg-gray-300 dark:bg-gray-600 rounded-md flex items-center justify-center text-xs">image</div>
            <div className="flex-1">
              <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-2"></div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Browser decides priority</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          • Browser uses heuristics to determine fetch priority
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          • Critical images may not be prioritized correctly
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          • LCP element might load later than optimal
        </p>
      </div>
      
      <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-800 text-red-800 dark:text-red-300">
        <p className="text-sm">Impact: Suboptimal resource loading order, potential LCP delay</p>
      </div>
    </div>
  );

  const AfterComponent = () => (
    <div className="p-6 border border-green-200 dark:border-green-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">With Fetch Priority</h3>
      
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 bg-green-200 dark:bg-green-800 rounded-md flex items-center justify-center text-xs">image</div>
            <div className="flex-1">
              <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-2"></div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="text-xs text-gray-600 dark:text-gray-400">fetchpriority="high"</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 bg-gray-300 dark:bg-gray-600 rounded-md flex items-center justify-center text-xs">image</div>
            <div className="flex-1">
              <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-2"></div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="text-xs text-gray-600 dark:text-gray-400">fetchpriority="low"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          • Explicitly tell the browser which resources are most important
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          • High priority for LCP images and critical content
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          • Low priority for below-the-fold or less important resources
        </p>
      </div>
      
      <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-800 dark:text-green-300">
        <p className="text-sm">Benefit: Optimized loading sequence, faster LCP, better resource utilization</p>
      </div>
    </div>
  );

  return (
    <OptimizationCard
      id="fetch-priority"
      title="Fetch Priority Optimization"
      description="Use the fetchpriority attribute to help browsers understand which resources are most critical for rendering."
      beforeComponent={<BeforeComponent />}
      afterComponent={<AfterComponent />}
      beforeCode={beforeCode}
      afterCode={afterCode}
    />
  );
};