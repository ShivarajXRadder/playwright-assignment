import { Page, Locator, expect } from '@playwright/test';
import { messages } from '../constants/messages';
import { pageconstants } from '../constants/pageConstants';

export class SuccessPage {

    readonly page: Page;
    readonly successMessage: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.locator('.post-title');
        this.logoutButton = page.locator('.wp-block-button__link');
    }

    async verifySuccessfulLogin(expectedMessage: string) {
        await expect(this.page).toHaveURL(pageconstants.successpage.url);
        await expect(this.successMessage).toContainText(expectedMessage);
        await expect(this.logoutButton).toBeVisible();
    }
}

