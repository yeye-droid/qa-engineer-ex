
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests/playwright',

    reporter: 'html',

    use: {
        baseURL: 'http://127.0.0.1:8000',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
    ],
});
