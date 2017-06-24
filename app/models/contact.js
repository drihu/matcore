'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Contact = mongoose.model('Contact', Schema({
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _contact: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}));


module.exports = Contact;
