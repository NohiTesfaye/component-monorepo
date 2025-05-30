import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import CounterDetails from './CounterDetails';

function App() {
  return (
    <div>
      <h1>Feature X Application</h1>

      <nav>
        <Link to="/counter">Counter Home</Link>
        <Link to="details" style={{ marginLeft: '10px' }}>Counter Details</Link>
      </nav>

      <Routes>
        <Route index element={<Counter />} />
        <Route path="details" element={<CounterDetails />} />
      </Routes>

    </div>
  );
}

export default App; 