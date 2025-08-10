import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // هذا ضروري لكي يتم تحميل الملفات بشكل صحيح على Netlify
});
