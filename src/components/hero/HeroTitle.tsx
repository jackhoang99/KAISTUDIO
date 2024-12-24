import React from 'react';
import { motion } from 'framer-motion';

const HeroTitle = () => {
  return (
    <div className="text-center">
      <motion.h1 
        className="text-6xl md:text-8xl font-display mb-4 tracking-wider"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        COMING SOON
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl font-light tracking-widest uppercase"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        Sunnyvale, California
      </motion.p>
    </div>
  );
};

export default HeroTitle;