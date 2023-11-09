/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		host: true,
		watch: {
			usePolling: true,
		},
	},
	plugins: [
		react(),
		checker({
			typescript: true,
			eslint: {
				lintCommand:
					'eslint src/ --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
			},
			overlay: false,
		}),
	],
});
