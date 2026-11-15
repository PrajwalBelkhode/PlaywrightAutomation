# 13 — File Upload

Upload files using Playwright — single file via a real file path, and multiple files using in-memory buffers. Covers `setInputFiles()` with both approaches.

---

## 🎯 Learning Objectives

- Upload a single file using `setInputFiles()` with a local file path.
- Upload multiple files using in-memory `Buffer` objects (no real file needed on disk).
- Build file paths dynamically with Node.js `path.join(__dirname, ...)`.
- Assert successful upload by checking the response text on the page.

---

## 📁 Test Files

| # | File | Topic |
|---|------|-------|
| 252 | [`252_File-Upload.spec.ts`](./252_File-Upload.spec.ts) | Single file upload from disk |
| 253 | [`253_Multi_File_Upload.spec.ts`](./253_Multi_File_Upload.spec.ts) | Multi-file upload using in-memory buffers |

### Test Data

| File | Purpose |
|------|---------|
| [`testdata.txt`](./testdata.txt) | Sample TSV data file uploaded in test 252 |
| `SS1.png`, `SS2.png` | Screenshot images present in the directory (referenced by name in test 253) |

---

## 📝 Scenarios

### 252 — Single File Upload

- Navigates to the upload page.
- Builds an absolute path to `testdata.txt` using `path.join(__dirname, ...)`.
- Sets the file on `#file-upload` input via `setInputFiles([filePath])`.
- Clicks submit and asserts `#uploaded-files` contains `testdata.txt`.

### 253 — Multiple File Upload (In-Memory Buffers)

- Navigates to PatternFly's multi-file upload component.
- Uses `setInputFiles()` with an array of **buffer objects** — each specifying `name`, `mimeType`, and `buffer`:
  ```ts
  await page.locator('input[type="file"]').setInputFiles([
    { name: 'SS1.png', mimeType: 'image/jpeg', buffer: Buffer.from('...') },
    { name: 'SS2.png', mimeType: 'image/jpeg', buffer: Buffer.from('...') },
  ]);
  ```
- Demonstrates uploading without reading actual files from disk.

---

## 🔑 Key Playwright Concepts

| Concept | Usage |
|---------|-------|
| **`setInputFiles(filePaths)`** | Upload real files from disk via an `<input type="file">` |
| **`setInputFiles(bufferObjects)`** | Upload synthetic files from in-memory `Buffer` — no disk read needed |
| **`path.join(__dirname, ...)`** | Build reliable absolute paths relative to the spec file |
| **`expect().toContainText()`** | Assert upload success by checking page content |
| **`beforeEach` / `afterEach`** | Navigate to URL before each test, close page after |

---

## 🌐 Target Sites

| Site | Used In |
|------|---------|
| [The Internet — File Upload](https://the-internet.herokuapp.com/upload) | 252 |
| [PatternFly — Multiple File Upload](https://www.patternfly.org/components/file-upload/multiple-file-upload/) | 253 |

---

## ▶️ Run the Tests

```bash
# Run all tests in this folder
npx playwright test tests/13_File_Upload/

# Run single file upload test
npx playwright test tests/13_File_Upload/252_File-Upload.spec.ts

# Run multi-file upload test
npx playwright test tests/13_File_Upload/253_Multi_File_Upload.spec.ts

# Run in headed mode
npx playwright test tests/13_File_Upload/ --headed
```
