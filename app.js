const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

module.exports = app;
