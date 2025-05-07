import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../apps/**/src/**/*.{ts,tsx}",
    "../../apps/**/app/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4f46e5",
          foreground: "#ffffff"
        }
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem"
      }
    }
  },
  plugins: []
}

export default config
