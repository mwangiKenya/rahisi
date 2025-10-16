import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Automatically uses '/' locally and '/rahisi/' when building for GitHub Pages
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/rahisi/' : '/',
  }
})
