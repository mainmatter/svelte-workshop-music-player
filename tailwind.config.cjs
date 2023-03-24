/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			svelte: {
				500: '#ff3e00'
			}
		}
	},
	plugins: []
};
