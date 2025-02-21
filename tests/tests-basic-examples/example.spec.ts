import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  //ARRANGE -> test steps, test data, test environment setup, test suites
  //ACT
  await page.goto('https://playwright.dev/');

  //ASSERT
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
