import { test, expect } from '@playwright/test';

test('renders the index page with the correct copies', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByText('Cybernetically enhanced playback')).toBeVisible();
	await expect(page.getByText('Just for you, Billy Bloggs')).toBeVisible();

	await expect(page.getByRole('button', { name: 'Play your music' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'No actual content' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Just a demo' })).toBeVisible();
});

test('clicking on each square changes its color', async ({ page }) => {
	let getColor = (element) => getComputedStyle(element).backgroundColor;

	await page.goto('/');

	let firstBox = page.getByRole('button', { name: 'Play your music' });
	let secondBox = page.getByRole('button', { name: 'No actual content' });
	let thirdBox = page.getByRole('button', { name: 'Just a demo' });

	let initialFirstBoxColor = 'rgb(255, 0, 0)';
	let initialSecondBoxColor = 'rgb(0, 128, 0)';
	let initialThirdBoxColor = 'rgb(0, 0, 255)';

	await expect(await firstBox.evaluate(getColor)).toBe(initialFirstBoxColor);
	await expect(await secondBox.evaluate(getColor)).toBe(initialSecondBoxColor);
	await expect(await thirdBox.evaluate(getColor)).toBe(initialThirdBoxColor);

	await page.getByRole('button', { name: 'Play your music' }).click();
	await page.getByRole('button', { name: 'No actual content' }).click();
	await page.getByRole('button', { name: 'Just a demo' }).click();

	await expect(await firstBox.evaluate(getColor)).not.toBe(initialFirstBoxColor);
	await expect(await secondBox.evaluate(getColor)).not.toBe(initialSecondBoxColor);
	await expect(await thirdBox.evaluate(getColor)).not.toBe(initialThirdBoxColor);
});
