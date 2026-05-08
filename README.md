# Playwright TypeScript Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)
![Testing](https://img.shields.io/badge/Testing-Framework-orange)


---

## Tech Stack

- Playwright (https://playwright.dev/)
- TypeScript
- Allure Report
- Node.js
- Page Object Model (POM)

---

## Project Structure

project-root/
│
├── tests/
│ └── login.spec.ts
│
├── pages/
│ └── LoginPage.ts
| └── SuccessPage.ts
│
├── fixtures/
│ └── baseFixture.ts
│
├── test-data/
│ └── loginData.ts
│
├── constants/
│ ├── messages.ts
│ └── pageConstants.ts
│
├── utils/
│ └── logger.ts
| └── helper.ts
│ └──routes.ts
│ 
├── allure-results/
├── allure-report/
│
├── playwright.config.ts
├── package.json
└── README.md

---

# Installation Steps

## 1. Initialize project (if starting fresh)
npm init -y

## 2. Install Playwright
npm init playwright@latest
OR (if already created project)
npm install -D @playwright/test

## 3. Install Playwright browsers
npx playwright install

## 4. Install TypeScript (if not already installed)
npm install -D typescript

## 5. Install dotenv (for environment variables)
npm install dotenv

## 6. Install Allure reporting
npm install -D allure-playwright

npm install -g allure-commandline

## 7. Install logging library (optional but used in framework)
npm install pino

---

## Running Tests

### Run all tests
npm test

### Run specific file
npx playwright test tests/positiveLogin.spec.ts

### Run in headed mode
npx playwright test --headed

---
## Reports

## Open HTML Report
npm run report

## Generating Allure report
npm run allure:generate

## Open Allure report
npm runallure:open

---

## Multi-Browser Execution

Supported browsers:
- Chromium
- Firefox
- WebKit

Run:
npx playwright test

---

## Parallel Execution

Configured with:
- workers: 3
- fullyParallel: true

This enables tests to run in parallel across multiple workers.

---

## Retry Strategy

Failed tests automatically retry:
- retries: 2

To check Retry Mechanism added a Testcase 
Added TC : TC_Intentional_fail

---

## Allure Reporting

### Generate report
npm run report

### Open report
allure open allure-report

---

## Clean Allure Results

Old results are automatically cleaned before execution:
npm test

This ensures only latest execution data is used.

---

## Key Features

- Page Object Model (POM)
- Multi-browser execution
- Parallel execution
- Retry mechanism
- Allure reporting
- Centralized constants
- Test data separation
- Logger integration

---

## Example Test

test('TC_POS_01 - Successful Login', async ({ loginPage }) => {

await loginPage.login(
loginData.validUsername,
loginData.validPassword
);

});

---

## Design Principles

- Clean code structure
- Reusable components
- Scalable architecture
- Separation of concerns
- Maintainable test design

---
