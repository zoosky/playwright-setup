# Playwright Setup

This project demonstrates, starting from the Playwright demo tests, how one can run separate configurations hat inherit from a `playwright.default.ts` config.

Run demo tests with:

    npx playwright test  --config ./playwright.config.demo.ts

Run To Do tests with
    npx playwright test  --config ./playwright.config.todo.ts

The two setups use different:

* baseURL
* reporter
* tests directory

To prepare your projects run, there is some `*.setup.ts`config included, for such things like setup.

         npx playwright test --list --config playwright.config.demo.ts
