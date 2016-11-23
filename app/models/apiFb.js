var FB = require('fb');
var config = require('../../config/config.js');

FB.options({
    appId:          '792985757511365',
    appSecret:      '95ddd5bfa387ce0e644e8de9953fb5b5',
    redirectUri:    config.baseUri + '/login/callback',
    scope:          'user_about_me,user_photos'
});






module.exports = FB;
