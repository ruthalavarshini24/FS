const normalize = (u) => (u ? u.trim().replace(/\/+$/, '') : '');

const allowedOrigins = [
  normalize(process.env.FRONTEND_URL), // production Vercel URL
  'http://localhost:5173',             // local Vite dev
].filter(Boolean);

module.exports = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // curl, health checks
    if (allowedOrigins.includes(normalize(origin))) return callback(null, true);
    console.warn(`[CORS] Blocked origin: ${origin}`);
    return callback(null, false); // omit headers, do not throw
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
  maxAge: 86400,
};
