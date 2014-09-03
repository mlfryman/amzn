'use strict';

var config = {};

config.twitter = {
  apiKey      : 'KwTPXjKRGn9eQTsBmOtms0pR3',
  apiSecret   : process.env.TWITTER_SECRET,
  callbackUrl : 'http://mlfryman-vm.com:3333/auth/twitter/callback'
};

module.exports = config;
