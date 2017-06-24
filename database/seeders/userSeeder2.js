'use strict';
require('dotenv').config({ path: __dirname + '/../../.env' });
let mongoose = require('../../config/mongoose');
let User = require('../../app/models/user');

let user = new User({
  username: 'gon',
  email: 'ultragon@gmail.com',
  password: 'pass',
});

user.save((err) => {
  if (err) {
    throw err;
  } else {
    console.log('New added user');
  }

  process.exit();
});
