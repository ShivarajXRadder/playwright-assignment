import { test, expect } from '../fixtures/baseFixture';
import { loginData } from '../test-data/loginData';
import { messages } from '../constants/messages';
import { pageconstants } from '../constants/pageConstants';
import { logger } from '../utils/logger';

test.describe.configure({
    mode: 'parallel'
});

test.describe('Login Module', () => {

    test.beforeEach(
        async ({ loginPage }) => {

            logger.info(
                'Navigating to Login Page'
            );

            await loginPage
                .navigateToLoginPage();
        }
    );

    test(
        'TC_POS_01 - Successful Login',
        async ({
            loginPage,
            successPage
        }) => {

            logger.info(
                'Executing successful login test'
            );

            await loginPage.login(
                loginData.validUsername,
                loginData.validPassword
            );

            await successPage
                .verifySuccessfulLogin(
                    messages.successfulLogin
                );
        }
    );

    test(
        'TC_POS_02 - Verify Login Page UI',
        async ({ loginPage }) => {

            logger.info(
                'Verifying login page UI'
            );

            await loginPage
                .verifyLoginPageLoaded();
        }
    );

    test(
        'TC_POS_03 - Verify Password Masking',
        async ({ loginPage }) => {

            logger.info(
                'Verifying password masking'
            );

            await expect(
                loginPage.passwordInput
            ).toHaveAttribute(
                'type',
                'password'
            );
        }
    );

    test(
        'TC_POS_04 - Verify Submit Button Visibility',
        async ({ loginPage }) => {

            logger.info(
                'Checking submit button visibility'
            );

            await expect(
                loginPage.submitButton
            ).toBeVisible();
        }
    );

    test(
        'TC_POS_05 - Verify Login Page Title',
        async ({ page }) => {

            logger.info(
                'Validating page title'
            );

            await expect(page)
                .toHaveTitle(
                    pageconstants.loginpage.title
                );
        }
    );


    test(
        'TC_NEG_01 - Invalid Username',
        async ({ loginPage }) => {

            logger.info(
                'Executing invalid username test'
            );

            await loginPage.login(

                loginData.invalidUsername,

                loginData.validPassword
            );

            await loginPage
                .verifyErrorMessage(

                    messages.invalidUsername
                );
        }
    );

    test(
        'TC_NEG_02 - Invalid Password',
        async ({ loginPage }) => {

            logger.info(
                'Executing invalid password test'
            );

            await loginPage.login(

                loginData.validUsername,

                loginData.invalidPassword
            );

            await loginPage
                .verifyErrorMessage(

                    messages.invalidPassword
                );
        }
    );

    test(
        'TC_NEG_03 - Empty Username',
        async ({ loginPage }) => {

            logger.info(
                'Executing empty username validation'
            );

            await loginPage.passwordInput.fill(
                loginData.validPassword
            );

            await loginPage.submitButton.click();


            await loginPage
                .verifyErrorMessage(

                    messages.invalidUsername
                );
        }
    );

    test(
        'TC_NEG_04 - Empty Password',
        async ({ loginPage }) => {

            logger.info(
                'Executing empty password validation'
            );

            await loginPage.usernameInput.fill(
                loginData.validUsername
            );

            await loginPage.submitButton.click();

            await loginPage
                .verifyErrorMessage(

                    messages.invalidPassword
                );
        }
    );

    test(
        'TC_Intentional_fail(checking Retry Mechanism) - Verify Login Page URL',
        async ({ page }) => {

            logger.info(
                'Validating page title'
            );

            await expect(page)
                .toHaveURL(
                    pageconstants.loginpage.url
                );
        }
    );

});