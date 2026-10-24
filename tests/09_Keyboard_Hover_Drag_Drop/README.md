# Keyboard, Hover, and Drag & Drop Tests

This directory contains Playwright test files for testing keyboard interactions, hover actions, and drag and drop functionality.

## Test Files

- `keyboard_tests.spec.ts`: Tests for keyboard interactions
- `hover_tests.spec.ts`: Tests for hover actions
- `drag_drop_tests.spec.ts`: Tests for drag and drop functionality

## Running the Tests

To run these tests, use the following command:

```bash
npx playwright test tests/09_Keyboard_Hover_Drag_Drop
```

## Test Scenarios Covered

### Keyboard Tests

- Basic keyboard input
- Keyboard shortcuts
- Special key combinations

### Hover Tests

- Element hover detection
- Tooltip appearance
- Hover-triggered actions

### Drag & Drop Tests

- Basic drag and drop
- Drag and drop between containers
- Drag and drop with constraints

## Requirements

- Node.js
- Playwright

## Setup

1. Install Node.js
2. Install Playwright:

```bash
npm init playwright@latest
```

## Contributing

Contributions are welcome. Please follow the standard GitHub pull request process.

## License

This project is licensed under the MIT License.