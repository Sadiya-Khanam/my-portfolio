/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'*/

// https://vite.dev/config/
/*export default defineConfig({
  plugins: [react()],
})*/

/*export default defineConfig({
  base: '/my-portfolio/', // ← your repo name
});*/

/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Use your GitHub repo name
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
})*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'src/App.jsx'),
    },
  },
})
