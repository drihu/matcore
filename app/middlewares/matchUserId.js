'use strict';

let matchUserId = function (req, res, next) {
  if (req.params.userId === req.user._id.toString()) {
    next();
  } else {
    res.status(403);
    res.json({
      message: 'You don\'t have permission for this.'
    });
  }
};


module.exports = matchUserId;
