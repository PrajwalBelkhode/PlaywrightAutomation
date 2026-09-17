# Allure Reports

This directory contains Playwright test files configured to generate Allure reports for test execution results.

## 📋 Overview

Allure is an open-source framework designed to provide clear and concise test reports. It transforms raw test data into an interactive, web-based report that visualizes test execution results, making it easier to analyze test outcomes and identify issues.

## 🚀 Features

- **Rich Visual Reports**: Interactive HTML reports with detailed test execution information
- **Test Categorization**: Organize tests by features, stories, and epics
- **Timeline Visualization**: See when tests were executed and their duration
- **Flaky Test Detection**: Identify tests that fail intermittently
- **Screenshot & Video Attachments**: Visual evidence of test execution
- **Environment Information**: Track test environment details
- **Trend Analysis**: Compare test results across different runs

## 📁 Directory Structure

```
05_Allure-Reports/
├── 230_AllureReport.spec.ts          # Example test file with Allure annotations
├── Tasks/                            # Additional test files
└── README.md                         # This file
```

## 🔧 Setup & Configuration

### Prerequisites

1. **Node.js** (v16 or higher)
2. **Playwright** installed
3. **Allure Command Line Tool** installed globally:
   ```bash
   npm install -g allure-commandline
   ```
   or
   ```bash
   yarn global add allure-commandline
   ```

### Installation

Install Allure Playwright adapter:

```bash
npm install --save-dev @playwright/test allure-playwright
```

### Configuration

Add Allure reporter to your Playwright config file (`playwright.config.ts`):

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'test-results/allure-results',
      suiteTitle: false,
      categories: [
        {
          name: 'UI Tests',
          matchedStatuses: ['passed'],
        },
        {
          name: 'Flaky Tests',
          matchedStatuses: ['flaky'],
        },
        {
          name: 'Failed Tests',
          matchedStatuses: ['failed', 'broken'],
          messageRegex: '.*',
        },
      ],
    }],
  ],
  use: {
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on',
  },
});
```

## 📝 Writing Tests with Allure Annotations

Allure provides decorators and functions to add metadata to your tests:

```typescript
import {test, expect} from "@playwright/test";
import * as allure from "allure-js-commons";

test("Test description", async({page}) => {
  // Add test metadata
  await allure.epic("Feature Epic");
  await allure.feature("Feature Name");
  await allure.story("User Story");
  await allure.description("Detailed test description");
  await allure.tag("smoke", "regression");
  
  // Test steps
  await allure.step("Step 1: Navigate to page", async () => {
    await page.goto("https://example.com");
  });
  
  await allure.step("Step 2: Perform action", async () => {
    await page.click("#submit-button");
  });
  
  // Assertions
  await expect(page).toHaveTitle("Expected Title");
});
```

### Available Allure Functions

- `allure.epic(name: string)` - Group tests under an epic
- `allure.feature(name: string)` - Group tests by feature
- `allure.story(name: string)` - Group tests by user story
- `allure.description(text: string)` - Add detailed description
- `allure.tag(...tags: string[])` - Add tags to tests
- `allure.severity(severity: 'blocker' | 'critical' | 'normal' | 'minor' | 'trivial')` - Set test severity
- `allure.step(name: string, callback: () => Promise<void>)` - Add a test step
- `allure.attachment(name: string, content: string | Buffer, type: string)` - Attach files or data

## 🚀 Running Tests & Generating Reports

### 1. Run Tests with Allure Reporter

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/05_Allure-Reports/230_AllureReport.spec.ts

# Run tests with specific tags
npx playwright test --grep @smoke
```

### 2. Generate Allure Report

```bash
# Generate report from test results
npx allure generate test-results/allure-results -o allure-report

# Open the report in browser
npx allure open allure-report
```

### 3. Generate and Open in One Command

```bash
# Generate and open report
npx allure generate test-results/allure-results -o allure-report && npx allure open allure-report
```

### 4. Continuous Integration

For CI/CD pipelines, use:

```bash
# Generate report without opening
npx allure generate test-results/allure-results -o allure-report

# Archive the report as artifact
```

## 📊 Report Sections

The Allure report includes:

### 1. Overview Dashboard
- Total tests count
- Passed/Failed/Skipped statistics
- Duration summary
- Flaky tests detection

### 2. Categories
- Tests grouped by status (passed, failed, broken, skipped)
- Flaky tests identification

### 3. Suites
- Tests organized by test files
- Detailed execution timeline

### 4. Graphs
- Test results trends
- Duration distribution
- Status distribution

### 5. Timeline
- Visual representation of test execution order
- Duration of each test

### 6. Behaviors
- Tests grouped by features and stories
- User-centric view of test coverage

### 7. Packages
- Tests organized by packages/modules

### 8. Attachments
- Screenshots
- Videos
- Logs
- Custom attachments

## 🔍 Analyzing Test Results

### Common Issues

- **Failed Tests**: Check the failure message and stack trace
- **Flaky Tests**: Tests that fail intermittently - investigate the root cause
- **Broken Tests**: Tests that fail consistently - fix the test or application issue
- **Skipped Tests**: Tests intentionally skipped - check if they need to be enabled

### Best Practices

1. **Use Descriptive Test Names**: Make it clear what the test is verifying
2. **Add Clear Descriptions**: Explain the purpose and expected behavior
3. **Use Tags**: Categorize tests by type, priority, or component
4. **Add Severity Levels**: Help prioritize test execution and debugging
5. **Include Screenshots**: For UI tests, capture screenshots on failure
6. **Use Steps**: Break complex tests into logical steps
7. **Clean Up**: Ensure tests don't leave artifacts or affect other tests

## 📚 Additional Resources

- [Allure Framework Documentation](https://docs.qameta.io/allure/)
- [Allure Playwright Adapter](https://github.com/allure-framework/allure2/tree/master/plugins/allure-playwright)
- [Playwright Documentation](https://playwright.dev/)
- [Allure Report Examples](https://demo.qameta.io/)

## 🛠️ Troubleshooting

### Issue: Allure report not generating

**Solution**: 
- Ensure Allure CLI is installed globally
- Verify reporter configuration in playwright.config.ts
- Check that test results are being saved to the correct folder

### Issue: Tests marked as failed but should pass

**Solution**:
- Check for timing issues - increase timeouts if needed
- Verify element selectors are correct
- Ensure page navigation is complete before assertions

### Issue: Flaky tests detected

**Solution**:
- Investigate the root cause of intermittent failures
- Add retries for known flaky tests
- Use `test.describe.serial` for tests that must run sequentially

## 📝 Example Test File

See `230_AllureReport.spec.ts` for a complete example:

```typescript
import {test, expect} from "@playwright/test";
import * as allure from "allure-js-commons";

test("Verify the VWO login", async({page}) => {
    await allure.epic("VWO login verification");
    await allure.description("Verify that the login page works");
    await allure.feature("Essential features");
    await allure.story("Authentication");

    console.log("Open VWO app ✅");
    await page.goto("https://app.vwo.com/#/login");
    await page.fill("#login-username", "qrfcua18394@aiqseo.com");
    await page.fill("#login-password", "UDH@aiqseo123");

    console.log("Entered valid credentials ✅");
    await page.waitForTimeout(1000);
    await page.click("#js-login-btn");

    console.log("Clicked on Sign--in button");
    await page.waitForURL(/#\/(dashboard|home)/, {timeout: 10000});
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle("Dashboard");
    await expect(page).toHaveURL("https://app.wingify.com/#/dashboard?accountId=1275982");

    console.log("Log in success. Opened dashboard page ✅");
});
```

## 🎯 Next Steps

1. ✅ Add Allure reporter to your Playwright configuration
2. ✅ Install Allure CLI globally
3. ✅ Run tests and generate reports
4. 📝 Add Allure annotations to your existing tests
5. 🔧 Set up CI/CD integration for automatic report generation
6. 📊 Analyze test results and improve test coverage

---

**Last Updated**: September 2026

**Maintainer**: Prajwal Belkhode

**For questions or issues**: Refer to the project documentation or Allure Framework documentation