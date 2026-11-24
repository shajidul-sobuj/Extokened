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
        canvas: "#0A0A0B",
        "surface-1": "#111214",
        "surface-2": "#191B1F",
        "surface-3": "#22252A",
        "text-primary": "#F3F1EC",
        "text-secondary": "#AAA9A3",
        "text-muted": "#777873",
        "border-subtle": "#292B2E",
        "border-strong": "#414449",
        accent: {
          DEFAULT: "#C6F36A",
          hover: "#B6E659",
          ink: "#10120A",
          primary: "#C6F36A",
          secondary: "#74C69D",
        },
        status: {
          success: "#74C69D",
          warning: "#E8B86D",
          info: "#85B6FF",
        },
        studio: {
          bg: "#0A0A0B",
          surface: "#111214",
          elevated: "#191B1F",
          border: "#292B2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        card: "10px",
        btn: "8px",
        input: "6px",
      },
      maxWidth: {
        layout: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
