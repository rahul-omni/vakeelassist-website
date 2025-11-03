import React from 'react';

export const Button: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <button className={`bg-blue-500 py-2 px-4 rounded ${className}`}>
    {children}
  </button>
);