import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white-tan':'#FFFCF1',
        'red':'#D55242',
        'green':'#D2E37C',
        'orange': '#FFDC91',
        'orange-light': '#FFEABD',
        'orange-dark': '#FF8C00',
        'tan': '#FAF3D1',
        'tan-dark': '#FFECCC',
        'yellow': '#FBF496',
        'blue-light': '#F5F3F3',

      },
    },
  },
  plugins: [],
} satisfies Config;
