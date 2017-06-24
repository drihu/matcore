'use strict';
require('dotenv').config({ path: __dirname + '/../../.env' });
let mongoose = require('../../config/mongoose');
let Problem = require('../../app/models/problem');

let problem = new Problem({
  content: 'Los antecedentes de una proporción están en la relación de 8 a 5 y la suma de los consecuentes es 156. Calcule la diferencia de los términos medios, si los extremos están en la relación de 4 a 3.',
  imageUrl: 'problem-3.jpg',
  alternatives: [
    {
      id: 0,
      content: '46'
    },
    {
      id: 1,
      content: '76'
    },
    {
      id: 2,
      content: '92'
    },
    {
      id: 3,
      content: '10'
    }
  ],
  responseId: 0,
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
