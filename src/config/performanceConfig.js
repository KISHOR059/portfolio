/**
 * Performance configuration for high refresh rate displays (120fps+)
 * Optimizes animation timing and GPU acceleration
 */

// Animation presets optimized for 120fps displays
export const animationPresets = {
  // Ultra-fast animations for 120fps
  ultraFast: {
    duration: 0.3,
    ease: "easeOut",
  },
  // Fast animations
  fast: {
    duration: 0.4,
    ease: "easeOut",
  },
  // Standard animations
  standard: {
    duration: 0.5,
    ease: "easeOut",
  },
  // Smooth animations
  smooth: {
    duration: 0.6,
    ease: "easeOut",
  },
  // Long animations for subtle effects
  long: {
    duration: 0.8,
    ease: "easeOut",
  },
};

// Viewport configuration optimized for performance
export const viewportConfig = {
  // Trigger animation early for better UX
  tight: { once: true, amount: 0.2 },
  // Standard trigger point
  standard: { once: true, amount: 0.3 },
  // Late trigger for large sections
  loose: { once: true, amount: 0.1 },
};

// Stagger configuration for multiple element animations
export const staggerConfig = {
  // Tight stagger for quick animations
  tight: 0.05,
  // Standard stagger
  standard: 0.1,
  // Loose stagger for slower, more dramatic effect
  loose: 0.15,
};

// GPU-optimized transform configurations
export const gpuTransforms = {
  // For simple opacity changes
  fadeOnly: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  // For vertical movement with opacity
  slideUpFade: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  // For subtle entrance
  subtleSlide: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  },
  // For larger entrance animations
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
};

// Mobile-specific optimizations
export const mobileOptimizations = {
  // Detect if on high refresh rate device
  isHighRefreshRate: () => {
    // Check screen.refreshRate property if available
    if (typeof window !== 'undefined' && window.screen.refreshRate) {
      return window.screen.refreshRate >= 90;
    }
    return false;
  },

  // Get optimal animation duration based on device
  getAnimationDuration: (baseMs = 500) => {
    if (typeof window === 'undefined') return baseMs;
    
    const isMobile = window.innerWidth < 768;
    const isHighRefresh = mobileOptimizations.isHighRefreshRate();
    
    if (isMobile) {
      // Shorter animations on mobile for better feel
      return isHighRefresh ? baseMs * 0.6 : baseMs * 0.7;
    }
    return baseMs;
  },

  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Get scroll event throttle based on device
  getScrollThrottle: () => {
    if (typeof window === 'undefined') return 50;
    
    const isMobile = window.innerWidth < 768;
    const isHighRefresh = mobileOptimizations.isHighRefreshRate();
    
    if (isMobile && isHighRefresh) {
      return 8; // Allow frequent updates on 120fps mobile
    }
    if (isMobile) {
      return 16; // Standard mobile optimization (60fps equivalent)
    }
    return 0; // No throttling on desktop
  },
};

// CSS containment classes for better performance
export const performanceClasses = {
  // Strict containment for independent elements
  strict: "contain-strict",
  // Layout and style containment
  layoutStyle: "contain-[layout_style]",
  // Content containment
  content: "contain-content",
  // GPU acceleration
  gpu: "will-change-gpu gpu-accelerated",
  // Scroll position optimization
  scrollOptimized: "will-change-scroll-position",
};

export default {
  animationPresets,
  viewportConfig,
  staggerConfig,
  gpuTransforms,
  mobileOptimizations,
  performanceClasses,
};
