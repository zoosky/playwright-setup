// playwright.config.todo.ts
import { defineConfig } from '@playwright/test';
import defaultConfig from './playwright.default';

const specialConfig = defineConfig({
    ...defaultConfig,
    // Your specialized configurations 
    testDir: './tests-examples',
    reporter: 'dot',
    use: {
        ...defaultConfig.use,
        // Overwrite specific use parameters
        baseURL: 'https://demo.playwright.dev',
    },
});

console.log('Effective configuration for specialConfig:', specialConfig);

export default specialConfig;