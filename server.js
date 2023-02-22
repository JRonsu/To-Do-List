const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  const backgroundColor = '#f2f2f2'; // set background color for the body
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});