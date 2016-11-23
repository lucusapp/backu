var FB = require('../models/apiFb');

exports.showrss = function(req, res) {
    var access_token = req.session.access_token;
    FB.setAccessToken(access_token);
