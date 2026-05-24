# Developer Guide

A comprehensive guide on managing, developing, and running the WebSolution Pro project.

## Directory Structure

```text
├── backend/                  # Express REST API Backend
│   ├── data/                 # JSON File Database
│   │   └── messages.json     # Saved Inquiry Leads
│   └── server.js             # Main server logic (Port 5000)
├── src/                      # React Frontend Source Code
│   ├── App.jsx               # Main Application Component
│   ├── index.css             # Tailwind Imports & Global Styles
│   └── main.jsx              # Application DOM mounting point
├── index.html                # Vite SPA index container
├── package.json              # Script configurations & Packages
├── vite.config.js            # Port/Proxy configurations
└── tailwind.config.js        # Design tokens & color schemas
```

## Running the Application

To run both the backend server and frontend development client simultaneously, use:

```bash
npm run dev:all
```

This runs:
- **Express API** at [http://localhost:5000](http://localhost:5000) (monitored by Nodemon)
- **Vite React App** at [http://localhost:5173](http://localhost:5173)

### Proxy Forwarding
Vite handles API routing under the hood. All requests from the client starting with `/api` are proxied to `http://localhost:5000` to prevent CORS issues.

## Developing new components
- Styles are fully tailwind based.
- Add components under `src/components` if needed, then import them into `src/App.jsx`.
- Update backend API routes inside `backend/server.js`.
