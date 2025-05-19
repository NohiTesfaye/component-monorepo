// Application routing setup
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FeatureXApp from '../../packages/feature-x/App';
import FeatureYApp from '../../packages/feature-y/App';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/counter/*" element={<FeatureXApp />} />
      <Route path="/todos" element={<FeatureYApp />} />
      {/* Add a default route */}
      <Route path="/" element={<h2>Welcome to the Monorepo App! Select a feature above.</h2>} />
      {/* Handle 404 - optional */}
      {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
    </Routes>
  );
}

export default AppRoutes; 