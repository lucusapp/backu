var FB = require('fb');
var config = require('../../config/config.js');

FB.options({
    appId:          '792985757511365',
    appSecret:      '95ddd5bfa387ce0e644e8de9953fb5b5',
    redirectUri:    config.baseUri + '/login/callback',
    scope:          'user_about_me,user_photos,friends_photos'
});

// FB.feed({
//     token: '792985757511365|Sljh-SEL0ldxzmaKfla990TGrF0',
//     id:    '792985757511365|Sljh-SEL0ldxzmaKfla990TGrF0&fields=id',
//     message: '792985757511365|Sljh-SEL0ldxzmaKfla990TGrF0&fields=message',
//     link: '792985757511365|Sljh-SEL0ldxzmaKfla990TGrF0&fields=link',
//     time: '792985757511365|Sljh-SEL0ldxzmaKfla990TGrF0&fields=created_time',
//     name: '792985757511365|Sljh-SEL0ldxzmaKfla990TGrF0&fields=name',
//     picture: '792985757511365|Sljh-SEL0ldxzmaKfla990TGrF0&fields=full_picture'
// });


module.exports = FB;
