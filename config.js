'use strict';

var config = {};

config.twitter = {
  apiKey      : 'KwTPXjKRGn9eQTsBmOtms0pR3',
  apiSecret   : process.env.TWITTER_SECRET,
  callbackURL : 'http://mlfryman-vm.com:3333/auth/twitter/callback'
};

config.github = {
  clientID      : '5fc3c745a1ee1343eaa1',
  clientSecret  : process.env.GITHUB_SECRET,
  callbackURL   : 'http://mlfryman-vm.com:3333/auth/github/callback'
};

config.google = {
  clientID      : '5146807778-g8tb77in9d4o0t7k8csaogpgno28huh1.apps.googleusercontent.com',
  clientSecret  : process.env.GOOGLE_SECRET,
  callbackURL  : 'http://mlfryman-vm.com:3333/auth/google/callback'
};

module.exports = config;
