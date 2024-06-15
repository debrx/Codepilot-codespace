// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse JSON
app.use(bodyParser.json());

// Set up comments
const comments = [];

// Get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});