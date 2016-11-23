var FB = require('./apiFb.js');



exports.getAccessToken = function (code, callback) {
    FB.napi('oauth/access_token', {
        client_id       : FB.options('appId'),
        client_secret   : FB.options('appSecret'),
        redirect_uri    : FB.options('redirectUri'),
        code            : code

    }, callback);
};

// function extendAccessToken(err, result) {
//     if (err) {
//         callback(err, null);
//     } else {
//         FB.napi('oauth/access_token', {
//                 client_id: FB.options('appId'),
//                 client_secret: FB.options('appSecret'),
//                 grant_type: 'fb_exchange_token',
//                 fb_exchange_token: result.access_token
//             },
//             function(err, result) {

//                 callback(err, result);
//             });
//     }
// });
