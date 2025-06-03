import React from 'react';
import { OptimizationCard } from './OptimizationCard';

export const StickyHeader: React.FC = () => {
  const beforeCode = `/* Before: Using position: fixed */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`;

  const afterCode = `/* After: Using position: sticky */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`;

  const BeforeComponent = () => (
    <div className="p-6 border border-red-200 dark:border-red-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Using position: fixed</h3>
      
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="bg-white dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-6 w-6 bg-blue-100 dark:bg-blue-900 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="flex space-x-2">
            <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
        
        <div className="h-48 bg-gray-50 dark:bg-gray-900 p-3 overflow-y-auto">
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
          Removed from normal document flow
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
          Must manually add padding to content
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
          Can cause layout shifts when scrolling
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
          Potentially triggers repaints
        </p>
      </div>
      
      <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-800 text-red-800 dark:text-red-300">
        <p className="text-sm">Impact: Layout shifts, more paint operations, poorer performance</p>
      </div>
    </div>
  );

  const AfterComponent = () => (
    <div className="p-6 border border-green-200 dark:border-green-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Using position: sticky</h3>
      
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="bg-white dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0">
          <div className="flex items-center space-x-3">
            <div className="h-6 w-6 bg-blue-100 dark:bg-blue-900 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="flex space-x-2">
            <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
        
        <div className="h-48 bg-gray-50 dark:bg-gray-900 p-3 overflow-y-auto">
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
          Remains in document flow until scrolled
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
          No need for manual content padding
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
          No layout shifts when scrolling
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
          More efficient paint operations
        </p>
      </div>
      
      <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-800 dark:text-green-300">
        <p className="text-sm">Benefit: Better scroll performance, improved CLS, cleaner implementation</p>
      </div>
    </div>
  );

  return (
    <OptimizationCard
      id="sticky-header"
      title="Sticky Header Implementation"
      description="Improve scroll performance and layout stability by using position: sticky instead of position: fixed for header elements."
      beforeComponent={<BeforeComponent />}
      afterComponent={<AfterComponent />}
      beforeCode={beforeCode}
      afterCode={afterCode}
    />
  );
};