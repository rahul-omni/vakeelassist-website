import React from 'react';

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>
    {children}
  </div>
);

export const CardContent: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);