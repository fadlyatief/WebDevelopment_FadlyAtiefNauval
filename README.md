# RISTEKForms

A dark-themed, frontend-only form management interface built with vanilla HTML, CSS, and JavaScript.

---

## Overview

DummyForms is a multi-page web application that allows users to register, log in, view a list of forms, and preview individual form entries. All pages share a consistent dark navy design system.

---

## Project Structure

```
/
├── index.html            # Login page
├── register.html         # Registration page
├── form.html             # Dashboard — lists all forms
├── form-preview.html     # Preview page for a single form
│
├── css/
│   ├── style.css         # Shared styles for login & register pages
│   ├── components.css    # Shared component styles (navbar, inputs, buttons, form cards)
│   ├── formstyle.css     # Styles specific to the form dashboard (form.html)
│   └── previewstyle.css  # Styles specific to the form preview page
│
├── js/
│   ├── loginscript.js        # Logic for the login page
│   ├── script.js             # Logic for the register page
│   ├── formscript.js         # Logic for the form dashboard (dummy data + rendering)
│   ├── formpreviewscript.js  # Logic for the form preview page
│   └── components/
│       └── components.js     # Reusable render functions (navbar, inputs, buttons, form cards)
│
└── img/
    └── logo.jpeg
```

---

## Pages

### `index.html` — Login
The entry point. Contains a username and password field with a **Log In** button. Links to the register page for new users. Passes the username as a URL query param to `form.html` on submit.

### `register.html` — Register
Account creation form with fields for Username, E-mail, Password, and Confirm Password. Validates that both password fields match before submission.

### `form.html` — Form Dashboard
Displays the authenticated user's forms as a list of clickable card rows. Each card shows the form name (with a unique gradient pill accent), the last updated time, and total response count. A header row contains two color swatches and an **Add form** button.

### `form-preview.html` — Form Preview
Shows the details of a single selected form — its title, metadata, and a list of questions rendered as disabled input fields. Includes a back link to return to the dashboard.

---

## Components (`components.js`)

All UI components are rendered via JavaScript functions and injected into the DOM:

| Function | Description |
|---|---|
| `renderNavbar({ variant, username })` | Renders the top navbar. Variant options: `"login"`, `"register"`, `"dashboard"` |
| `renderInput({ label, id, type, placeholder, required })` | Renders a labeled text input |
| `renderButton({ label, variant, type, id, style })` | Renders a styled button (`"solid"` or `"transparent"`) |
| `renderFormCard({ id, name, lastUpdated, totalResponses })` | Renders a form row card with a cycling gradient pill |

---

## Design System

All pages use a unified dark color palette:

| Token | Value | Usage |
|---|---|---|
| Background | `#12111e` | Page background |
| Card | `#1e1d30 → #191828` | Panel / card gradient |
| Surface | `#201f33` | Form card row background |
| Input | `#23213a` | Input field background |
| Border | `#2a2840` | Subtle borders and dividers |
| Text primary | `#ffffff` | Headings and body text |
| Text muted | `#8a87aa` | Secondary info, placeholders |
| Accent | `#a78bfa` | Purple highlight (hover, focus) |

Pill accent icons (the small vertical bars used before titles and form names) use per-item gradients cycling through purple/blue, red/orange, indigo/purple, and green/blue. The pill functions as "Form Tags", so that users can mark per-form with some colors.

---

## Running Locally

No build step required. Open any `.html` file directly in a browser, or serve the folder with any static file server:

```bash
npx serve .
# or
python -m http.server 8080
```

Then navigate to `http://localhost:8080`.

---

## Notes

- All data is currently **hardcoded dummy data** in `formscript.js` and `formpreviewscript.js`. There is no backend or API integration.
- Authentication is not enforced — the username is passed via URL query parameters (`?username=...`).
- The **Add form**, color swatch buttons, and form submission handlers are UI placeholders and do not persist any data.
