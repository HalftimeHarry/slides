import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	server: {
		host: '0.0.0.0',
		port: 5173,
		strictPort: false,
		allowedHosts: ['.gitpod.dev', '.gitpod.io'],
		hmr: {
			clientPort: 5173,
		},
	},
	resolve: {
		alias: {
			'@config': path.resolve(__dirname, './src/config.ts'),
			'@components': path.resolve(__dirname, './src/lib/components/index.ts'),
			'@languages': path.resolve(__dirname, './src/lib/languages/index.ts'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@stores': path.resolve(__dirname, './src/lib/stores'),
			'@styles': path.resolve(__dirname, './src/lib/styles'),
		},
	},
})
