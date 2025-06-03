import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface OptimizationCardProps {
  id: string;
  title: string;
  description: string;
  beforeComponent: React.ReactNode;
  afterComponent: React.ReactNode;
  beforeCode: string;
  afterCode: string;
}

export const OptimizationCard: React.FC<OptimizationCardProps> = ({
  id,
  title,
  description,
  beforeComponent,
  afterComponent,
  beforeCode,
  afterCode,
}) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [showCode, setShowCode] = useState(false);

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{description}</p>

          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'before'
                  ? 'text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('before')}
            >
              <span className="flex items-center">
                <X size={16} className="mr-1 text-red-500" />
                Before
              </span>
            </button>
            <button
              className={`px-4 py-2 ml-4 text-sm font-medium ${
                activeTab === 'after'
                  ? 'text-green-600 dark:text-green-400 border-b-2 border-green-600 dark:border-green-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('after')}
            >
              <span className="flex items-center">
                <Check size={16} className="mr-1 text-green-500" />
                After
              </span>
            </button>
            <div className="flex-grow"></div>
            <button
              className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? 'Hide Code' : 'View Code'}
            </button>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            {activeTab === 'before' ? beforeComponent : afterComponent}
          </div>

          {showCode && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                {activeTab === 'before' ? 'Unoptimized Code' : 'Optimized Code'}
              </h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{activeTab === 'before' ? beforeCode : afterCode}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};