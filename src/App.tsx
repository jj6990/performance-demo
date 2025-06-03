import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { FontOptimization } from './components/FontOptimization';
import { ScriptOptimization } from './components/ScriptOptimization';
import { ImageLazyLoading } from './components/ImageLazyLoading';
import { FetchPriority } from './components/FetchPriority';
import { ImageFormats } from './components/ImageFormats';
import { PictureElement } from './components/PictureElement';
import { ImageDimensions } from './components/ImageDimensions';
import { StickyHeader } from './components/StickyHeader';
import { AnimationOptimization } from './components/AnimationOptimization';
import { UnoptimizedExample } from './pages/UnoptimizedExample';
import { OptimizedExample } from './pages/OptimizedExample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HeroSection />
            <div className="container mx-auto px-4 py-8 space-y-24">
              <FontOptimization />
              <ScriptOptimization />
              <ImageLazyLoading />
              <FetchPriority />
              <ImageFormats />
              <PictureElement />
              <ImageDimensions />
              <StickyHeader />
              <AnimationOptimization />
            </div>
          </Layout>
        } />
        <Route path="/unoptimized" element={<UnoptimizedExample />} />
        <Route path="/optimized" element={<OptimizedExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;