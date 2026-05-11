# Cole Zill Portfolio

Personal portfolio landing page for software, systems, and security engineering work.

Live site: [https://cole-z.github.io/](https://cole-z.github.io/)

## Overview

This is a static HTML/CSS/JavaScript portfolio page with a 90s-inspired software/security aesthetic, responsive layout, and light/dark theme toggle.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static file server.

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Files

- `index.html` - main portfolio page
- `styles.css` - responsive styling and light/dark themes
- `script.js` - theme toggle behavior
- `assets/cole-zill-resume.docx` - downloadable resume

## Updating GitHub Pages

When changing styles, upload both `index.html` and `styles.css`. If the live site still shows old styling, bump the version number in the stylesheet link inside `index.html`, for example:

```html
<link rel="stylesheet" href="./styles.css?v=20260511-3">
```

Then commit the updated `index.html` and `styles.css` again.
