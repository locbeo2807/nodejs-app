// vite.config.js
import { defineConfig } from "file:///D:/nodejs-app/node_modules/vite/dist/node/index.js";
import tailwindcss from "file:///D:/nodejs-app/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    tailwindcss()
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0d0d0d",
        neonPink: "#ff007f",
        neonBlue: "#00d9ff",
        cardBg: "#131313"
      },
      boxShadow: {
        neon: "0px 0px 15px 2px rgba(255, 0, 127, 0.75)",
        neonBlue: "0px 0px 15px 2px rgba(0, 217, 255, 0.75)"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxub2RlanMtYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxub2RlanMtYXBwXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9ub2RlanMtYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHRhaWx3aW5kY3NzKCksXHJcbiAgXSxcclxuICB0aGVtZToge1xyXG4gICAgZXh0ZW5kOiB7XHJcbiAgICAgIGNvbG9yczoge1xyXG4gICAgICAgIGRhcmtCZzogXCIjMGQwZDBkXCIsXHJcbiAgICAgICAgbmVvblBpbms6IFwiI2ZmMDA3ZlwiLFxyXG4gICAgICAgIG5lb25CbHVlOiBcIiMwMGQ5ZmZcIixcclxuICAgICAgICBjYXJkQmc6IFwiIzEzMTMxM1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBib3hTaGFkb3c6IHtcclxuICAgICAgICBuZW9uOiBcIjBweCAwcHggMTVweCAycHggcmdiYSgyNTUsIDAsIDEyNywgMC43NSlcIixcclxuICAgICAgICBuZW9uQmx1ZTogXCIwcHggMHB4IDE1cHggMnB4IHJnYmEoMCwgMjE3LCAyNTUsIDAuNzUpXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2TixTQUFTLG9CQUFvQjtBQUMxUCxPQUFPLGlCQUFpQjtBQUN4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
