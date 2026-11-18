require('dotenv').config(); // local only; Render injects variables itself
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/students');

const app = express();

app.set('trust proxy', 1);             // Render sits behind a TLS reverse proxy
app.use(helmet());
app.use(cors(corsOptions));            // CORS must come before routes
app.options('*', cors(corsOptions));   // answer preflight requests
app.use(express.json());

app.use('/api', studentRoutes);

// Central error handler: validation, duplicate key and bad-id errors
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (err.code === 11000) {
    return res.status(409).json({ success: false, message: 'Registration number already exists' });
  }
  if (err.name === 'ValidationError') {
    return res.status(400).json({ success: false, message: err.message });
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ success: false, message: 'Invalid id' });
  }
  console.error(err);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Server error' : err.message,
  });
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => console.log(`API live on 0.0.0.0:${PORT}`));
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
