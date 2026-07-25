# BM Solicitor (Pvt) Limited - Corporate Website

Professional law firm website built with React, TypeScript, and Tailwind CSS.

## 🚀 Technologies Used

- **React 18.3.1** - UI Framework
- **TypeScript** - Type Safety
- **React Router 7.13.0** - Navigation
- **Tailwind CSS 4.1.12** - Styling
- **Motion (Framer Motion)** - Animations
- **Vite 6.3.5** - Build Tool
- **Lucide React** - Icons

## 📋 Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm

## 🛠️ Installation & Setup

### 1. Clone or Download the Project
```bash
cd /path/to/project
```

### 2. Install Dependencies
Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

### 3. Run Development Server
Using pnpm:
```bash
pnpm run dev
```

Or using npm:
```bash
npm run dev
```

The website will open at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── pages/           # All page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── PracticeAreas.tsx
│   │   │   ├── Team.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── NotFound.tsx
│   │   ├── TopBar.tsx       # Top contact bar
│   │   ├── Header.tsx       # Main navigation
│   │   ├── Footer.tsx       # Footer component
│   │   ├── NewsTicker.tsx   # Scrolling news
│   │   └── Root.tsx         # Layout wrapper
│   ├── routes.tsx           # Route configuration
│   └── App.tsx              # Main app component
├── imports/                 # Images and assets
│   ├── image.png
│   ├── image-1.png
│   ├── image-2.png          # Logo
│   └── image-3.png
├── styles/
│   ├── theme.css            # Color theme variables
│   └── fonts.css            # Font imports
└── main.tsx                 # Entry point

package.json                 # Dependencies
vite.config.ts              # Vite configuration
tailwind.config.js          # Tailwind config
tsconfig.json               # TypeScript config
```

## 🎨 Color Scheme

- **Navy Blue**: `#1B263B` - Main headings and navbar
- **Slate Grey**: `#415A77` - Secondary text
- **Light Grey**: `#E0E1DD` - Backgrounds
- **Gold**: `#FFB703` - Primary buttons and accents
- **Red**: `#E63946` - Secondary accents

## 📱 Features

✅ Fully Responsive Design
✅ Multi-page Navigation with React Router
✅ Animated Hero Slideshow
✅ Scrolling News Ticker
✅ Contact Form
✅ Practice Areas Showcase
✅ Team Member Profiles
✅ Social Media Integration
✅ Modern Animations
✅ SEO Friendly

## 🔧 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build

## 📝 Customization

### Update Contact Information
Edit the following files:
- `src/app/components/TopBar.tsx` - Top bar contact details
- `src/app/components/Footer.tsx` - Footer contact info
- `src/app/components/pages/Contact.tsx` - Contact page details

### Update Logo
Replace the logo at:
- `src/imports/image-2.png`

### Update Colors
Edit color variables in:
- `src/styles/theme.css`

### Update Services
Edit practice areas in:
- `src/app/components/pages/PracticeAreas.tsx`

### Update Team Members
Edit team data in:
- `src/app/components/pages/Team.tsx`

## 🌐 Deployment

### Build for Production
```bash
pnpm run build
```

The built files will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📞 Support

For any issues or questions, contact:
- **Email**: info@bmsolicitor.pk
- **Phone**: +92-XXX-XXXXXXX

## 📄 License

© 2026 BM SOLICITOR (PVT) LIMITED. All rights reserved.
Registered with Punjab Bar Council.
