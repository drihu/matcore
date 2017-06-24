'use strict';
let authenticate = require('../middlewares/authenticate');
let matchUserId = require('../middlewares/matchUserId');
let Problem = require('../models/problem');

let randomProblemController = {
  read: [
    //authenticate,
    //matchUserId,
    function (req, res, next) {
      Problem.findOneRandom((err, doc) => {
        if (err) throw err;

        res.json({
          id: doc._id,
          content: doc.content,
          imageUrl: doc.imageUrl,
          alternatives: doc.alternatives,
          level: doc.level,
          expPoints: doc.expPoints,
        });
      });
    }
  ],
};


module.exports = randomProblemController;
