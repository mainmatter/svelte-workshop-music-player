let webServer = {
	// Static test environment is recommended for CI:
	command: 'npm run build && npm run preview',
	port: 4173,
};

if (process.argv.includes('--ui')) {
	webServer = {
		command: 'npm run dev',
		port: 5173,
	};
}

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer,
	testDir: 'tests',
};

export default config;
