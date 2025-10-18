# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Nuxt 3 project using pnpm as the package manager.

### Core Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm generate` - Generate static site (preferred for deployment)
- `pnpm preview` - Preview production build locally

### Code Quality
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Auto-fix ESLint issues
- `pnpm typecheck` - Run TypeScript type checking with nuxi

## Architecture Overview

### Tech Stack
- **Framework**: Nuxt 3 with Vue 3 Composition API
- **Styling**: TailwindCSS v4 + Nuxt UI component library with neutral color scheme
- **Type Safety**: TypeScript with strict ESLint rules
- **Package Manager**: pnpm (required for better-sqlite3 dependency)
- **Git Hooks**: Husky with lint-staged for pre-commit linting
- **Deployment**: Netlify (Node 22.18.0, static site generation)

### Project Structure
- `app/` - Main application code (Nuxt 4 directory structure)
  - `components/` - Vue components organized by feature (layout/, home/, blog/, etc.)
  - `pages/` - File-based routing with dynamic routes
  - `layouts/` - Layout components
  - `composables/` - Reusable composition functions
  - `utils/` - Utility functions
  - `types/` - TypeScript type definitions
- `content/` - Markdown content for blog posts and categories
- `public/` - Static assets

### Key Features
- Responsive design with mobile/desktop detection via @nuxtjs/device
- Dark/light theme switching with @nuxtjs/color-mode (default: dark, stored in localStorage)
- Progressive image loading with custom ProgressiveImg component
- SEO optimization with Nuxt's built-in meta management
- Static site generation with SSG prerendering (routes configured in nuxt.config.ts)
- Nuxt Content for markdown-based blog posts with frontmatter
- Page transitions with Vue transition effects
- Image optimization via @nuxt/image

### ESLint Configuration
The project uses strict ESLint rules including:
- Type-based Vue prop/emit declarations required
- Vue component block order: script → template → styles
- Maximum 2 parameters per function
- Alphabetical attribute ordering in Vue templates

### Content Management
Blog posts are stored as markdown files in `content/blog/` with frontmatter. Categories are managed in `content/categories.json`.

### Configuration Notes
- **Nuxt 4 Compatibility**: Project uses `future.compatibilityVersion: 4` with app/ directory structure
- **Typed Pages**: Experimental typed pages enabled for type-safe routing
- **TailwindCSS**: Integrated via Vite plugin (@tailwindcss/vite)
- **Color Mode**: Default preference is dark mode with localStorage persistence
- **Nuxt UI**: Configured with neutral primary color in app.config.ts