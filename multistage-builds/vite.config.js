import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Listen on every interface so `docker run -p 3000:3000` reaches the dev
  // server, on the port the examples use.
  server: { host: true, port: 3000, strictPort: true },
  // Write the bundle to build/, where the examples expect it.
  build: { outDir: 'build' },
});
