/* eslint-disable no-console */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Some dummy content');
});

app.listen(3000, () => {
  console.log('Application is running on localhost:3000');
});
