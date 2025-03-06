/** @type {import('tailwindcss').Config} */
module.exports= {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender:'#C2C3FB',
        purple:'#8E47FF',
        pastelBlue:'#AFC7FF',
        pastelYellow:'#FFF3C9',
        peach:'#FFCCAF',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        sprintura:'var(--font-sprintura)',
        thuast:'var(--font-thuast)',
      },
    },
  },
  plugins: [],
};

