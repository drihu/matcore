'use strict';
require('dotenv').config({ path: __dirname + '/../../.env' });
let mongoose = require('../../config/mongoose');
let Theme = require('../../app/models/theme');

let theme = new Theme({
  name: 'Sistemas de Medición Angular',
  imageUrl: 'sistemas-de-medicion-angular.jpg',
});

theme.save((err) => {
  if (err) {
    throw err;
  } else {
    console.log('New added theme');
  }

  process.exit();
});
