# 09 — Keyboard, Hover, Drag & Drop, and Right-Click Tests

This section contains Playwright exercises covering keyboard interactions, hover menus, drag-and-drop operations, and right-click context menus.

---

## Test Files

| # | File | Topic |
|---|------|-------|
| 242 | `242_Keyboard.spec.ts` | Keyboard key press events |
| 244 | `244_Spicejet_Hover.spec.ts` | Hover menus & submenus |
| 245 | `245_Drag_and_Drop.spec.ts` | Simple drag and drop |
| 246 | `246_Drag_and_Drop_advance_Kanban.spec.ts` | Advanced drag and drop — Kanban board |
| 247 | `247_Right_Click.spec.ts` | Right-click context menu |

---

## Exercises & Key Commands

### Exercise 242 — Keyboard

**URL:** `https://www.toptal.com/developers/keycode`

Simulates keyboard key presses on a keycode detection page and captures screenshots for each key.

**Key Playwright Commands:**

- `page.keyboard.press('A')` — Press a single key
- `page.keyboard.press('ArrowLeft')` — Press a special/navigation key
- `page.keyboard.press('Shift+O')` — Press a key combination (modifier + key)
- `page.screenshot({ path: 'A.png' })` — Capture a screenshot

---

### Exercise 244 — Hover (SpiceJet)

**URLs:**
- `https://www.spicejet.com/`
- `https://app.thetestingacademy.com/playwright/widgets/hover-menu`

Hovers over navigation menu items to reveal submenus, then clicks on a submenu option. Also extracts all submenu item texts.

**Key Playwright Commands:**

- `page.getByText('Add-ons', { exact: true }).hover()` — Hover over an element by its text
- `page.getByText('FlyEarly', { exact: true }).click()` — Click a submenu item revealed by hover
- `page.locator('[data-testid="nav-add-ons"] .submenu .submenu-item').allInnerTexts()` — Extract all inner texts from matching elements

---

### Exercise 245 — Drag and Drop (Simple)

**URL:** `https://the-internet.herokuapp.com/drag_and_drop`

Drags column A onto column B and verifies the columns swap their content.

**Key Playwright Commands:**

- `page.locator('#column-a')` — Locate elements by CSS ID selector
- `column_A.dragTo(column_B)` — Drag one element to another
- `expect(column_A).toHaveText('A')` — Assert element text content (before and after drag)

---

### Exercise 246 — Drag and Drop Advanced (Kanban Board)

**URL:** `https://app.thetestingacademy.com/playwright/widgets/dnd`

Moves cards across Kanban board columns (To-Do → In Progress → Review → Done) and captures the board state.

**Key Playwright Commands:**

- `page.getByTestId('card-write-spec').dragTo(page.locator('[data-status="in-progress"]'))` — Drag a card (by test ID) to a column (by data attribute)
- `page.getByTestId('card-write-spec').dragTo(page.getByTestId('col-review'))` — Drag between columns using test IDs
- `page.getByTestId('card-update-readme').dragTo(page.getByTestId('col-done'))` — Move another card to the Done column
- `page.getByRole('button', { name: 'Snapshot state' }).click()` — Click a button by its accessible role and name
- `page.getByTestId('board-output').innerText()` — Read the snapshot output text

---

### Exercise 247 — Right-Click (Context Menu)

**URL:** `https://app.thetestingacademy.com/playwright/widgets/context-menu`

Right-clicks on an element to open a custom context menu, extracts all menu options, and clicks one.

**Key Playwright Commands:**

- `page.locator('span.context-menu-one').first().click({ button: 'right' })` — Perform a right-click (context click)
- `page.locator('ul.context-menu-list span').allInnerTexts()` — Extract all context menu option texts
- `page.getByText('Copy', { exact: true }).first().click()` — Click a specific context menu option

---

## Running the Tests

### Run all tests in this section

```bash
npx playwright test tests/09_Keyboard_Hover_Drag_Drop
```

### Run individual test files

```bash
# Exercise 242 — Keyboard
npx playwright test tests/09_Keyboard_Hover_Drag_Drop/242_Keyboard.spec.ts

# Exercise 244 — Hover
npx playwright test tests/09_Keyboard_Hover_Drag_Drop/244_Spicejet_Hover.spec.ts

# Exercise 245 — Drag and Drop (Simple)
npx playwright test tests/09_Keyboard_Hover_Drag_Drop/245_Drag_and_Drop.spec.ts

# Exercise 246 — Drag and Drop Advanced (Kanban)
npx playwright test tests/09_Keyboard_Hover_Drag_Drop/246_Drag_and_Drop_advance_Kanban.spec.ts

# Exercise 247 — Right Click
npx playwright test tests/09_Keyboard_Hover_Drag_Drop/247_Right_Click.spec.ts
```

### Run in headed mode (see the browser)

```bash
npx playwright test tests/09_Keyboard_Hover_Drag_Drop --headed
```

### Run in debug mode (step through)

```bash
npx playwright test tests/09_Keyboard_Hover_Drag_Drop --debug
```

---

## Playwright API Summary

| API | Purpose |
|-----|---------|
| `page.keyboard.press()` | Simulate keyboard key presses |
| `locator.hover()` | Hover over an element |
| `locator.dragTo(target)` | Drag an element to a target element |
| `locator.click({ button: 'right' })` | Right-click on an element |
| `page.getByText()` | Locate element by visible text |
| `page.getByTestId()` | Locate element by `data-testid` attribute |
| `page.getByRole()` | Locate element by ARIA role |
| `page.locator()` | Locate element by CSS selector |
| `locator.allInnerTexts()` | Get text from all matching elements |
| `locator.innerText()` | Get text from a single element |
| `page.screenshot()` | Capture a screenshot |
| `expect(locator).toHaveText()` | Assert element has expected text |