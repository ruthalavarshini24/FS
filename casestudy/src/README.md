# Student Management System - Deployment Plan Code

React (Vite) on **Vercel** + Express.js on **Render** + MongoDB Atlas.
Companion code for the case study "Deployment Plan for a Student Management System".

```
backend/    Express API  -> Render  (Root Directory: backend)
frontend/   React + Vite -> Vercel  (Root Directory: frontend)
scripts/    verify.sh    cURL checks for TC-01, TC-03, TC-04
```

## Run locally
```bash
# 1. Backend
cd backend && cp .env.example .env     # put your Atlas MONGODB_URI in .env
npm install && npm run dev             # http://localhost:5000/api/health

# 2. Frontend (new terminal)
cd frontend && npm install && npm run dev   # http://localhost:5173
```
`frontend/.env.development` already points to `http://localhost:5000`.

## Deployment sequence
| Phase | Action |
|---|---|
| 0 | Push to GitHub (`.env` is git-ignored) |
| 1 | Atlas: M0 cluster, `readWrite` user on `student_records_db`, Network Access `0.0.0.0/0` (temporary), copy SRV string |
| 2 | Render Web Service: Root `backend`, Build `npm install`, Start `npm start`, Health Check `/api/health`; env: `MONGODB_URI`, `NODE_ENV=production`, temp `FRONTEND_URL`. Do NOT set `PORT` |
| 3 | Vercel: Root `frontend`, Preset Vite, Output `dist`; env: `VITE_API_BASE_URL=https://<service>.onrender.com` (https, no trailing slash) |
| 4 | Set `FRONTEND_URL` on Render to the exact Vercel URL (no trailing slash); Render redeploys |

## Environment variables
| Platform | Variable | Lifecycle |
|---|---|---|
| Vercel | `VITE_API_BASE_URL` | build-time (redeploy after change) |
| Render | `MONGODB_URI`, `FRONTEND_URL`, `NODE_ENV` | runtime |
| Render | `PORT` | injected automatically |

## Verify
```bash
./scripts/verify.sh https://<service>.onrender.com https://<app>.vercel.app
```
Then check the UI: list loads, add/edit/delete works, data persists after refresh.
