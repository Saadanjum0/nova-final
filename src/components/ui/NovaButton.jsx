import React from 'react';
import { motion } from 'framer-motion';
import { Button as MovingBorderButton } from './moving-border';

const NovaButton = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyles = 'px-8 py-4 text-base font-medium transition-all duration-300 inline-flex items-center justify-center gap-3 font-inter';
  
  const variants = {
    primary: 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black hover:from-orange-600 hover:to-yellow-600 rounded-full',
    secondary: 'bg-transparent text-orange-300 border border-orange-300/30 hover:bg-orange-500/10 hover:border-orange-300/50 rounded-xl',
    ghost: 'bg-transparent border-2 border-orange-400/40 text-white hover:bg-orange-500/20 hover:border-orange-400 rounded-xl',
    premium: 'bg-orange-500/10 border-2 border-orange-500/40 text-white hover:bg-orange-500/20 hover:border-orange-400 rounded-xl'
  };

  // Use moving border for primary variant
  if (variant === 'primary') {
    return (
      <MovingBorderButton
        as="button"
        type={type}
        onClick={onClick}
        borderRadius="2rem"
        duration={3000}
        containerClassName={`h-auto ${className}`}
        borderClassName="bg-[radial-gradient(var(--orange-500)_40%,transparent_60%)]"
        className="bg-black/90 border-orange-400/20 backdrop-blur-xl text-white px-8 py-4 font-semibold text-lg"
      >
        <span className="bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
          {children}
        </span>
      </MovingBorderButton>
    );
  }

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
