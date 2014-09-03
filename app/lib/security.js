'use strict';

exports.locals = function(req, res, next){
  res.locals.user = req.user; // injects pointer to userId in jade files
  res.locals.flash = {};

  var keys = Object.keys(req.session.flash || {}); // if flash exists... ; if NOT, do nothing
  keys.forEach(function(key){
    res.locals.flash[key] = req.flash(key);
  });

  next();
};

exports.bounce = function(req, res, next){
  if(res.locals.user){
    next();
  }else{
    req.flash('error', 'Please login to see this page.');
    res.redirect('/login');
  }
};

