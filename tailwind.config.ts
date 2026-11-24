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
        "surface-1": "rgba(16, 20, 34, 0.65)",
        "surface-2": "rgba(22, 27, 44, 0.75)",
        "surface-3": "rgba(30, 37, 60, 0.85)",
        "pill-bg": "rgba(22, 27, 44, 0.7)",
        "text-primary": "#FFFFFF",
        "text-secondary": "#CAD1F0",
        "text-muted": "#8E96B8",
        "text-subtle": "#687094",
        "border-subtle": "rgba(139, 155, 247, 0.16)",
        "border-strong": "rgba(139, 155, 247, 0.35)",
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
        display: ["var(--font-plus-jakarta)", "var(--font-space-grotesk)", "system-ui", "sans-serif"],
        tech: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
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
