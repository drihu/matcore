'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Theme = require('./theme');

let Subject = mongoose.model('Subject', mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  _themes: [{
    type: Schema.Types.ObjectId,
    ref: 'Theme'
  }],
}));


module.exports = Subject;
