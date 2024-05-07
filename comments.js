// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment object
const comments = [
    {
        id: 1,
        name: 'John',
        comment: 'Hello World'
    },
    {
        id: 2,
        name: 'Jane',
        comment: 'Hi there'
    }
];

// Create a route that sends the comment object to the client
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
