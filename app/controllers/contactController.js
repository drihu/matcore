'use strict';
let authenticate = require('../middlewares/authenticate');
let matchUserId = require('../middlewares/matchUserId');
let Contact = require('../models/contact');

let contactController = {
  readAll: [
    //authenticate,
    //matchUserId,
    function (req, res, next) {
      let userId = req.params.userId;

      Contact.find({
        _owner: userId,
      }).populate('_contact').exec((err, docs) => {
        if (err) throw err;
        let contacts = [];

        for (let i = 0; i < docs.length; i++) {
          contacts.push({
            id: docs[i]._contact._id,
            username: docs[i]._contact.username,
            email: docs[i]._contact.email,
            imageUrl: docs[i]._contact.imageUrl,
            level: docs[i]._contact.level,
            expPoints: docs[i]._contact.expPoints,
          });
        }

        res.json(contacts);
      });
    }
  ],

  create: [
    //authenticate,
    //matchUserId,
    function (req, res, next) {
      let userId = req.params.userId;
      let contactId = req.body.contactId;

      Contact.findOne({ _owner: userId, _contact: contactId }, (err, doc) => {
        if (err) throw err;

        if (doc) {
          res.status(409);
          res.json({
            message: 'The contact already exists.',
          });

        } else {
          let contact = new Contact({
            _owner: userId,
            _contact: contactId,
          });

          contact.save((err) => {
            if (err) throw err;

            Contact.findOne({
              _owner: userId,
              _contact: contactId,
            }).populate('_contact').exec((err, doc) => {
              if (err) throw err;

              res.json({
                id: doc._contact._id,
                username: doc._contact.username,
              });
            });
          });
        }
      });
    }
  ],

  read: [
    //authenticate,
    //matchUserId,
    function (req, res, next) {
      let userId = req.params.userId;
      let contactId = req.params.contactId;

      Contact.findOne({
        _owner: userId,
        _contact: contactId,
      }).populate('_contact').exec((err, doc) => {
        if (err) throw err;

        res.status(201);
        res.json({
          id: doc._contact._id,
          username: doc._contact.username,
        });
      });
    }
  ],

  destroy: [
    //authenticate,
    //matchUserId,
    function (req, res, next) {
      let userId = req.params.userId;
      let contactId = req.params.contactId;

      Contact.remove({ _owner: userId, _contact: contactId }, (err) => {
        if (err) throw err;

        res.json({
          message: 'The contact has been removed.',
        });
      });
    }
  ],
};


module.exports = contactController;
