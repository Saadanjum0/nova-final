import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MorphingText = ({ words = [], className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MorphingText;