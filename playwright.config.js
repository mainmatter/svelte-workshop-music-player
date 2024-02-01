let webServer = {
	// Static test environment is recommended for CI:
	command: 'npm run build -- --mode test && npm run preview -- --mode test',
	port: 4173,
};

if (process.argv.includes('--ui')) {
	webServer = {
		command: 'npm run dev -- --mode test',
		port: 5173,
	};
}

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer,
	testDir: 'tests',
};

export default config;
