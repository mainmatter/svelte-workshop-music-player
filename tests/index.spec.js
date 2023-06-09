import { test, expect } from '@playwright/test';

test('renders the index page with the correct copies', async ({ page }) => {
	await page.goto('/');

	await expect(
		page.getByRole('heading', { name: 'Welcome to The Svelte Music Player' })
	).toBeVisible();

	await expect(page.getByText("Billy Bloggs, it's great to see you again!")).toBeVisible();
});
