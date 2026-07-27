# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 209.spec.ts >> Verify the title of the app.vwo.com
- Location: tests\209.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Login - VWO"
Received: "Login - Wingify"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    9 × unexpected value "Wingify - Application"
    5 × unexpected value "Login - Wingify"

```

```yaml
- main "Setup content"
- main "Application main content":
  - img "Wingify"
  - list:
    - listitem:
      - textbox "Email address":
        - /placeholder: Enter email ID
    - listitem:
      - textbox "Password":
        - /placeholder: Enter password
      - button "Toggle password visibility"
    - listitem:
      - button "Forgot Password?"
    - listitem: Remember me
    - listitem:
      - button "Sign in"
    - listitem:
      - heading "Or" [level=6]
    - listitem:
      - button "Sign in with Google"
    - listitem:
      - button "Sign in using SSO"
    - listitem:
      - button "Sign in with Passkey"
    - listitem: New to Wingify?
    - listitem:
      - link "Start a FREE TRIAL":
        - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
    - listitem:
      - text: By continuing, you agree to Wingify's
      - link "Privacy policy":
        - /url: "https://{{$root.VWO_DOMAIN.websiteWingify}}/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login"
      - text: "&"
      - link "Terms":
        - /url: "https://{{$root.VWO_DOMAIN.websiteWingify}}/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login"
      - text: .
  - img "Wingify abtasty logo"
  - img "Wingify abtasty logo"
  - heading "Welcome to Wingify!" [level=1]
  - heading "app.vwo.com has transitioned to app.wingify.com" [level=2]
  - heading "Your plans, features, and data remain unchanged." [level=2]
  - link "Learn More":
    - /url: https://vwo.com/product-updates/vwo-wingify-aligning-our-domain/
```

# Test source

```ts
  1 | import {test, expect} from '@playwright/test';
  2 | 
  3 | test('Verify the title of the app.vwo.com', async ({page}) =>{
  4 |     await page.goto("https://app.vwo.com");
> 5 |     await expect(page).toHaveTitle("Login - VWO");
    |                        ^ Error: expect(page).toHaveTitle(expected) failed
  6 | });
```