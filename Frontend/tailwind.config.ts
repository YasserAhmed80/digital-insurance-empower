import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "2rem", lg: "3rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          50: "#e6f2ff",
          100: "#cce5ff",
          200: "#99cbff",
          300: "#66b0ff",
          400: "#3395e6",
          500: "#0066cc", /* Classic Web Blue */
          600: "#0052a3",
          700: "#003b73", /* Trust Blue — Brand Primary */
          800: "#002952",
          900: "#001429",
          950: "#000a14",
        },
        accent: {
          50: "#edfcf2",
          200: "#a7f0c4",
          400: "#33b97a",
          500: "#00a859", /* Efficiency Green */
          600: "#009750",
          700: "#008144",
        },
        danger: {
          50: "#fef2f2",
          200: "#fecaca",
          400: "#ef5f6b",
          500: "#e63946", /* Speed & Innovation Red */
          600: "#cc2d3a",
        },
        value: {
          50: "#fff8f0",
          200: "#fdd9b5",
          400: "#f7b97d",
          500: "#f4a261", /* Value Yellow */
          600: "#e08c4a",
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #001a3a 0%, #003b73 50%, #004d99 100%)",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(0, 102, 204, 0.08)",
        glow: "0 0 0 1px rgba(0, 102, 204, 0.12), 0 8px 32px -8px rgba(0, 102, 204, 0.15)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)",
        "card-hover": "0 10px 40px -10px rgba(0, 102, 204, 0.12), 0 4px 12px rgba(0,0,0,0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
