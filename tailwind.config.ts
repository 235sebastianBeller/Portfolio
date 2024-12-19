import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary:"#0B132B",
        colortxt:"#3A506B",
        darkBg:"#1c2541"
      },
      backgroundImage:{
        "gradient-cover":
         "linear-gradient(10deg, rgba(31, 122, 140, 0.7) 5%, rgba(2, 43, 58, 0.9) 95%)",
      }

    },
  },
  plugins: [],
} satisfies Config;
