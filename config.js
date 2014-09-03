'use strict';

var config = {};

config.twitter = {
  apiKey      : 'KwTPXjKRGn9eQTsBmOtms0pR3',
  apiSecret   : process.env.TWITTER_SECRET,
  callbackUrl : 'http://mlfryman-vm.com:3333/auth/twitter/callback'
};

config.github = {
  clientId      : '5fc3c745a1ee1343eaa1',
  clientSecret  : process.env.GITHUB_SECRET,
  callbackUrl   : 'http://mlfryman-vm.com:3333/auth/github/callback'
};

module.exports = config;
