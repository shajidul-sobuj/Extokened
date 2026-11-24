import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#080B12",
          surface: "#101724",
          elevated: "#151F2E",
          border: "#253044",
        },
        accent: {
          primary: "#7C5CFF",
          primaryHover: "#6B46FE",
          secondary: "#22D3C5",
          secondaryHover: "#14B8A6",
        },
        content: {
          primary: "#F4F7FB",
          secondary: "#A6B1C2",
          muted: "#718096",
        },
        status: {
          success: "#34D399",
          warning: "#FBBF24",
          info: "#60A5FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        card: "18px",
        btn: "10px",
      },
      maxWidth: {
        layout: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
