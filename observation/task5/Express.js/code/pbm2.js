// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON (optional if you want to handle POST requests later)
app.use(express.json());

// Route: Home
app.get('/', (req, res) => {
  res.send('Welcome to the Student Server!');
});

// Route: Students
app.get('/students', (req, res) => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eva' }
  ];
  res.json(students);
});

// Route: About
app.get('/about', (req, res) => {
  res.send('This is a basic Express.js application that manages student data and demonstrates routing.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
