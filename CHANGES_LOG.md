# Changes Log

All major additions, modifications, and version progressions.

## v1.0.0 (Release Version) - May 24, 2026

### Scaffolding and Dependencies
- Initialized React/Vite layout environment in the current directory (`npx create-vite`).
- Added dev packages: `tailwindcss`, `postcss`, `autoprefixer`, `concurrently`, `nodemon`.
- Added runtime libraries: `express`, `cors`, `morgan`, `lucide-react`, `framer-motion`.

### Configuration Additions
- Created [vite.config.js](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/vite.config.js) specifying port `5173` and setting proxy path mapping for `/api`.
- Configured [tailwind.config.js](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/tailwind.config.js) and [postcss.config.js](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/postcss.config.js).
- Updated [package.json](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/package.json) scripts: `npm run dev:all` initiates both client and server automatically.

### Codebase Components
- Created Express app at [backend/server.js](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/backend/server.js) logging submissions locally to `messages.json`.
- Updated [index.html](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/index.html) to link font families and bundle React DOM structure.
- Developed master controller in [src/App.jsx](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/src/App.jsx) handling customer layouts and the three-panel customizer console.
- Wrote styles and custom classes in [src/index.css](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/src/index.css).
