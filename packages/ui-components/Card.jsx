import React from 'react';

const Card = ({ children, style }) => (
  <div
    style={{
      border: '1px solid #eee',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      background: '#fff',
      ...style,
    }}
  >
    {children}
  </div>
);

export default Card; 