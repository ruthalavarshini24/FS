const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
    console.log(
        req.method + " " + req.url + " - " + new Date()
    );
    next();
});

// Route handler
app.get('/', (req, res) => {
    res.send('Welcome to Express.js');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});