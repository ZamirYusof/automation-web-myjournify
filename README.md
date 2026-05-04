## 🚀 Getting Started

This project uses **Playwright** for end‑to‑end testing. To run it locally, please follow these steps:

### 1. Prerequisites
* **Visual Studio (Windows)**  
  Download and install Visual Studio [(visualstudio.microsoft.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fvisualstudio.microsoft.com%2Fdownloads%2F").  
  During installation, make sure to include the **Node.js development workload** so you can work with TypeScript and Playwright smoothly.
* **Git**  
  Install from [git-scm.com](https://git-scm.com).  
* **Node.js (LTS)**  
  Install from [nodejs.org](https://nodejs.org).  
  Verify installation:
  ```bash
  node -v
  npm -v
  ```

### 2. Clone the Repository
Open **Visual Studio Developer Command Prompt** or your terminal, then run:
```bash
git clone https://github.com/ZamirYusof/automation-web-myjournify.git
cd automation-web-myjournify
```

### 3. Install Dependencies
Inside the project folder:
```bash
npm ci
```

### 4. Install Playwright Browsers
Playwright requires browser binaries. Install them with:
```bash
npx playwright install --with-deps
```

### 5. Run Tests
From Visual Studio’s integrated terminal:
* Run all browsers (Chromium, Firefox, WebKit):
  ```bash
  npx playwright test
  ```
* Run only Chromium:
  ```bash
  npx playwright test --project=chromium
  ```

### 6. View Test Report
After the test run, open the HTML report:
```bash
npx playwright show-report
```
This launches the Playwright report in your browser with logs, steps, and screenshots.

---

### 🔎 Notes
* Visual Studio will let you manage the project structure, edit TypeScript files, and run Playwright commands directly in the terminal.  
* The Playwright config (`playwright.config.ts`) defines which browsers run and where reports are saved.  
* Screenshots and logs are automatically attached to the report for easy debugging.  
* CI/CD setup is included via GitHub Actions (`.github/workflows/playwright.yml`), so tests also run automatically in the cloud.
