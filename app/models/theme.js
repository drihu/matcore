'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Theme = mongoose.model('Theme', mongoose.Schema({
  name: String,
  imageUrl: String,
}));


module.exports = Theme;
