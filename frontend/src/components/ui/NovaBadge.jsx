import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-white/5 border border-white/10 text-nova-text-secondary',
    accent: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30',
    success: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;