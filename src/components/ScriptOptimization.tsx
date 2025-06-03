import React from 'react';
import { OptimizationCard } from './OptimizationCard';

export const ScriptOptimization: React.FC = () => {
  const beforeCode = `<!-- Before: Regular script loading -->
<script src="analytics.js"></script>
<script src="thirdparty.js"></script>`;

  const afterCode = `<!-- After: Using async for non-critical scripts -->
<script async src="analytics.js"></script>

<!-- After: Using defer for scripts that depend on DOM -->
<script defer src="thirdparty.js"></script>`;

  const BeforeComponent = () => (
    <div className="p-6 border border-red-200 dark:border-red-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Without async/defer</h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="rounded-lg bg-gray-100 dark:bg-gray-700 p-4 h-32 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full">
                <div className="h-6 w-full bg-red-200 dark:bg-red-800 mb-2 animate-pulse rounded"></div>
                <div className="h-4 w-3/4 bg-red-200 dark:bg-red-800 animate-pulse rounded"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gray-800/60 dark:bg-black/60 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <p className="font-bold">Parser Blocked</p>
                <p className="text-sm mt-1">HTML parsing stops while scripts download and execute</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-800 text-red-800 dark:text-red-300">
            <p className="text-sm">Impact: Increased First Contentful Paint (FCP) and Largest Contentful Paint (LCP)</p>
          </div>
        </div>
      </div>
    </div>
  );

  const AfterComponent = () => (
    <div className="p-6 border border-green-200 dark:border-green-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">With async/defer</h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="rounded-lg bg-gray-100 dark:bg-gray-700 p-4 relative">
              <p className="font-medium mb-1">async</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Downloads in parallel with HTML parsing</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Executes as soon as downloaded (may interrupt parsing)</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Best for: Analytics, ads, independent scripts</p>
            </div>
            
            <div className="rounded-lg bg-gray-100 dark:bg-gray-700 p-4 relative">
              <p className="font-medium mb-1">defer</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Downloads in parallel with HTML parsing</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Executes after parsing completes, before DOMContentLoaded</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Best for: Scripts needing full DOM, maintaining execution order</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-800 dark:text-green-300">
            <p className="text-sm">Benefit: Improved FCP and LCP by allowing HTML parsing to continue</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <OptimizationCard
      id="scripts"
      title="Script Loading Optimization"
      description="Improve page load performance by using async and defer attributes to optimize JavaScript loading and execution."
      beforeComponent={<BeforeComponent />}
      afterComponent={<AfterComponent />}
      beforeCode={beforeCode}
      afterCode={afterCode}
    />
  );
};