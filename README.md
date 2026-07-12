# Mayank Raj Portfolio

## Overview

This project is a modern full stack portfolio website built using Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, and Three.js. The application is designed as a high performance interactive portfolio showcasing projects, technical skills, certifications, achievements, and ongoing work in Software Development, Web Development, Cybersecurity, and Intelligent Systems.

The website focuses heavily on smooth user experience, responsive layouts, animation systems, optimized rendering, lazy loading strategies, and scalable component architecture.

The application is deployed as a statically optimized Next.js application with interactive client-side experiences.

---

# Core Technology Stack

## Frontend Framework

- Next.js 14.2.35
- React 18
- TypeScript 5

## Styling System

- Tailwind CSS 3
- PostCSS
- Autoprefixer
- Tailwind Merge
- Clsx

## Animation and Motion

- Framer Motion 10

## 3D Rendering

- Three.js
- React Three Fiber
- React Three Drei

## Utility Libraries

- React Icons
- Heroicons
- React Intersection Observer

## Analytics

- Vercel Analytics

## Development Tooling

- ESLint
- TypeScript
- Next ESLint Config

---

# Project Features

## Interactive Hero Section

Animated landing section with motion effects, layered rendering, and responsive typography.

## Three.js Space Background

GPU accelerated animated star background powered by React Three Fiber and Three.js.

## Responsive Design System

Fully responsive layouts optimized for desktop, tablet, and mobile devices.

## Project Showcase System

Advanced project section featuring:

- Lazy loading
- Skeleton loaders
- Expandable project lists
- GitHub integration
- Live demo support
- Responsive project grids
- Smooth reveal animations

## Skills Architecture

Organized technical skills grouped into:

- Core Technologies

## Performance Optimizations

- Intersection Observer based rendering
- Lazy loaded project cards
- Lazy loaded images
- Skeleton shimmer loading states
- Optimized component rendering
- Dependency deduplication

## Animation System

Framer Motion powered:

- Fade animations
- Scroll reveal animations
- Motion transitions
- Staggered animations
- Interactive hover effects

## SEO and Metadata

- Custom metadata handling
- SEO optimized structure
- Custom icons and branding assets

---

# Directory Structure

```text
mayankraj.com/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── favicon.ico
│   ├── apple-icon.png
│   ├── icon1.png
│   └── icon2.png
│
├── components/
│   ├── main/
│   │   ├── about.tsx
│   │   ├── achievements.tsx
│   │   ├── encryption.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   │
│   └── sub/
│       ├── hero-content.tsx
│       ├── project-card.tsx
│       ├── skill-data-provider.tsx
│       └── skill-text.tsx
│
├── config/
│   └── index.ts
│
├── constants/
│   └── index.ts
│
├── lib/
│   ├── motion.ts
│   └── utils.ts
│
├── public/
│   ├── certificates/
│   ├── projects/
│   ├── skills/
│   ├── videos/
│   ├── hero-bg.svg
│   ├── logo.png
│   ├── mayank-profile.png
│   ├── lock-main.png
│   └── lock-top.png
│
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── SEOHead.tsx
```

---

# Public Assets

## Skills Assets

Located in:

```text
/public/skills
```

Includes:

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Next.js
- Tailwind CSS
- Node.js
- MongoDB
- MySQL
- Python
- Git
- GitHub

## Project Assets

Located in:

```text
/public/projects
```

Contains optimized WebP preview cards for:

- Digital Guard
- CarSalesInsight
- MusicForecast
- Forest Fires Occurrence Prediction
- CarPooling Fare Distribution Algorithm
- PassX
- SafePost Checker
- macOS Portfolio Website
- Neumorphism Portfolio Website
- Student Performance DS
- Kr Sudhanshu Website
- Uday Bhaskar Portfolio Website

## Video Assets

Located in:

```text
/public/videos
```

Includes:

- Blackhole background animation
- Encryption section video
- Skills section animated background

## Certificates

Located in:

```text
/public/certificates
```

Contains PDF certifications and achievements.

---

# Architecture Overview

## Component Architecture

The application follows a modular component structure.

Main sections are isolated into reusable components.

Subcomponents are separated for:

- Card rendering
- Skill rendering
- Motion wrappers
- Reusable UI sections

## State and Rendering Strategy

Project cards use lazy rendering with Intersection Observer.

Hidden project sections are conditionally mounted only after user interaction.

Skeleton loaders preserve layout dimensions while assets load.

## Styling Architecture

Tailwind CSS utility-first styling.

Global styles handled through:

```text
app/globals.css
```

Tailwind configuration located in:

```text
tailwind.config.ts
```

## Motion System

Animation utilities centralized in:

```text
lib/motion.ts
```

This enables reusable animation presets across sections.

---

# Key Sections

## Hero Section

Primary landing area introducing the portfolio identity.

## About Section

Personal introduction and technical focus.

## Skills Section

Displays categorized technical expertise and current learning focus.

## Projects Section

Features:

- Signature project highlighting
- Learning Projects focused ordering
- Expandable project system
- Responsive grid rendering
- Lazy loading
- Skeleton loading states
- GitHub integration

## Encryption Section

Animated section themed around cybersecurity and secure systems.

## Achievements Section

Displays certifications, achievements, and recognitions.

## Footer

Contains branding and navigation support.

---

# Dependency Management

The project uses carefully stabilized dependencies to preserve React 18 compatibility.

## Important Compatibility Constraints

React 18 is intentionally preserved because:

- Framer Motion 10
- React Three Fiber 8
- React Three Drei 9

are not fully compatible with React 19 workflows.

## Security Hardening

Implemented:

- Minimatch vulnerability overrides
- PostCSS security patches
- Dependency deduplication
- Browserslist updates

## Dependency Overrides

```json
"overrides": {
  "minimatch": "^10.0.1",
  "postcss": "^8.5.10"
}
```

---

# Performance Optimizations

## Rendering Optimizations

- Lazy loaded project cards
- Viewport based rendering
- Conditional hidden section mounting
- Skeleton shimmer loading states

## Asset Optimizations

- WebP project assets
- Optimized static assets
- Next.js image optimization

## Build Optimizations

- Dependency deduplication
- Three.js transpilation support
- Static generation

---

# Development Setup

## Installation

```bash
npm install
```

## Development Server

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Production Start

```bash
npm run start
```

## Linting

```bash
npm run lint
```

---

# Build and Deployment

## Framework

Next.js static optimized deployment.

## Hosting

Optimized for Vercel deployment.

## Configuration Files

```text
next.config.js
vercel.json
postcss.config.js
tailwind.config.ts
tsconfig.json
```

---

# Technical Highlights

- Next.js App Router architecture
- TypeScript based codebase
- Framer Motion animation system
- Three.js powered rendering
- Tailwind CSS design system
- Responsive grid architecture
- Intersection Observer based lazy rendering
- Skeleton loading implementation
- Performance optimized project rendering
- Modular reusable component structure
- Security hardened dependency graph

---

# Author

Mayank Raj

## GitHub

```text
https://github.com/devempowerjs
```

## Portfolio

```text
https://mayankraj.com
```

---

# License

MIT License
