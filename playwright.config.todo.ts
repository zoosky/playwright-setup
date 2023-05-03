// playwright.config.special2.js
import { defineConfig } from '@playwright/test';
import defaultConfig from './playwright.default';

const specialConfig = defineConfig({
    ...defaultConfig,
    // Your specialized configurations 
    testDir: './tests-examples',
    reporter: 'list',
    use: {
        ...defaultConfig.use,
        // Overwrite specific use parameters
        baseURL: 'https://demo.playwright.dev',
    },
});

console.log('Effective configuration for specialConfig:', specialConfig);

export default specialConfig;