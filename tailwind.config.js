/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1A1C1C",
        "on-primary": "#FAF9F6",
        "primary-container": "#D6D6D6",
        "on-primary-container": "#111111",
        
        "secondary": "#5D5F5F",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#E5E5E5",
        "on-secondary-container": "#2A2A2A",
        
        "tertiary": "#D4AF37",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#FCEBB6",
        "on-tertiary-container": "#4A3C10",
        
        "error": "#BA1A1A",
        "on-error": "#FFFFFF",
        "error-container": "#FFDAD6",
        "on-error-container": "#410002",
        
        "background": "#FAF9F6",
        "on-background": "#1A1C1C",
        
        "surface": "#FFFFFF",
        "on-surface": "#1A1C1C",
        "surface-variant": "#EAEAEA",
        "on-surface-variant": "#4A4A4A",
        
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F5F5F5",
        "surface-container": "#F0F0F0",
        "surface-container-high": "#EAEAEA",
        "surface-container-highest": "#E5E5E5",
        
        "outline": "#8F8F8F",
        "outline-variant": "#D1D1D1",
      },
      borderRadius: {
        DEFAULT: "0",
        lg: "0",
        xl: "0",
        full: "9999px",
      },
      spacing: {
        "container-margin": "4vw",
        gutter: "24px",
        "section-gap": "120px",
        "element-gap": "16px",
      },
      fontFamily: {
        "display-lg": ["Outfit", "sans-serif"],
        "headline-lg": ["Outfit", "sans-serif"],
        "headline-lg-mobile": ["Outfit", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "button-text": ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["7vw", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline-lg": ["3.5vw", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.5", letterSpacing: "0.2em", fontWeight: "600" }],
        "button-text": ["14px", { lineHeight: "1", letterSpacing: "0.15em", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
