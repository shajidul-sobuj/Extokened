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
        canvas: "#08090E",
        "surface-1": "#0F1118",
        "surface-2": "#151824",
        "surface-3": "#1C2030",
        "pill-bg": "#151824",
        "text-primary": "#FFFFFF",
        "text-secondary": "#BAC0DC",
        "text-muted": "#727896",
        "text-subtle": "#545A75",
        "border-subtle": "#1E2337",
        "border-strong": "#2B324E",
        lavender: {
          DEFAULT: "#B8C0EC",
          light: "#E2E5F8",
          dark: "#7E8CE0",
        },
        periwinkle: {
          DEFAULT: "#8B9BF7",
          hover: "#A5B2FF",
          light: "#C5CDFC",
          glow: "rgba(139, 155, 247, 0.4)",
        },
        firefly: {
          DEFAULT: "#FFC857",
          glow: "rgba(255, 200, 87, 0.35)",
        },
        accent: {
          DEFAULT: "#8B9BF7",
          hover: "#A5B2FF",
          ink: "#08090E",
          primary: "#8B9BF7",
          secondary: "#B8C0EC",
        },
        wordmark: "#252B44",
        status: {
          success: "#2FB36A",
          warning: "#FFC857",
          info: "#8B9BF7",
        },
        studio: {
          bg: "#08090E",
          surface: "#0F1118",
          elevated: "#151824",
          border: "#1E2337",
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
