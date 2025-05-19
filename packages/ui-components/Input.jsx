import React from 'react';

const Input = ({ value, onChange, placeholder, type = 'text', style }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      ...style,
    }}
  />
);

export default Input; 