const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.status(200).send('Pagina inicial');
});

app.get('/contact', (_, res) => {
  res.status(200).send('Contact page');
});

module.exports = app;
