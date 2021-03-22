module.exports = { home: redirectHome };
const express = require('express');
const app = express();

function redirectHome(req, res) {
  res.render('index');
}


