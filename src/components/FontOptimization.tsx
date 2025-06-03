import React from 'react';
import { OptimizationCard } from './OptimizationCard';

export const FontOptimization: React.FC = () => {
  const beforeCode = `<!-- Before: No preconnect or preload -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`;

  const afterCode = `<!-- After: Using preconnect to establish early connection -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

<!-- Alternative: Self-hosting fonts -->
<!-- 
<style>
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/roboto-v29-latin-regular.woff2') format('woff2');
  }
</style>
-->`;

  const BeforeComponent = () => (
    <div className="p-6 border border-red-200 dark:border-red-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Without Preconnect</h3>
      <div className="space-y-2">
        <p className="text-gray-700 dark:text-gray-300">
          • Browser needs to discover font requirements during HTML parsing
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          • Multiple round trips needed to establish connection and download fonts
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          • Font loading blocks rendering or causes layout shifts
        </p>
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-800 text-red-800 dark:text-red-300">
          <p className="text-sm">Potential impact: Increased LCP and CLS metrics</p>
        </div>
      </div>
    </div>
  );

  const AfterComponent = () => (
    <div className="p-6 border border-green-200 dark:border-green-900 rounded-lg">
      <h3 className="text-xl font-medium mb-4">With Preconnect</h3>
      <div className="space-y-2">
        <p className="text-gray-700 dark:text-gray-300">
          • Early connection establishment to font provider
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          • DNS, TCP, and TLS handshakes happen in parallel with HTML parsing
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          • Optional: Self-host fonts to eliminate third-party dependencies
        </p>
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-800 dark:text-green-300">
          <p className="text-sm">Benefit: Faster font loading, reduced LCP, minimized CLS</p>
        </div>
      </div>
    </div>
  );

  return (
    <OptimizationCard
      id="fonts"
      title="Font Optimization"
      description="Optimize font loading with preconnect hints and consider self-hosting critical fonts to improve performance."
      beforeComponent={<BeforeComponent />}
      afterComponent={<AfterComponent />}
      beforeCode={beforeCode}
      afterCode={afterCode}
    />
  );
};