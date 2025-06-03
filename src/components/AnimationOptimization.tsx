import React, { useState } from 'react';
import { OptimizationCard } from './OptimizationCard';

export const AnimationOptimization: React.FC = () => {
  const [isPositionAnimating, setIsPositionAnimating] = useState(false);
  const [isTransformAnimating, setIsTransformAnimating] = useState(false);

  const beforeCode = `/* Before: Using top/left properties for animation */
@keyframes move {
  0% {
    top: 0;
    left: 0;
  }
  100% {
    top: 100px;
    left: 100px;
  }
}

.box {
  position: relative;
  animation: move 2s infinite alternate;
}`;

  const afterCode = `/* After: Using transform for animation */
@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100px, 100px);
  }
}

.box {
  position: relative;
  animation: move 2s infinite alternate;
}`;

  const BeforeComponent = () => {
    return (
      <div className="p-6 border border-red-200 dark:border-red-900 rounded-lg">
        <h3 className="text-xl font-medium mb-4">Using position properties</h3>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg h-64 relative overflow-hidden">
          <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
            <button
              onClick={() => setIsPositionAnimating(!isPositionAnimating)}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
            >
              {isPositionAnimating ? 'Stop' : 'Play'}
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400">Click to {isPositionAnimating ? 'stop' : 'play'} animation</span>
          </div>
          
          <div 
            className={`h-16 w-16 bg-red-500 rounded-lg flex items-center justify-center text-white relative ${
              isPositionAnimating ? 'animate-position-change' : ''
            }`}
            style={{
              top: isPositionAnimating ? '0px' : '0px',
              left: isPositionAnimating ? '0px' : '0px'
            }}
          >
            <span className="text-xs">top/left</span>
          </div>
          
          <div className="absolute bottom-4 left-4 p-2 bg-red-50 dark:bg-red-900/30 rounded text-xs text-red-800 dark:text-red-300 max-w-xs">
            Using top/left properties triggers layout recalculations (reflow) on every frame
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
            <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
            Triggers reflow (layout recalculation)
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
            <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
            Affects surrounding elements
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
            <span className="w-3 h-3 inline-block bg-red-500 rounded-full mr-2"></span>
            Can't be GPU-accelerated
          </p>
        </div>
        
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-800 text-red-800 dark:text-red-300">
          <p className="text-sm">Impact: Jank, high CPU usage, poor performance on mobile</p>
        </div>
      </div>
    );
  };

  const AfterComponent = () => {
    return (
      <div className="p-6 border border-green-200 dark:border-green-900 rounded-lg">
        <h3 className="text-xl font-medium mb-4">Using transform</h3>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg h-64 relative overflow-hidden">
          <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
            <button
              onClick={() => setIsTransformAnimating(!isTransformAnimating)}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
            >
              {isTransformAnimating ? 'Stop' : 'Play'}
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400">Click to {isTransformAnimating ? 'stop' : 'play'} animation</span>
          </div>
          
          <div 
            className={`h-16 w-16 bg-green-500 rounded-lg flex items-center justify-center text-white ${
              isTransformAnimating ? 'animate-transform-change' : ''
            }`}
          >
            <span className="text-xs">transform</span>
          </div>
          
          <div className="absolute bottom-4 left-4 p-2 bg-green-50 dark:bg-green-900/30 rounded text-xs text-green-800 dark:text-green-300 max-w-xs">
            Using transform creates a separate composite layer that can be GPU-accelerated
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
            <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
            No reflow (layout recalculation)
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
            <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
            Creates composite layer
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
            <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>
            GPU-accelerated for smoother animation
          </p>
        </div>
        
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-800 dark:text-green-300">
          <p className="text-sm">Benefit: Smooth animations, lower CPU usage, better battery life</p>
        </div>
      </div>
    );
  };

  return (
    <OptimizationCard
      id="animations"
      title="Animation Performance Optimization"
      description="Improve animation performance by using transform instead of position properties for smoother, more efficient animations."
      beforeComponent={<BeforeComponent />}
      afterComponent={<AfterComponent />}
      beforeCode={beforeCode}
      afterCode={afterCode}
    />
  );
};