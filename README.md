# Where's The Will - Secure Will Storage Website

A modern, professional React website for Where's The Will - a secure will storage and document safekeeping service based in Dallas, Texas.

## Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (Button, Icon, etc.)
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── Marquee.jsx     # Scrolling text marquee
│   ├── Features.jsx    # Features grid section
│   ├── Process.jsx     # How it works section
│   ├── Pricing.jsx     # Pricing card section
│   ├── About.jsx       # About/story section
│   ├── FAQ.jsx         # FAQ accordion section
│   ├── Contact.jsx     # Contact form section
│   ├── CTA.jsx         # Call-to-action section
│   └── Footer.jsx      # Footer component
├── hooks/              # Custom React hooks
│   ├── useScrollReveal.js   # Intersection Observer hook
│   └── useScrollPosition.js # Scroll position hook
├── utils/              # Utility functions & constants
│   ├── constants.js    # Company info, content data
│   └── scrollToSection.js # Smooth scroll utility
├── App.jsx             # Main app component
├── index.js            # Entry point
└── index.css           # Global styles & Tailwind
```

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment

The `build/` folder can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `build/` folder or connect your repo
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload to S3 bucket with static website hosting

## Features

- Modern, editorial design with mixed serif/sans typography
- Smooth scroll-triggered animations
- Responsive design for all screen sizes
- Accessible accordion FAQ section
- Contact form with validation
- Scrolling marquee banner
- Custom Tailwind configuration

## Customization

### Company Information

Edit `src/utils/constants.js` to update:
- Company name, tagline
- Address, phone, email
- Pricing
- FAQ content
- Feature descriptions

### Colors

Edit `tailwind.config.js` to customize the color palette:
- `gold` - Primary accent color
- `primary` - Dark text/background
- `cream` - Light background

### Typography

The site uses:
- **Space Grotesk** - Sans-serif headings and body text
- **Instrument Serif** - Italic accent text

## License

Private - All rights reserved.
# WhereMyWill
