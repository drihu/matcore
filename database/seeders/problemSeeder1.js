'use strict';
require('dotenv').config({ path: __dirname + '/../../.env' });
let mongoose = require('../../config/mongoose');
let Problem = require('../../app/models/problem');

let problem = new Problem({
  content: 'Si la  expresión se reduce a un monomio de coeficiente 10, halle el valor de m + n + a + b.',
  imageUrl: 'problem-1.jpg',
  alternatives: [
    {
      id: 0,
      content: '23'
    },
    {
      id: 1,
      content: '76'
    },
    {
      id: 2,
      content: '28'
    },
    {
      id: 3,
      content: '14'
    }
  ],
  responseId: 3,
  level: 1,
  expPoints: 10,
});

problem.save((err) => {
  if (err) {
    throw err;
  } else {
    console.log('New added problem');
  }

  process.exit();
});
