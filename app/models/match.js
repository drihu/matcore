'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Match = mongoose.model('Match', mongoose.Schema({
  _user1: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _user2: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  time: Number,
  _winner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}));


module.exports = Match;
