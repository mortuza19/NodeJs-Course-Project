const fs = require('fs');

const requestHandler = (req, res) => {
    let url = req.url;
    if (url === '/') {
        res.write(`
            <html>
                <header>
                    <title>Homepage</title>
                </header>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }
    if (url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            fs.writeFile('message.txt', parseBody.split('=')[0], (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('content-type', 'text/html');
    res.write(`
        <html>
            <header>
                <title>Homepage</title>
            </header>
            <body>
                <h1>Welcome to the NodeJS course!</h1>
            </body>
        </html>
    `);
    res.end();
}

module.exports = {
    handler: requestHandler
}