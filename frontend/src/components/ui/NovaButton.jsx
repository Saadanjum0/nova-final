import React from 'react';
import { motion } from 'framer-motion';

const NovaButton = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyles = 'px-8 py-4 text-base font-medium transition-all duration-300 inline-flex items-center justify-center gap-3 font-inter';
  
  const variants = {
    primary: 'bg-nova-accent text-black hover:bg-nova-accent-bright border-0 rounded-xl',
    secondary: 'bg-transparent text-white border border-white hover:bg-white hover:text-black rounded-xl',
    ghost: 'bg-transparent border-2 border-indigo-500/40 text-white hover:bg-indigo-500/20 hover:border-indigo-400 rounded-xl shadow-lg hover:shadow-indigo-500/30',
    premium: 'bg-indigo-500/10 border-2 border-indigo-500/40 text-white hover:bg-indigo-500/20 hover:border-indigo-400 rounded-xl shadow-lg hover:shadow-indigo-500/30'
  };

  return (
    <motion.button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default NovaButton;