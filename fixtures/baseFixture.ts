import { test as base, chromium, firefox, webkit, Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SuccessPage } from '../pages/SuccessPage';

type Fixtures = {
    browser: Browser;
    context: BrowserContext;
    page: Page;
    loginPage: LoginPage;
    successPage: SuccessPage;
};

export const test = base.extend<Fixtures>({

    browser: async ({ browserName }, use) => {

        let browser: Browser;
        if (browserName === 'chromium') {
            browser = await chromium.launch({ headless: false });
        } else if (
            browserName === 'firefox'
        ) {
            browser = await firefox.launch({ headless: false });
        } else {
            browser = await webkit.launch({ headless: false });
        }

        await use(browser);
        await browser.close();
    },

    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
        await context.close();
    },

    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    successPage: async ({ page }, use) => {
        await use(new SuccessPage(page)
        );
    }
});

export { expect } from '@playwright/test';