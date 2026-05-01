import { test, expect } from '@playwright/test';

test('can add and complete todo items', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.getByPlaceholder('What needs to be done?');

  await input.fill('Apply to 5 jobs');
  await input.press('Enter');

  await input.fill('Build Playwright portfolio');
  await input.press('Enter');

  await expect(page.getByText('Apply to 5 jobs')).toBeVisible();
  await expect(page.getByText('Build Playwright portfolio')).toBeVisible();

  await page
    .locator('li')
    .filter({ hasText: 'Apply to 5 jobs' })
    .getByRole('checkbox')
    .check();

  await expect(page.getByText('1 item left')).toBeVisible();
});