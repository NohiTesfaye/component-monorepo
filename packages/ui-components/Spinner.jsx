import React from 'react';

const Spinner = ({ size = 32 }) => (
  <div style={{
    width: size,
    height: size,
    border: '4px solid #eee',
    borderTop: '4px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }} />
);

// Add this style in your global CSS or use a <style> tag in your app
// @keyframes spin { 100% { transform: rotate(360deg); } }

export default Spinner; 