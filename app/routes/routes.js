'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    less           = require('less-middleware'),
    session        = require('express-session'),
    RedisStore     = require('connect-redis')(session),
    passport       = require('passport'),
    flash          = require('connect-flash'),
    passportConfig = require('../lib/passport/config'), // this is a function that takes 2 things: passport & app
    security       = require('../lib/security'),
    debug          = require('../lib/debug'),
    home           = require('../controllers/home'),
    users          = require('../controllers/users');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(less(__dirname + '/../static'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(methodOverride());
  app.use(session({store:new RedisStore(), secret:'my super secret key', resave:true, saveUninitialized:true, cookie:{maxAge:null}})); // turns on cookie, redis, etc
  app.use(flash()); // must go after session bc uses session, must go before passportConfig bc passport uses flash
  passportConfig(passport, app);

  app.use(security.locals);
  app.use(debug.info);

  app.get('/', home.index);
  app.get('/register', users.new);
  app.post('/register', users.create);
  app.get('/login', users.login);
  app.post('/login', passport.authenticate('local', {successRedirect:'/', failureRedirect:'/login', successFlash:'Welcome!', failureFlash:'Sorry, your email or password was incorrect.'})); // req is not available here, so cannot use username in message

  app.use(security.bounce);
  app.delete('/logout', users.logout);

  console.log('Express: Routes Loaded');
};

