'use strict';
let authenticate = require('../middlewares/authenticate');
let matchUserId = require('../middlewares/matchUserId');
let Subject = require('../models/subject');

let subjectController = {
  readAll: [
    //authenticate,
    //matchUserId,
    function (req, res, next) {
      Subject.find().populate('_themes').exec((err, docs) => {
        if (err) throw err;
        let subjects = [];

        for (let i = 0; i < docs.length; i++) {
          subjects.push({
            id: docs[i]._id,
            name: docs[i].name,
            description: docs[i].description,
            imageUrl: docs[i].imageUrl,
            themes: docs[i]._themes,
          });
        }

        res.json(subjects);
      });
    }
  ],
};


module.exports = subjectController;
