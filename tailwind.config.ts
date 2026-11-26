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
        canvas: "#07080D",
        "surface-1": "#0D1019",
        "surface-2": "#131726",
        "surface-3": "#1A2034",
        "text-primary": "#F5F7FF",
        "text-secondary": "#B4BDD8",
        "text-muted": "#7D87A6",
        "text-subtle": "#5A6382",
        "border-subtle": "rgba(148, 163, 224, 0.12)",
        "border-default": "rgba(148, 163, 224, 0.18)",
        "border-strong": "rgba(148, 163, 224, 0.34)",
        lavender: {
          DEFAULT: "#B8C2F2",
          light: "#E4E8FC",
          dark: "#7C8BE4",
        },
        periwinkle: {
          DEFAULT: "#8B9BF7",
          hover: "#A5B2FF",
          light: "#C8D0FD",
          glow: "rgba(139, 155, 247, 0.35)",
        },
        firefly: {
          DEFAULT: "#F5C451",
          glow: "rgba(245, 196, 81, 0.3)",
        },
        accent: {
          DEFAULT: "#8B9BF7",
          hover: "#A5B2FF",
          ink: "#07080D",
          primary: "#8B9BF7",
          secondary: "#B8C2F2",
        },
        status: {
          success: "#34D399",
          warning: "#F5C451",
          info: "#8B9BF7",
        },
        studio: {
          bg: "#07080D",
          surface: "#0D1019",
          elevated: "#131726",
          border: "#1D2338",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: [
          "var(--font-space-grotesk)",
          "var(--font-plus-jakarta)",
          "system-ui",
          "sans-serif",
        ],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        brand: ["var(--font-oxanium)", "var(--font-space-grotesk)", "system-ui", "sans-serif"],
        tech: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        card: "16px",
        btn: "9999px",
        input: "10px",
      },
      maxWidth: {
        layout: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
