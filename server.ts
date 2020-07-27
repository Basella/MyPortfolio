const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname +  '/dist/My-Research-Portfolio'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: './dist/My-Research-Portfolio'});
});

// app.listen(process.env.PORT || 3000);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
