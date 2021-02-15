const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./Routes/admin');
const shopRoute = require('./Routes/shop');


//middleware

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);


app.listen(3000);