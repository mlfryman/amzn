'use strict';

module.exports = function(user, cb){ // passport calls fn; passes user object (from model) to be serialized & converted into userId for redis
  cb(null, {userId:user._id}); // converts obj._id into string, takes error (null) & cb
};
