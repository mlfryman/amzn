'use strict';

var bcrypt = require('bcrypt'),
    Mongo  = require('mongodb'),
    _      = require('underscore-contrib');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, function(err, obj){
    var user = Object.create(User.prototype); // create a new object out of thin air, that is wired to the User.prototype
    user = _.extend(user, obj); // extend
    cb(err, user);
  });
};

User.register = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(user){return cb();}
    o.password = bcrypt.hashSync(o.password, 10);
    User.collection.save(o, cb);
  });
};

User.localAuthenticate = function(email, password, cb){
  User.collection.findOne({email:email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(password, user.password);
    if(!isOk){return cb();}
    cb(null, user); // null/err is REQUIRED
  });
};

User.twitterAuthenticate = function(token, secret, twitter, cb){
  console.log('TOKEN: ', token);
  console.log('SECRET: ', secret);
  console.log('TWITTER: ', twitter);
  console.log('CB: ', cb);
};

User.prototype.update = function(o, cb){
  this.email = o.email;
  this.age = o.age * 1;
  this.photo = o.photo;
};

/*
User.prototype.save = function(o, cb){
  var properties = Object.keys(o),
    self = this;
  properties.forEach(function(property){
    self[property] = o[property];
  });

  delete this.unread;
  User.collection.save(this, cb);
};
*/

module.exports = User;
