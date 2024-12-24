import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1"/>
    <motion.path
      d="M8 8L16 16M16 16H8M16 16V8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={false}
    />
  </svg>
);

const InstructorButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button 
      onClick={() => navigate('/about')}
      className="group flex items-center justify-between w-full max-w-4xl border border-black rounded-full px-8 py-6 hover:bg-black hover:text-white transition-all duration-300"
      whileHover="hover"
      initial="initial"
    >
      <span className="text-xl tracking-wide">Become an Instructor</span>
      <motion.div
        variants={{
          initial: { rotate: 45 },
          hover: { rotate: -45 }
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowIcon />
      </motion.div>
    </motion.button>
  );
};

export default InstructorButton;