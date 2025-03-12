import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0d0d0d",
        neonPink: "#ff007f",
        neonBlue: "#00d9ff",
        cardBg: "#131313",
      },
      boxShadow: {
        neon: "0px 0px 15px 2px rgba(255, 0, 127, 0.75)",
        neonBlue: "0px 0px 15px 2px rgba(0, 217, 255, 0.75)",
      },
    },
  },
})