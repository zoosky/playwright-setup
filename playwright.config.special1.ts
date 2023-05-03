// playwright.config.special1.js
import { defineConfig } from '@playwright/test';
import defaultConfig from './playwright.default.js';

const specialConfig = defineConfig({
    ...defaultConfig,
    // Your specialized configurations for special1
    testDir: './tests',
    use: {
        ...defaultConfig.use,
        // Overwrite specific use parameters
        baseURL: 'https://playwright.dev',
    },
});

console.log('Effective configuration for specialConfig:', specialConfig);

export default specialConfig;