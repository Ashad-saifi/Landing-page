# Codebase Enhancements & Roadmap

Proposed enhancements to build upon the new Vite + React + Express architecture.

## 1. Database Adaptor Layer
Currently, messages are saved in a local JSON file (`backend/data/messages.json`).
- *Improvement*: Implement a MongoDB or PostgreSQL adapter.
- *Files impacted*: `backend/server.js` to replace filesystem reads with schema database calls using Mongoose or Prisma.

## 2. Advanced Animation System
- Integrate Framer Motion scroll indicators and staggered list transitions inside `src/App.jsx`.
- Incorporate interactive background canvas particles for a futuristic tech aesthetic.

## 3. Real Server Integration
- Provide real automated email notifications to system administrators using `nodemailer` upon contact form submissions.
- Implement Slack hook integrations so new leads notify the team directly.
