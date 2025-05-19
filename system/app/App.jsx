import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import Router and Link
import AppRoutes from '../routing'; // Import the routing setup
import { GlobalStateProvider } from '../store'; // Import the GlobalStateProvider

function App() {
  return (
    <GlobalStateProvider> {/* Wrap the application with the state provider */}
      <Router> {/* Wrap the application with the router */}
        <div>
          <h1>Main Application Assembly</h1>

          {/* Basic Navigation */}
          <nav>
            <Link to="/counter" style={{ marginRight: '10px' }}>Counter Feature</Link>
            <Link to="/todos">To-Do List Feature</Link>
          </nav>

          <hr />

          {/* Render the routes defined in system/routing/index.js */}
          <AppRoutes />

        </div>
      </Router>
    </GlobalStateProvider> // Close the provider
  );
}

export default App; 