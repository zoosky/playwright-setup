import { test, expect } from '@playwright/test';

test('First: Setup Tasks as login', async ({ page }) => {
  await page.goto('/');

  // login in code
  console.log("First login code")
});

