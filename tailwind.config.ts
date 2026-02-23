import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nb: {
          bg: "var(--nb-bg)",
          surface0: "var(--nb-surface-0)",
          surface1: "var(--nb-surface-1)",
          surface2: "var(--nb-surface-2)",
          surface3: "var(--nb-surface-3)",

          text: "var(--nb-text)",
          muted: "var(--nb-muted)",
          border: "var(--nb-border)",

          primary: "var(--nb-primary)",
          blue: "var(--nb-accent-blue)",
          purple: "var(--nb-accent-purple)",
          yellow: "var(--nb-cyber-yellow)",

          success: "var(--nb-success)",
          warning: "var(--nb-warning)",
          danger: "var(--nb-danger)",
          info: "var(--nb-info)",

          ring: "var(--nb-ring)"
        }
      },
      borderRadius: {
        sm: "var(--nb-radius-sm)",
        md: "var(--nb-radius-md)",
        lg: "var(--nb-radius-lg)"
      },
      boxShadow: {
        1: "var(--nb-shadow-1)",
        2: "var(--nb-shadow-2)",
        3: "var(--nb-shadow-3)",
        glow: "var(--nb-shadow-glow)"
      },
      fontSize: {
        xs: ["var(--nb-text-xs)", { lineHeight: "1.4" }],
        sm: ["var(--nb-text-sm)", { lineHeight: "1.5" }],
        base: ["var(--nb-text-md)", { lineHeight: "1.6" }],
        lg: ["var(--nb-text-lg)", { lineHeight: "1.4" }],
        xl: ["var(--nb-text-xl)", { lineHeight: "1.25" }],
        "2xl": ["var(--nb-text-xxl)", { lineHeight: "1.2" }]
      },
      transitionDuration: {
        fast: "var(--nb-motion-fast)",
        normal: "var(--nb-motion-normal)",
        slow: "var(--nb-motion-slow)"
      }
    }
  },
  plugins: []
} satisfies Config;
