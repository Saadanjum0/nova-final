import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-white/5 border border-white/10 text-orange-200',
    accent: 'bg-orange-500/15 text-orange-300 border border-orange-500/30',
    success: 'bg-yellow-500/15 text-yellow-300 border border-yellow-500/30'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
