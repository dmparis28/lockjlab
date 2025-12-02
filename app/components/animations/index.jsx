// Filename: app/components/animations/index.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Fade in from bottom animation wrapper
export const FadeInUp = ({ children, delay = 0, duration = 0.5, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Fade in animation wrapper
export const FadeIn = ({ children, delay = 0, duration = 0.5, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale in animation wrapper
export const ScaleIn = ({ children, delay = 0, duration = 0.5, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Slide in from left
export const SlideInLeft = ({ children, delay = 0, duration = 0.5, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Slide in from right
export const SlideInRight = ({ children, delay = 0, duration = 0.5, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animation container
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered child item
export const StaggerItem = ({ children, className = '' }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// Hover scale effect
export const HoverScale = ({ children, scale = 1.05, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animated counter
export const AnimatedCounter = ({ value, duration = 2, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      className={className}
    >
      {inView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}
        </motion.span>
      )}
    </motion.span>
  );
};

// Page transition wrapper
export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic button effect
export const MagneticButton = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};
