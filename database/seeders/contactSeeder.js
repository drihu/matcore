'use strict';
require('dotenv').config({ path: __dirname + '/../../.env' });
let mongoose = require('../../config/mongoose');
let Contact = require('../../app/models/contact');

let contact = new Contact({
  _owner: '594e1c18d0b7f30d7587a3a2',
  _contact: '594e1c390885bc0d8a2cb3ac',
});

contact.save((err) => {
  if (err) {
    throw err;
  } else {
    console.log('New added contact');
  }

  process.exit();
});
