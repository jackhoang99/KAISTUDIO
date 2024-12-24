import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.img 
      src="https://static.wixstatic.com/media/8c7d69_7463f368689b435fa2f5c72e0a536771~mv2.png/v1/fill/w_122,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/KS%20MARK-03.png"
      alt="KAI Logo"
      className="w-24 h-24 md:w-32 md:h-32"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    />
  );
};

export default Logo;