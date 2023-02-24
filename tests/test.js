import { expect, test } from '@playwright/test';

test('visiting / renders the index page', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveURL('/');
	await expect(page.locator('[data-testId="select-album-btn"]')).toHaveCount(2);
	await expect(page.locator('[data-testId="song"]')).toHaveCount(20);
});
