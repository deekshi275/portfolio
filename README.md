# Portfolio - React Edition

A sophisticated, animated portfolio built with React, featuring a stunning home page with 3D effects, animated code blocks, and interactive elements.

## Features

### 🎨 Enhanced Home Page
- **3D Terminal Window** with perspective effects
- **Animated Code Blocks** that type out Python code
- **Floating Particles** that respond to mouse movement
- **Code Rain Effect** (Matrix-style characters)
- **Parallax Background Orbs** that follow mouse movement
- **Animated Grid Mesh** background
- **Smooth Scroll Animations** throughout
- **Interactive Elements** with hover effects

### 🚀 Technologies
- React 18
- Vite (fast build tool)
- Framer Motion (animations)
- React Intersection Observer (scroll reveals)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Enhanced hero section with 3D effects
│   ├── Hero.css          # Hero-specific styles
│   ├── Welcome.jsx       # Welcome screen component
│   ├── Header.jsx        # Navigation header
│   └── ScrollProgress.jsx # Scroll progress bar
├── hooks/
│   └── useScrollReveal.js # Scroll reveal hook
├── App.jsx               # Main app component
├── main.jsx              # Entry point
├── index.css             # Global styles
└── styles.css            # Base styles
```

## Key Enhancements

### Hero Section
- Mouse parallax effects on background orbs
- Real-time code typing animation
- Floating particles system
- 3D terminal window with depth
- Enhanced glow effects
- Code rain background
- Interactive buttons with scale animations

### Animations
- Smooth scroll reveals
- Staggered element animations
- 3D transforms
- Particle systems
- Code typing effects

## Customization

Edit the components in `src/components/` to customize:
- Colors: Modify CSS variables in `styles.css`
- Content: Update text in component files
- Animations: Adjust Framer Motion props
- Effects: Tweak CSS animations

## Browser Support

Modern browsers with ES6+ support. Uses CSS Grid, Flexbox, and CSS Variables.
