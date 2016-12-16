var FB = require('../models/apiFb');



exports.showAlbum = function(req, res) {
    var access_token = req.session.access_token;
    FB.setAccessToken(access_token);

    var albumId = req.params.id;
    var after   = req.params.after || '';
    var before   = req.params.before || '';
    var feed     = req.params.feed
    var uri     = '/' + albumId + '/photos';

    var params = {
        'limit' : 6,
        'fields': 'id,name,picture,source,images,feed',
        'after' : after,
        'before': before
    };

    FB.api(uri, params, function (result) {

        console.log(result);
        res.render('album/showAlbum', {
            data    : result,
            albumId : albumId

          });
      });

    FB.api('/me','GET',{fields: 'name'}, function(response) {
            console.log(response);
            res.render('album/showAlbum', {
                data    : response

          });

  });
}
