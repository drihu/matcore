'use strict';
require('dotenv').config({ path: __dirname + '/../../.env' });
let mongoose = require('../../config/mongoose');
let Subject = require('../../app/models/subject');

let subject = new Subject({
  name: 'Aritmética',
  description: 'Es la rama de la Matemática cuyo objeto de estudio son los números y las operaciones elementales.',
  imageUrl: 'aritmetica.jpg',
  _themes: [
    '594e1f425816d70e6305ac10',
    '594e1fa41f94ce0e89b3b2a7'
  ],
});

subject.save((err) => {
  if (err) {
    throw err;
  } else {
    console.log('New added subject');
  }

  process.exit();
});
