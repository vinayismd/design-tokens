# Design Token Generator 🎨

A powerful automation tool that fetches design tokens (Colors, Typography, Spacing) from a **Google Sheet** and generates platform-specific code for **Android (Jetpack Compose)** and **Web (CSS)**.

## Project Overview

This module serves as the bridge between design and engineering. By maintaining design tokens in a synchronized Google Sheet, this tool ensures that your UI remains consistent across different platforms with zero manual copy-pasting.

### Supported Outputs
- **Android**: Generates Kotlin objects (`AppColors.kt`, `AppSpacing.kt`, `AppTypography.kt`) for use in Jetpack Compose.
- **Web**: Generates a standard CSS file (`tokens.css`) with CSS variables.

---

## Benefits

*   **Single Source of Truth**: Designers update the Google Sheet, and developers run a single command to sync those changes.
*   **Reduced Human Error**: No more manual hex code entry or font size discrepancies.
*   **Zero-Effort Multi-platform**: One sheet drives both mobile and web styling.
*   **Type Safety**: Android generates strongly-typed Kotlin objects.

---

## Setup & Configuration

### 1. Prerequisites
- Node.js installed.
- A Google Cloud Service Account with a `service_account.json` file in the root directory (ensure this is never committed!).

### 2. Configuration
The sheet configuration is managed in `sheet/config.json`:
```json
{
  "spreadsheetId": "YOUR_SPREADSHEET_ID",
  "ranges": {
    "colors": "colors!A:F",
    "typography": "typography!A:G",
    "spacing": "spacing!A:D"
  }
}
```

### 3. Installation
Install the necessary dependencies:
```bash
npm install
```

---

## Usage

To fetch the latest tokens and regenerate the output files, simply run:

```bash
npm run generate
```

### How it Works:
1.  **Fetch**: The script uses `googleapis` to read the specified ranges from your Google Sheet.
2.  **Normalize**: Raw rows are converted into structured JavaScript objects.
3.  **Generate**: Platform-specific generators (`src/android.ts` and `src/web.ts`) write the formatted code to the `output/` directory.

---

## Output Structure

```text
output/
├── android/
│   ├── AppColors.kt
│   ├── AppSpacing.kt
│   └── AppTypography.kt
└── web/
    └── tokens.css
```

> [!IMPORTANT]
> Files in the `output/` folder are auto-generated. Do **not** modify them manually! Any manual changes will be overwritten the next time the generator runs.
