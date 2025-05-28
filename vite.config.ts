import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // <-- Add this line (replace with your repo name if different)
  plugins: [react()],
})
