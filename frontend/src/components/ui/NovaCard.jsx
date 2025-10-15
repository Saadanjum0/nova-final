import React from 'react';
import { motion } from 'framer-motion';

const NovaCard = ({ children, className = '', hoverable = true }) => {
  const baseStyles = 'glass-card p-12 rounded-none';
  
  if (hoverable) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
};

export default NovaCard;