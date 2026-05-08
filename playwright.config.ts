import {defineConfig, devices} from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    workers: 3,
    retries: 2,
    timeout: 30000,
    reporter: [
        ['list'],
        ['html'],
        ['allure-playwright']
    ],

    use: {
        baseURL:process.env.BASE_URL,
        headless: false,
        viewport: null,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium',
                launchOptions: {
                    args: ['--start-maximized']
                },
            }
        },

        // {
        //     name: 'firefox',
        //     use: {
        //         browserName: 'firefox',
        //         launchOptions: {
        //             args: ['--start-maximized']
        //         },
        //     }
        // },

        // {
        //     name: 'webkit',
        //     use: {
        //         browserName: 'webkit',
        //         launchOptions: {
        //             args: ['--start-maximized']
        //         },
        //     }
        // }
    ]
});