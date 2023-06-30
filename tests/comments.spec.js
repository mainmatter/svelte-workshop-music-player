import { test, expect } from '@playwright/test';
import { authenticateAs } from './test-helpers';

test('it can comment on artists', async ({ page, context }) => {
	await authenticateAs(context);
	await page.goto('/library/artists/queen');

	await expect(page.getByText(/^john said.*$/)).not.toBeVisible();

	await page.getByLabel('Comment').fill('I like these hits!');
	await page.getByRole('button', { name: 'Post comment' }).click();

	await expect(page.getByText(/^I like these hits!.*$/)).toBeVisible();
});
