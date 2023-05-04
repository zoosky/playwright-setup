import { test, expect } from '@playwright/test';

test('Prepare: Setup Tasks as login', async ({ page }) => {
  await page.goto('/');

  // login in code
  console.log("Prepare: login code")
});

