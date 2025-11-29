/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", //  for dark mode to work
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
<<<<<<< HEAD
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
=======
  plugins: [],
>>>>>>> parent of f9726a7 (Smooth Scroll)
}
