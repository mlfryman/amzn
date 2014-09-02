'use strict';

var LocalStrategy = require('passport-local').Strategy,
   User = require('../../models/user'),
   local = new LocalStrategy({usernameField:'email',
   passwordField:'password'},
   User.localAuthenticate); // passport calls this function from model; MUST pass in var field names (whatever you call email/username & password)
module.exports = local;
