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

test('plays the song', async ({ page }) => {
	await page.goto('/library/songs');

	await expect(page.getByTestId('nowplaying-iframe')).toBeHidden();
	await expect(page.getByTestId('nowplaying-image')).toBeHidden();

	await page
		.getByAltText('Play I Wanna Dance with Somebody (Who Loves Me) by Whitney Houston')
		.click();

	await expect(
		page.getByAltText('Pause I Wanna Dance with Somebody (Who Loves Me) by Whitney Houston')
	).toBeVisible();

	await expect(page.getByTestId('nowplaying-image')).toHaveAttribute('alt', 'Whitney Houston');
	await expect(page.getByTestId('nowplaying-iframe')).toBeVisible();
	await expect(page.getByTestId('nowplaying-iframe')).toHaveAttribute(
		'src',
		'https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F253799714&color=%23f00&auto_play=true&show_teaser=false&visual=false&buying=false&sharing=false&download=false&show_artwork=false&show_playcount=false&start_track=0&single_active=false'
	);

	await page.getByAltText('Play Eleonor Rigby by The Beatles').click();

	await expect(page.getByTestId('nowplaying-image')).toHaveAttribute('alt', 'The Beatles');
	await expect(page.getByTestId('nowplaying-iframe')).toHaveAttribute(
		'src',
		'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/340497185&color=true&auto_play=true&show_teaser=false&visual=false&buying=false&sharing=false&download=false&show_artwork=false&show_playcount=false&start_track=0&single_active=false&callback=false'
	);

	await page.getByAltText('Pause Eleonor Rigby by The Beatles').click();
});
