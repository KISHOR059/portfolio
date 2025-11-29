import { useEffect, useRef } from 'react';

/**
 * Custom hook for optimizing scroll performance on high refresh rate displays
 * Implements throttled scroll handling with requestAnimationFrame for 120fps+ support
 */
export const useScrollOptimization = (callback, threshold = 50) => {
  const animationFrameRef = useRef(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    // Use passive listener to avoid blocking scroll
    const handleScroll = () => {
      // Cancel previous animation frame if pending
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Schedule callback on next animation frame for 60fps-120fps synchronization
      animationFrameRef.current = requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        
        // Only call callback if scroll change exceeds threshold
        if (Math.abs(currentScroll - lastScrollRef.current) >= threshold) {
          lastScrollRef.current = currentScroll;
          callback(currentScroll);
        }
      });
    };

    // Passive event listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [callback, threshold]);
};

/**
 * Debounce function optimized for animation frame timing
 * Ensures animations sync with device refresh rate
 */
export const debounceAnimationFrame = (callback, delay = 0) => {
  let timeoutId;
  let frameId;

  return function debouncedFunction(...args) {
    clearTimeout(timeoutId);
    cancelAnimationFrame(frameId);

    if (delay === 0) {
      // For immediate execution, use requestAnimationFrame
      frameId = requestAnimationFrame(() => callback.apply(this, args));
    } else {
      // For delayed execution, combine timeout with animation frame
      timeoutId = setTimeout(() => {
        frameId = requestAnimationFrame(() => callback.apply(this, args));
      }, delay);
    }
  };
};

/**
 * Throttle function for high refresh rate display optimization
 * Ensures callbacks fire at appropriate intervals without jank
 */
export const throttleByFrameRate = (callback, options = {}) => {
  const { fps = 60 } = options; // Default to 60fps, can be set to 120 for high refresh rate
  const frameInterval = 1000 / fps;
  let lastExecuted = 0;
  let frameId;

  return function throttledFunction(...args) {
    const now = performance.now();
    const timeSinceLastExecution = now - lastExecuted;

    if (frameId) {
      cancelAnimationFrame(frameId);
    }

    if (timeSinceLastExecution >= frameInterval) {
      // Execute immediately if enough time has passed
      callback.apply(this, args);
      lastExecuted = now;
    } else {
      // Schedule execution at next appropriate frame
      const delayUntilNextFrame = frameInterval - timeSinceLastExecution;
      frameId = setTimeout(() => {
        callback.apply(this, args);
        lastExecuted = performance.now();
      }, delayUntilNextFrame);
    }
  };
};

export default useScrollOptimization;
