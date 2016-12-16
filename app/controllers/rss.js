var FB = require('../models/apiFb');

exports.showrss = function(req, res) {
    var access_token = req.session.access_token;
    FB.setAccessToken(access_token);


        var albumId = req.params.id;
        var after   = req.params.after || '';
        var before   = req.params.before || '';
        var uri     = '/' + albumId + '/photos';

        var params = {
            'limit' : 6,
            'fields': 'id,name,picture,source,images',
            'after' : after,
            'before': before
        };

        FB.api(uri, params, function (result) {

            console.log(result);
            res.render('rss', {
                data    : result,
                albumId : albumId
            });

        });
    };
