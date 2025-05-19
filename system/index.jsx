import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App'; // Import the main App from the system/app directory

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />); 