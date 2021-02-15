const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`
        <html>
        <head><title>Homepage</title></head>
        <body>
            <h1>Welcome to the Budylist</h1><br>
            <a href="/users">See the buddies</a><br>
            <form action="/new-buddy" method="POST">
                <input type="text" name="newBuddy">
                <button type="submit">Add Buddy</button>
            </form>
        </body>
        </html>
    `);
});

module.exports = router;