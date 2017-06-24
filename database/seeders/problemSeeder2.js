'use strict';
require('dotenv').config({ path: __dirname + '/../../.env' });
let mongoose = require('../../config/mongoose');
let Problem = require('../../app/models/problem');

let problem = new Problem({
  content: '500 pobladores votaron dos veces por una moción sin abstenerse. En la primera votación por cada 2 votos a favor había 3 en contra. En la segunda votación por cada 4 votos a favor hubo 1 en contra. ¿Cuál es la diferencia entre los votantes en contra de la primera y de la segunda votación?',
  imageUrl: 'problem-2.jpg',
  alternatives: [
    {
      id: 0,
      content: '205'
    },
    {
      id: 1,
      content: '200'
    },
    {
      id: 2,
      content: '756'
    },
    {
      id: 3,
      content: '408'
    }
  ],
  responseId: 1,
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
