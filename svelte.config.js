import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@components': path.resolve('./src/components'),
			'@data': path.resolve('./static/data'),
			'@utils': path.resolve('./src/utils'),
		},
	},
};

export default config;
