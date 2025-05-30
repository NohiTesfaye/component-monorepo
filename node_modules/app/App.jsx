import React from 'react';
import DemoFeatureX from '../packages/feature-x/DemoFeature';
import DemoFeatureY from '../packages/feature-y/DemoFeature';

const App = () => (
  <div style={{ padding: 32, fontFamily: 'sans-serif', background: '#f7f7f7', minHeight: '200vh' }}>
    <h1>Monorepo Demo</h1>
    <div style={{ display: 'flex', gap: 25 }}>
      <DemoFeatureX />
      <DemoFeatureY />
    </div>
  </div>
);

export default App; 