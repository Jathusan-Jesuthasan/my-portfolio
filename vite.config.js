import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Performance optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for large libraries
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['react-icons'],
          emailjs: ['@emailjs/browser']
        }
      }
    },
    // Enable gzip compression hints
    reportCompressedSize: true,
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Minify for better performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'] // Remove specific console methods
      }
    },
    // Better asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    cssCodeSplit: true // Split CSS for better caching
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    // Pre-bundle heavy dependencies
    force: true
  },
  // Development optimizations
  server: {
    hmr: {
      overlay: false // Reduce development overhead
    }
  }
})
