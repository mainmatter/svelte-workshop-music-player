import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@store': path.resolve('./src/store'),
			'@utils': path.resolve('./src/utils')
		}
	},
	preprocess: vitePreprocess({
		style: {
			postcss: true
		}
	})
};

export default config;
