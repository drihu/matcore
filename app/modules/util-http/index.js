'use strict';

let utilHttp = {};

utilHttp.getCookie = function (cookieName) {
  return function (req) {
    let cookie = null;

    if (req && req.cookies) {
      cookie = req.cookies[cookieName];
    }

    return cookie;
  };
};


module.exports = utilHttp;
