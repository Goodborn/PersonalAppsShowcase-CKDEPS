import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: {
          950: "#030305",
          900: "#08080c",
          850: "#0d0d14",
          800: "#050508",
        },
        glow: {
          purple: "#a78bfa",
          indigo: "#6366f1",
          sky: "#fb7185",
        },
        text: {
          primary: "#f1f1f8",
          secondary: "#aeaec2",
          dim: "rgba(255,255,255,0.38)",
        },
      },
      backgroundImage: {
        "app-gradient":
          "linear-gradient(165deg, #050308 0%, #0b0a16 35%, #090a13 70%, #020204 100%)",
        "accent-gradient": "linear-gradient(135deg, #a78bfa, #6366f1)",
        "accent-gradient-wide": "linear-gradient(90deg, #a78bfa, #6366f1, #fb7185)",
        "card-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 100%)",
        "card-hover-gradient":
          "linear-gradient(180deg, rgba(167,139,250,0.12) 0%, rgba(99,102,241,0.05) 100%)",
      },
      boxShadow: {
        glow: "0 0 24px rgba(167,139,250,0.14)",
        "glow-sm": "0 2px 12px rgba(167,139,250,0.22)",
        "glow-lg": "0 10px 34px rgba(99,102,241,0.30), 0 0 0 1px rgba(167,139,250,0.16)",
        "glow-sky": "0 4px 20px rgba(251,113,133,0.22)",
      },
      fontFamily: {
        display: ['"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
        body: ['"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
      },
      transitionDuration: {
        2000: "2000ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [typography],
};