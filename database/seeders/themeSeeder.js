'use strict';
require('dotenv').config({ path: __dirname + '/../../.env' });
let mongoose = require('../../config/mongoose');
let Theme = require('../../app/models/theme');

let theme = new Theme({
  name: 'Teoría de exponentes',
  imageUrl: 'teoria-de-exponentes.jpg',
});

theme.save((err) => {
  if (err) {
    throw err;
  } else {
    console.log('New added theme');
  }

  process.exit();
});
