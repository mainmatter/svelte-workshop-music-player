import { test, expect } from '@playwright/test';
import { authenticateAs } from './test-helpers';

test('logs in with the correct credentials', async ({ page }) => {
	await page.goto('/library');

	await expect(page, 'sign in should be rendered instead').toHaveURL('/sign-in');

	await page.getByLabel('Username').fill('john');
	await page.getByLabel('Password').fill('password');
	await page.getByRole('button', { name: 'Submit' }).click();

	await expect(page, 'sign in should be rendered instead').toHaveURL('/library/songs');
});

test('renders an error with incorrect credentials', async ({ page }) => {
	await page.goto('/library');

	await expect(page, 'sign in should be rendered instead').toHaveURL('/sign-in');

	await page.getByLabel('Username').fill('johh');
	await page.getByLabel('Password').fill('nope');
	await page.getByRole('button', { name: 'Submit' }).click();

	await expect(page, 'sign in should be rendered instead').toHaveURL('/sign-in');
	await expect(page.getByText('incorrect password')).toBeVisible();
});

test('logs out when logout is clicked', async ({ page, context }) => {
	await authenticateAs(context);
	await page.goto('/library');

	await page.getByRole('button', { name: 'Logout' }).click();

	await expect(page, 'sign in should be rendered instead').toHaveURL('/');

	await page.getByRole('link', { name: 'Library' }).click();

	await expect(page, 'sign in should be rendered instead').toHaveURL('/sign-in');
});
