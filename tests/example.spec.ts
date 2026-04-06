import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

 //Buoi 1 
 //Bai 1
  // Expect a title "Playwright" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the Bài học 1: Register Page.
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Expects page to have a heading with the name of User Registration.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
