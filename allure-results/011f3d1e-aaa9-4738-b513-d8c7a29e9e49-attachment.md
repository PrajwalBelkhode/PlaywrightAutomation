# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure-Reports\230_AllureReport.spec.ts >> Verify the VWO login
- Location: tests\05_Allure-Reports\230_AllureReport.spec.ts:4:5

# Error details

```
TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main "Application main content" [ref=e3]:
    - generic [ref=e7]:
      - generic [ref=e10]:
        - img "Wingify" [ref=e12]
        - paragraph [ref=e13]: Sign in to Wingify platform
        - generic [ref=e14]:
          - img [ref=e16]
          - generic [ref=e19]: Your account has been deleted. Please sign up for a new account.
        - list [ref=e22]:
          - listitem [ref=e23]:
            - generic [ref=e24] [cursor=pointer]: Email address
            - textbox "Email address" [ref=e26]:
              - /placeholder: Enter email ID
              - text: crubij1654@supermmw.online
          - listitem [ref=e27]:
            - generic [ref=e28] [cursor=pointer]: Password
            - generic [ref=e29]:
              - textbox "Password" [ref=e30]:
                - /placeholder: Enter password
              - button "Toggle password visibility" [ref=e31] [cursor=pointer]:
                - img [ref=e32]
          - listitem [ref=e34]:
            - button "Forgot Password?" [ref=e35] [cursor=pointer]
          - listitem [ref=e36]:
            - generic [ref=e38] [cursor=pointer]:
              - generic [ref=e39]: Remember me
              - img [ref=e41]
          - listitem [ref=e43]:
            - button "Sign in" [active] [ref=e44] [cursor=pointer]:
              - generic [ref=e45]: Sign in
          - listitem [ref=e46]:
            - heading "Or" [level=6] [ref=e48]
          - listitem [ref=e50]:
            - button "Sign in with Google" [ref=e52] [cursor=pointer]:
              - generic [ref=e53]:
                - img [ref=e54]
                - generic [ref=e56]: Sign in with Google
          - listitem [ref=e58]:
            - button "Sign in using SSO" [ref=e59] [cursor=pointer]:
              - img [ref=e60]
              - generic [ref=e62]: Sign in using SSO
          - listitem [ref=e63]:
            - button "Sign in with Passkey" [ref=e64] [cursor=pointer]:
              - img [ref=e65]
              - generic [ref=e67]: Sign in with Passkey
          - listitem [ref=e68]:
            - text: Don't have an account?
            - link "Start a free trial" [ref=e69] [cursor=pointer]:
              - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
          - listitem [ref=e70]:
            - text: By continuing, you agree to Wingify's
            - link "Privacy policy" [ref=e71] [cursor=pointer]:
              - /url: https://wingify.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e72] [cursor=pointer]:
              - /url: https://wingify.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e77]:
        - generic [ref=e78]:
          - img "Wingify abtasty logo" [ref=e79]
          - img [ref=e80]
          - img "Wingify abtasty logo" [ref=e82]
        - heading "Welcome to Wingify!" [level=1] [ref=e83]
        - heading "app.vwo.com has transitioned to app.wingify.com" [level=2] [ref=e84]
        - heading "Your plans, features, and data remain unchanged." [level=2] [ref=e85]
        - link "Learn More" [ref=e86] [cursor=pointer]:
          - /url: https://vwo.com/product-updates/vwo-wingify-aligning-our-domain/
          - generic [ref=e87]: Learn More
          - img [ref=e88]
  - img [ref=e90]:
    - generic: "'"
    - generic:
      - img
  - img [ref=e91]
  - img [ref=e92]
  - img [ref=e93]
  - img [ref=e94]
  - img [ref=e95]
  - img [ref=e96]
  - img [ref=e97]
  - img [ref=e98]
  - img [ref=e99]
  - img [ref=e100]
  - img [ref=e101]
  - img [ref=e102]
  - img [ref=e103]
  - img [ref=e104]
  - img [ref=e105]
  - img [ref=e106]
  - img [ref=e107]
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test"
  2  | import * as allure from "allure-js-commons";
  3  | 
  4  | test ("Verify the VWO login", async({page}) => {
  5  | 
  6  |     await allure.epic("VWO login verification");
  7  |     await allure.description("Verify that the login page works");
  8  |     await allure.feature("Essential features");
  9  |     await allure.story("Authentication");
  10 | 
  11 |     console.log("Open VWO app ✅");
  12 |     await page.goto("https://app.vwo.com/#/login");
  13 |     await page.fill("#login-username", "crubij1654@supermmw.online");
  14 |     await page.fill("#login-password", "VwoAdmin@#123");
  15 | 
  16 |     console.log("Entered valid credentials ✅");
  17 | 
  18 |     await page.waitForTimeout(1000);
  19 |     await page.click("#js-login-btn");
  20 | 
  21 |     console.log("Clicked on Sign--in button");
  22 | 
> 23 |     await page.waitForURL(/#\/(dashboard|home)/, {timeout: 10000});
     |                ^ TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
  24 |     await page.waitForTimeout(2000);
  25 |     await expect(page).toHaveTitle("Dashboard");
  26 |     await expect(page).toHaveURL("https://app.vwo.com/#/dashboard?accountId=1231016");
  27 | 
  28 |     console.log("Log in success. Opened dashboard page ✅");
  29 | });
```