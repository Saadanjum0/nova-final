import React from 'react';
import { motion } from 'framer-motion';

const NovaButton = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyles = 'px-8 py-4 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-3';
  
  const variants = {
    primary: 'bg-nova-accent text-black hover:bg-nova-accent-bright border-0 rounded-none',
    secondary: 'bg-transparent text-white border border-white hover:bg-white hover:text-black rounded-none',
    ghost: 'bg-transparent text-nova-accent border border-nova-accent hover:bg-nova-accent hover:text-black rounded-none'
  };

  return (
    <motion.button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default NovaButton;