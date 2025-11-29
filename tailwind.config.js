/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", //  for dark mode to work
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionProperty: {
        'gpu': 'transform, opacity',
      },
    },
  },
  plugins: [
    function({ addUtilities, e, theme }) {
      // Add GPU acceleration utilities
      const gpuUtilities = {
        '.will-change-gpu': {
          'will-change': 'transform, opacity',
        },
        '.gpu-accelerated': {
          'transform': 'translateZ(0)',
          'backface-visibility': 'hidden',
          'perspective': '1000px',
        },
        // High refresh rate mobile optimizations
        '.will-change-scroll-position': {
          'will-change': 'scroll-position',
        },
        '.hardware-accelerated': {
          'transform': 'translate3d(0, 0, 0)',
          'backface-visibility': 'hidden',
          '-webkit-font-smoothing': 'subpixel-antialiased',
        },
        // Containment for independent elements (improves rendering performance)
        '.contain-strict': {
          'contain': 'strict',
        },
        '.contain-content': {
          'contain': 'content',
        },
        '.contain-layout': {
          'contain': 'layout',
        },
        '.contain-paint': {
          'contain': 'paint',
        },
        '.contain-style': {
          'contain': 'style',
        },
        // Scroll optimization
        '.scrollbar-gutter-stable': {
          'scrollbar-gutter': 'stable',
        },
        // Disable pointer events when not needed (improves tap responsiveness)
        '.pointer-events-none-mobile': {
          '@media (max-width: 768px)': {
            'pointer-events': 'none',
          },
        },
      };
      addUtilities(gpuUtilities);
    },
  ],
}
