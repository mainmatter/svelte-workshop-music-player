import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$data: path.resolve('./static/data'),
			$utils: path.resolve('./src/utils'),
			$store: path.resolve('./src/store'),
		},
	},
	preprocess: vitePreprocess({
		style: {
			postcss: true,
		},
	}),
};

export default config;
