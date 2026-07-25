# 🚀 Quick Setup Guide for BM Solicitor Website

Follow these steps to run the project on your local machine:

## Step 1: Prerequisites
Install these first if you don't have them:
- **Node.js** (v18 or higher) - Download from https://nodejs.org
- **pnpm** (recommended) - Install with: `npm install -g pnpm`

## Step 2: Create index.html
Create a file named `index.html` in the root directory (same level as package.json) with this content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="BM Solicitor (Pvt) Limited - Professional legal services" />
    <title>BM SOLICITOR (PVT) LIMITED</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Step 3: Install Dependencies
Open terminal in the project folder and run:

```bash
pnpm install
```

Or if using npm:
```bash
npm install
```

## Step 4: Run Development Server
Start the development server:

```bash
pnpm run dev
```

Or with npm:
```bash
npm run dev
```

## Step 5: Open in Browser
The website will automatically open at:
```
http://localhost:5173
```

## 🎉 That's it! Your website is running!

---

## 📝 Common Issues & Solutions

### Issue: "command not found: pnpm"
**Solution**: Install pnpm first:
```bash
npm install -g pnpm
```

### Issue: "Port 5173 is already in use"
**Solution**: Either close the other application or use a different port:
```bash
pnpm run dev -- --port 3000
```

### Issue: Dependencies not installing
**Solution**: Clear cache and reinstall:
```bash
rm -rf node_modules
pnpm install
```

### Issue: index.html not found
**Solution**: Make sure you created the index.html file in the root directory (Step 2)

---

## 📁 Project Structure After Setup

```
your-project/
├── index.html          ← You need to create this
├── package.json
├── vite.config.ts
├── src/
│   ├── main.tsx        ← Entry point
│   ├── app/
│   ├── imports/
│   └── styles/
├── node_modules/       ← Created after npm/pnpm install
└── README.md
```

---

## 🛠️ Available Commands

- `pnpm run dev` - Start development server (hot reload enabled)
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally

---

## 📞 Need Help?

If you face any issues:
1. Make sure Node.js v18+ is installed: `node --version`
2. Make sure index.html is created in root directory
3. Clear node_modules and reinstall dependencies
4. Check that all files are in correct locations

---

## 🌐 Deployment

To deploy to production:

1. Build the project:
   ```bash
   pnpm run build
   ```

2. Upload the `dist/` folder to your hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting

---

**© 2026 BM SOLICITOR (PVT) LIMITED**
