'use strict';
let mongoose = require('mongoose');

let connection = ''
  .concat(process.env.DB_CONNECTION)
  .concat('://')
  .concat(process.env.DB_HOST)
  .concat(':')
  .concat(process.env.DB_PORT)
  .concat('/')
  .concat(process.env.DB_DATABASE);

mongoose.connect(connection);


module.exports = mongoose;
