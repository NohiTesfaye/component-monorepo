import React from 'react';

const Button = ({ onClick, children, style }) => (
  <button onClick={onClick} style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer', ...style }}>
    {children}
  </button>
);

export default Button; 