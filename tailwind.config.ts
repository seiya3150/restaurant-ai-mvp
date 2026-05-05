import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        akari: {
          ink: "#2b201a",
          muted: "#7a685e",
          line: "#eaded1",
          paper: "#fffaf3",
          soft: "#f7efe5",
          red: "#c93b2f",
          darkRed: "#8f2b25",
          brown: "#5a3a2b",
          green: "#3e7a58",
          gold: "#d79628"
        }
      },
      boxShadow: {
        warm: "0 18px 50px rgba(90, 58, 43, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
