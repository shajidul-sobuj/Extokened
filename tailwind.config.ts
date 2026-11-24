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
        canvas: "#0D0D0D",
        "surface-1": "#141210",
        "surface-2": "#1D1814",
        "surface-3": "#26201A",
        "pill-bg": "#1D1510",
        "text-primary": "#FFFFFF",
        "text-secondary": "#ADADAD",
        "text-muted": "#7D7D7D",
        "text-subtle": "#717171",
        "border-subtle": "#2D221A",
        "border-strong": "#3D2E24",
        accent: {
          DEFAULT: "#F0A24C",
          hover: "#F3AF61",
          ink: "#1D1510",
          primary: "#F0A24C",
          secondary: "#E0A165",
        },
        wordmark: "#5A3418",
        status: {
          success: "#74C69D",
          warning: "#F0A24C",
          info: "#85B6FF",
        },
        studio: {
          bg: "#0D0D0D",
          surface: "#141210",
          elevated: "#1D1814",
          border: "#2D221A",
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
