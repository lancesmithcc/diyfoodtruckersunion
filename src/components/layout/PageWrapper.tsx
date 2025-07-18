import React from 'react';
import { motion } from 'framer-motion';
import { slideFromRight } from '../../utils/pageTransitions';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={slideFromRight.initial}
      animate={slideFromRight.animate}
      exit={slideFromRight.exit}
      transition={slideFromRight.transition}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;