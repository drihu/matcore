'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = mongoose.model('User', mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  imageUrl: String,
  level: {
    type: Number,
    default: 1
  },
  expPoints: {
    type: Number,
    default: 0
  }
}));


module.exports = User;
