# howlongvegan

A high-precision, real-time live timer tracking how long someone has been vegan.

## Overview
This is a plain static website built with:
- **HTML5** for page layout and structure.
- **Vanilla CSS3** featuring CSS variables, flex/grid layouts, responsive typography, and glassmorphic card styling.
- **Vanilla Javascript** for computing accurate calendar date differences (years, months, days, hours, minutes, and seconds) without any third-party dependencies.

## Structure
- `index.html` - Main markup and entrypoint.
- `style.css` - Custom styling and design system.
- `app.js` - Timer logic and DOM updating script.
- Icons and manifest files (from the original setup) located at the root for easy deployment.

## Running Locally
Since this is a static site, you can run it by simply opening `index.html` in any web browser, or by serving the root directory using a simple local server:

Using Python:
```bash
python -m http.server 8000
```

Using Node (if installed):
```bash
npx serve .
```
