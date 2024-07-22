import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  //@ts-ignore
  base: process.env.NODE_ENV === 'production' ? '/breathing-pond/' : '/',
  plugins: [react()],
})
