import React from 'react';
import { motion } from 'framer-motion';

const NovaCard = ({ children, className = '', hoverable = true }) => {
  const baseStyles = 'bg-[rgba(26,26,28,0.6)] backdrop-blur-2xl border border-white/8 rounded-2xl p-12';
  
  if (hoverable) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        whileHover={{ 
          y: -4,
          borderColor: 'rgba(99, 102, 241, 0.4)',
          boxShadow: '0 20px 60px rgba(99, 102, 241, 0.15)'
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
};

export default NovaCard;