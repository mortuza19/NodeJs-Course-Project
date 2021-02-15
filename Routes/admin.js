const express = require('express');

const router = express.Router();

let buddyList = ['Trina', 'Ross', 'Chandler', 'Monica'];


router.get('/users', (req, res, next) => {
    let buds = '';
    buddyList.forEach((bud) => {
        buds = buds.concat(`<li>${bud}</li>`);
    })
    res.send(`
        <ul>
            ${buds}
        </ul>
    `);
});

router.post('/new-buddy', (req, res, next) => {
    if (req.method === 'POST') {
        buddyList.push(req.body.newBuddy);
    }
    res.redirect('/users');
});

module.exports = router;