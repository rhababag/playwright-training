import { test, expect } from '@playwright/test';

test('Add to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
  await expect(page.locator('[data-test="cart-quantity-label"]')).toBeVisible();
  await expect(page.locator('[data-test="cart-desc-label"]')).toBeVisible();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="firstName"]')).toBeVisible();
  await expect(page.locator('[data-test="lastName"]')).toBeVisible();
  await expect(page.locator('[data-test="postalCode"]')).toBeVisible();
  await expect(page.locator('[data-test="cancel"]')).toBeVisible();
  await expect(page.locator('[data-test="continue"]')).toBeVisible();
});