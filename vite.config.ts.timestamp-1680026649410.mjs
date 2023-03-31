// vite.config.ts
import { defineConfig } from "file:///home/snacksncode/code/work/devpath/PWA/qr-code/node_modules/vite/dist/node/index.js";
import react from "file:///home/snacksncode/code/work/devpath/PWA/qr-code/node_modules/@vitejs/plugin-react/dist/index.mjs";
import mkcert from "file:///home/snacksncode/code/work/devpath/PWA/qr-code/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import { VitePWA } from "file:///home/snacksncode/code/work/devpath/PWA/qr-code/node_modules/vite-plugin-pwa/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    https: true
  },
  plugins: [
    react(),
    mkcert(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "QR Code PWA",
        short_name: "GeoPWA",
        description: "My Awesome QR Code App description",
        theme_color: "#6200EE",
        icons: [
          {
            src: "logo-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "logo-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      manifestFilename: "manifest.json"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zbmFja3NuY29kZS9jb2RlL3dvcmsvZGV2cGF0aC9QV0EvcXItY29kZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvc25hY2tzbmNvZGUvY29kZS93b3JrL2RldnBhdGgvUFdBL3FyLWNvZGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvc25hY2tzbmNvZGUvY29kZS93b3JrL2RldnBhdGgvUFdBL3FyLWNvZGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IG1rY2VydCBmcm9tIFwidml0ZS1wbHVnaW4tbWtjZXJ0XCI7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBodHRwczogdHJ1ZSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbWtjZXJ0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxuICAgICAgaW5jbHVkZUFzc2V0czogW1wiZmF2aWNvbi5pY29cIiwgXCJhcHBsZS10b3VjaC1pY29uLnBuZ1wiXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6IFwiUVIgQ29kZSBQV0FcIixcbiAgICAgICAgc2hvcnRfbmFtZTogXCJHZW9QV0FcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTXkgQXdlc29tZSBRUiBDb2RlIEFwcCBkZXNjcmlwdGlvblwiLFxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjNjIwMEVFXCIsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImxvZ28tMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwibG9nby01MTJ4NTEyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJsb2dvLTUxMng1MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgcHVycG9zZTogXCJhbnkgbWFza2FibGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIG1hbmlmZXN0RmlsZW5hbWU6IFwibWFuaWZlc3QuanNvblwiLFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStULFNBQVMsb0JBQW9CO0FBQzVWLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsU0FBUyxlQUFlO0FBRXhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSxzQkFBc0I7QUFBQSxNQUNyRCxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
