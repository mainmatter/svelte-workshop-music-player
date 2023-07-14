import { test, expect } from '@playwright/test';

test('follows the nav links', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Library' }).click();

	await expect(page, 'the songs URL is visited').toHaveURL('/library/songs');

	await page.getByRole('link', { name: 'Albums' }).click();

	await expect(page, 'the albums URL is visited').toHaveURL('/library/albums');
});

test('/library redirects to /library/songs', async ({ page }) => {
	await page.goto('/library');

	await expect(page, 'the page is redirected').toHaveURL('/library/songs');
});

test('renders the albums page', async ({ page }) => {
	await page.goto('/library/albums');

	await expect(
		await page.locator('[data-testid="albums"]').getByRole('listitem'),
		'Renders all 6 albums'
	).toHaveCount(6);
});

test('follows the album link', async ({ page }) => {
	await page.goto('/library/albums');

	await page
		.getByRole('link', {
			name: 'Whitney'
		})
		.click();

	await expect(page).toHaveURL('/library/albums/whitney');
});

test('renders the album', async ({ page }) => {
	await page.goto('/library/albums/whitney');

	await expect(
		page.getByRole('heading', { name: 'Whitney Houston' }).nth(0),
		'Shows the correct artist'
	).toBeVisible();

	await expect(
		page.getByRole('heading', { name: /^\s*Whitney\s*$/ }), // String 'Whitney' would match 'Whitney Houston' as well
		'Shows the correct album title'
	).toBeVisible();
});
