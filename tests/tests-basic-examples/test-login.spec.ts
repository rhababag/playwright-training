import { test, expect } from '@playwright/test';

test('test login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');
  await page.getByRole('textbox', { name: 'Username'}).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login'}).click();

  await expect(page.getByText('Swag Labs')).toBeVisible();
/*
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

 

  await expect(page.getByText('Swag Labs')).toBeVisible();*/
});

