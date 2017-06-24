'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let random = require('mongoose-simple-random');

let ProblemSchema = mongoose.Schema({
  content: String,
  imageUrl: String,
  alternatives: [{
    id: Number,
    content: String
  }],
  responseId: Number,
  level: Number,
  expPoints: Number,
});

ProblemSchema.plugin(random);

let Problem = mongoose.model('Problem', ProblemSchema);


module.exports = Problem;
