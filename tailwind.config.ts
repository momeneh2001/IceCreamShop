import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const childPlugin = plugin(function ({ addVariant }) {
  addVariant("child", "&>*");
  addVariant("child-hover", "&>*:hover");
});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        sm: "1rem",
        md: "1.25rem",
        lg: "1rem",
        xl: "2rem",
        xxl: "4rem",
      },
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      colors: {
        darkPurple: "#683292",
        hotPink: "#F83D8E",
      },
      boxShadow: {
        hotPink: "0 4px 15px rgba(248, 61, 142, 0.5)",
      },
      backgroundImage: {
        'ice-gradient': 'linear-gradient(336deg, #EFD7EF 8%, #F5F9FC 40%, #F8EAE1 66%, #EAF8F9 91%)',
        'icecream': "url('/images/snow2-removebg-preview')",
      },
    },
  },

  plugins: [childPlugin],
};

export default config;
