'use strict';
require('dotenv').config({ path: __dirname + '/../../.env' });
let mongoose = require('../../config/mongoose');
let Problem = require('../../app/models/problem');

let problem = new Problem({
  content: 'Si: xy = 2, (donde x > 0), halle el valor de la expresión:',
  imageUrl: 'problem-0.jpg',
  alternatives: [
    {
      id: 0,
      content: '4/5'
    },
    {
      id: 1,
      content: '3/8'
    },
    {
      id: 2,
      content: '13/4'
    },
    {
      id: 3,
      content: '7/4'
    }
  ],
  responseId: 2,
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
