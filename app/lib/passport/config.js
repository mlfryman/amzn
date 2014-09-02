'use strict';

var local = require('./local'),
    // twitter = require('./twitter'),
    // google = require('./google'),
    // facebook = require('./facebook'),
    // github = require('./github'),
    serialize = require('./serialize'),
    deserialize = require('./deserialize');

module.exports = function(passport, app){
  passport.use(local);
  // passport.use(twitter);
  // passport.use(google);
  // passport.use(facebook);
  // passport.use(github);
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);

  app.use(passport.initialize()); // starts passport
  app.use(passport.session()); // stores session in passport
};
