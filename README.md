# Klipp Privacy Policy

Responsive Swedish and English privacy-policy site for the iOS app Klipp.

The policy covers:

- local storage and optional private iCloud/CloudKit sync;
- selected Photos access and optional deletion of originals;
- Firebase Analytics and Crashlytics;
- anonymous Firebase Authentication and Firestore for Spread the Word;
- StoreKit purchases and Klipp Pro;
- link-preview metadata requests;
- retention, deletion, user choices, and contact details.

## Local development

Requires Node.js 22.13 or newer.

```bash
pnpm install
pnpm run dev
```

## Production build

```bash
pnpm run build
```

The primary page is in `app/page.tsx`, styling is in `app/globals.css`, and the
social preview is `public/og.png`.

## Before publishing updates

Review the policy whenever Klipp changes its SDKs, permissions, storage,
analytics events, account features, or contact details. The text describes the
implementation reviewed on July 24, 2026 and is not a substitute for legal
advice.
