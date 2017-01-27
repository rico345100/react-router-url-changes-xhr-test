"use strict";
const express = require('express');
const fallback = require('express-history-api-fallback');
const app = express();
const logger = require('morgan');
const port = 3000;

app.disable('x-powered-by');

app.use(logger('dev'));
app.use(express.static(__dirname + '/build'));
app.use(fallback('index.html', { root: __dirname }));

app.get('/favicon.ico', (req, res, next) => {
	return res.sendFile(__dirname + '/favicon.ico');
});

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));