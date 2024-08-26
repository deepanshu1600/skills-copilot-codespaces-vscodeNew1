// Create web server with express
// Import express module
const express = require('express');
const app = express();
// Import body-parser module
const bodyParser = require('body-parser');
// Import comments.json file
const comments = require('./comments.json');
// Set port number
const port = 3000;
// Use body-parser module
app.use(bodyParser.json());
// Use express.static to serve static files
app.use(express.static('public'));
// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// Post a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Export app
module.exports = app;