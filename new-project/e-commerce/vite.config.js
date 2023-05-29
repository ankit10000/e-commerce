// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// // import { createServer } from 'vite';
// import setupProxy from './setupProxy';

// // https://vitejs.dev/config/
// export default defineConfig({
//   // Vite configuration options
//   server: {
  //     // Other server options...
//     middleware: [setupProxy], // Add the setupProxy middleware
//   },
// });
// import { createProxyMiddleware } from 'http-proxy-middleware';

export default {
    plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Replace with your backend server URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // Remove the /api prefix from the request path
        }
      }
    }
  }
};
