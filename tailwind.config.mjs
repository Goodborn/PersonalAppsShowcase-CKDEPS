import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: {
          950: "#0a0f1c",
          900: "#0d1a2e",
          850: "#1a1130",
          800: "#0f0b1a",
        },
        glow: {
          purple: "#a855f7",
          indigo: "#6366f1",
          sky: "#0ea5e9",
        },
        text: {
          primary: "#f0e7ff",
          secondary: "#c4b5fd",
          dim: "rgba(255,255,255,0.45)",
        },
      },
      backgroundImage: {
        "app-gradient":
          "linear-gradient(165deg, #0f0b1a 0%, #1a1130 35%, #0d1a2e 70%, #0a0f1c 100%)",
        "accent-gradient": "linear-gradient(135deg, #a855f7, #6366f1)",
        "accent-gradient-wide": "linear-gradient(90deg, #a855f7, #6366f1, #0ea5e9)",
        "card-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        "card-hover-gradient":
          "linear-gradient(180deg, rgba(168,85,247,0.12) 0%, rgba(99,102,241,0.06) 100%)",
      },
      boxShadow: {
        glow: "0 0 24px rgba(168,85,247,0.15)",
        "glow-sm": "0 2px 12px rgba(168,85,247,0.3)",
        "glow-lg": "0 6px 32px rgba(168,85,247,0.5), 0 0 0 1px rgba(168,85,247,0.4)",
        "glow-sky": "0 4px 24px rgba(14,165,233,0.3)",
      },
      fontFamily: {
        display: ['"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
        body: ['"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [typography],
};