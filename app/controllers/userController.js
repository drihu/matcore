'use strict';
let authenticate = require('../middlewares/authenticate');
let matchUserId = require('../middlewares/matchUserId');
let User = require('../models/user');

let userController = {
  readAll: [
    //authenticate,
    //matchUserId,

    function (req, res, next) {
      User.find({}, (err, docs) => {
        if (err) throw err;
        let users = [];

        for (let i = 0; i < docs.length; i++) {
          users.push({
            id: docs[i]._id,
            username: docs[i].username,
            email: docs[i].email,
            imageUrl: docs[i].imageUrl,
            level: docs[i].level,
            expPoints: docs[i].expPoints,
          });
        }

        res.json(users);
      });
    }
  ],

  read: [
    //authenticate,
    //matchUserId,

    function (req, res, next) {
      let userId = req.params.userId;

      User.findOne({ _id: userId }, (err, doc) => {
        if (err) throw err;

        res.json({
          id: doc._id,
          username: doc.username,
          email: doc.email,
          imageUrl: doc.imageUrl,
          level: doc.level,
          expPoints: doc.expPoints,
        });
      });
    }
  ],
};


module.exports = userController;
