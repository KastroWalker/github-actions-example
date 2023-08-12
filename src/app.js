const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.status(200).send('Home page');
});

app.get('/contact', (_, res) => {
  res.status(200).send('Contact page');
});

app.get('/about', (_, res) => {
  res.status(200).send('About page');
});

module.exports = app;
