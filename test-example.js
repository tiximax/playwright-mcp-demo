const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  // Navigate to a website
  await page.goto('https://example.com');

  // Get the title element
  const title = await page.locator('h1');

  // Assert that the title is correct
  await expect(title).toHaveText('Example Domain');
});
