const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const bcrypt = require('bcrypt');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, (req, res) => {
	console.log(`Listening on port ${port}`);
});
