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
        obsidian: {
          DEFAULT: "#08090C",
          50: "#1A1D24",
          100: "#14171E",
          200: "#101319",
          300: "#0D1015",
          400: "#0A0C10",
          500: "#08090C",
          600: "#060709",
          700: "#040507",
          surface: "#0E1117",
          elevated: "#161B22",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(0, 240, 255, 0.3)",
        },
        cyber: {
          cyan: "#00F0FF",
          cyanDim: "rgba(0, 240, 255, 0.15)",
          purple: "#8B5CF6",
          purpleDim: "rgba(139, 92, 246, 0.15)",
          pink: "#F43F5E",
          green: "#10B981",
          gold: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 25s linear infinite",
        scanline: "scanline 8s linear infinite",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "radial-fade": "radial-gradient(circle at 50% 20%, rgba(0, 240, 255, 0.12) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)",
        "gold-trophy": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
