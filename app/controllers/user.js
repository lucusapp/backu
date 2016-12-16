var FB = require('../models/apiFb');
var User = require('../models/User');


exports.home = function(req, res){
    res.render('index', {
        title: 'Express',
        loginUrl : FB.getLoginUrl({ scope: 'user_about_me,user_photos,' })
    });
};

exports.showMe = function(req, res){
    var access_token = req.session.access_token;
    FB.setAccessToken(access_token);

    FB.api('/me', 'GET', { 'fields': 'id,name,feed,first_name' }, function (result) {

        console.log(result);

        res.render('user/showMe', {
            title: 'datos personales',
            data : result
        });
    });
};

exports.loginCallback = function(req, res){
    var code = req.query.code;

    User.getAccessToken( code, function(err, result) {
		if (err) { res.redirect('/'); return; }
        req.session.access_token = result.access_token;
        res.redirect('/me');
    });
};

exports.showUser = function(req, res) {
    var access_token = req.session.access_token;
    FB.setAccessToken(access_token);
    var userid = req.params.id;

    FB.api('/' + userid + '/albums', { 'limit' : 100 }, function (result) {

        console.log(result);

        res.render('user/showUser', {
            title: 'datos personales',
            data : result
        });
    });
};
