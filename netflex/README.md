# Netflix Clone Application

A React-powered Netflix clone web application built with Vite that replicates the core streaming service interface. This project demonstrates how to build a Netflix-like UI with real-time API integration for movie and TV show content discovery.

## About This Project

This Netflix clone serves as a practical example of building a professional-grade streaming application frontend. It implements key Netflix features including content discovery, carousel navigation, and a polished user interface with real data sourced from TMDB API.

## Key Capabilities

- **React 19 + Vite Stack** — High-performance development environment with optimized builds
- **TMDB Content Integration** — Real-time fetching of trending shows, original content, and genre-specific movies
- **Netflix-Style UI Components** — Banner sections, carousel sliders, movie cards, and responsive header
- **API-Driven Architecture** — Axios-based HTTP communication with centralized endpoint management
- **Responsive Layout** — Touch-friendly interface with swiper-based carousel functionality
- **Component-Based Design** — Modular architecture for easy extension and maintenance

## Stack Overview

- React 19 — UI framework for component development
- Vite — Modern build tool and development server
- Axios — HTTP client library for API calls
- Swiper — Carousel and slider functionality
- React Router DOM — Navigation between pages
- Lucide React — Icon system
- ESLint — Code linting and quality assurance

## Folder Organization

- `src/App.jsx` — Application root component
- `src/Components/` — UI components (Banner, Header, DisplayRow, etc.)
- `src/Utility/MovieInstance.js` — API client configuration
- `src/Utility/requestUrls.js` — TMDB endpoint definitions
- `src/Data/Data.js` — Data constants and configuration

## Setup Instructions

### System Requirements

- Node.js 16 or above
- npm or compatible package manager

### Installation & Configuration

1. Install all required packages:
   ```bash
   npm install
   ```

2. Set up environment configuration by creating `.env` file:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the provided localhost address in your browser

## Available Commands

- `npm run dev` — Start dev server with hot reload
- `npm run build` — Generate production-ready build
- `npm run preview` — Test production build locally
- `npm run lint` — Execute linting checks

## How It Works

- The app connects to The Movie Database (TMDB) API via environment-based API key
- Multiple content categories are fetched and displayed in scrollable carousels
- Each content item is displayed as an interactive card within the layout
- The header provides navigation and user controls
- The banner section highlights featured content

## Expansion Ideas

- Build out routing for individual movie/show detail pages
- Implement search functionality with live filtering
- Add user authentication and profiles
- Create watchlist and favorites features
- Enhance mobile UI responsiveness
- Add rating and review system

## Terms of Use

This is a clone project for educational and portfolio demonstration purposes.
