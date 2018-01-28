const express = require('express');
const path = require('path');
const open = require('open');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.listen(PORT, err => err ? console.log(err) : open('http://localhost:' + PORT));