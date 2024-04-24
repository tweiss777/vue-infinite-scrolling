import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    server: {
        port: 8000,
        proxy:{
            '/api': 'http://127.0.0.1:8080'
        }
    }
})
