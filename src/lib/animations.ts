// Animation presets for consistent motion throughout the portfolio

export const springTransition = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 30,
};

export const smoothTransition = {
  duration: 0.5,
  ease: [0.25, 0.4, 0.25, 1] as const,
};

export const bounceTransition = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 15,
};

// Button hover animation
export const buttonHover = {
  scale: 1.02,
  y: -2,
  transition: springTransition,
};

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 },
};

// Card hover animation with 3D tilt
export const cardHover = {
  y: -8,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
};

// Link underline animation
export const linkUnderline = {
  initial: { scaleX: 0, originX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    }
  },
};

// Text reveal animation (character by character)
export const textRevealContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const textRevealChar = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

// Scale and fade
export const scaleFade = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
  exit: { opacity: 0, scale: 0.95 },
};

// Slide from direction
export const slideFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: smoothTransition },
  exit: { opacity: 0, x: -25 },
};

export const slideFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: smoothTransition },
  exit: { opacity: 0, x: 25 },
};

export const slideFromBottom = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: smoothTransition },
  exit: { opacity: 0, y: 25 },
};

// Magnetic button effect helper
export const magneticEffect = (x: number, y: number, strength: number = 0.3) => ({
  x: x * strength,
  y: y * strength,
  transition: {
    type: 'spring',
    stiffness: 350,
    damping: 15,
  },
});

// Glow pulse animation
export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(99, 102, 241, 0.3)',
      '0 0 40px rgba(99, 102, 241, 0.5)',
      '0 0 20px rgba(99, 102, 241, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Shimmer effect for loading
export const shimmer = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// 3D Card tilt values calculator
export const calculateTilt = (
  e: React.MouseEvent<HTMLElement>,
  element: HTMLElement,
  maxTilt: number = 10
) => {
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const tiltX = ((y - centerY) / centerY) * -maxTilt;
  const tiltY = ((x - centerX) / centerX) * maxTilt;

  return { tiltX, tiltY };
};
