# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev` - Starts Vite dev server with hot module replacement
- **Build**: `pnpm build` - TypeScript compilation followed by Vite build for production
- **Lint**: `pnpm lint` - Runs ESLint on the codebase
- **Preview**: `pnpm preview` - Preview production build locally

## Architecture Overview

This is a React + TypeScript + Vite company website using:

- **Routing**: React Router v7 with client-side routing, basename set to `/company-website` for GitHub Pages deployment
- **Styling**: Tailwind CSS v4 with custom dark theme colors and Montserrat font
- **Component Library**: Shadcn/ui components with Radix UI primitives
- **Icons**: Lucide React icons
- **Email**: EmailJS for contact form submissions

### Key Architecture Patterns

- **Page Components**: Main pages (`LandingPage`, `ContactPage`, `TeamPage`, etc.) handle full page layouts
- **UI Components**: Reusable components in `src/components/ui/` following shadcn/ui patterns
- **Path Aliases**: `@/` resolves to `src/` directory for clean imports
- **Route Structure**: 
  - `/` - Landing page
  - `/solutions/ai-advisory` - AI Advisory service page
  - `/about/mission` - Mission page (default /about redirect)
  - `/about/team` - Team page
  - `/contact` - Contact page

### Component Organization

- **Layout Components**: `Navbar`, `Footer` provide consistent site structure
- **Content Components**: `HeroCard`, `ServiceCard`, `TestimonialCarousel` for landing page sections
- **Utility Components**: `ScrollToTop`, `DemoBanner`, `PageHeader` for common functionality
- **Form Components**: shadcn/ui form components (`button`, `input`, `textarea`, etc.)

### Theme System

Custom dark theme with branded colors defined in `tailwind.config.js`:
- Background: `#101624` (dark blue)
- Surface: `#1A2236` (lighter blue)
- Primary: `#3B82F6` (blue)
- Secondary: `#38BDF8` (light blue)

### Build Configuration

- **Base URL**: `/company-website/` for GitHub Pages deployment
- **TypeScript**: Strict configuration with separate configs for app and node
- **Vite**: SWC plugin for fast refresh, Tailwind CSS plugin for styling