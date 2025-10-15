import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-nova-glass-bg border border-nova-glass-border text-nova-text-secondary',
    accent: 'bg-nova-accent/10 border border-nova-accent text-nova-accent',
    success: 'bg-nova-success/10 border border-nova-success text-nova-success'
  };

  return (
    <span className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;