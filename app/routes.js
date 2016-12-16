module.exports = function(app){



    var user = require('./controllers/user');
    var album =require('./controllers/album');

    app.get('/', user.home);
    app.get('/login/callback', user.loginCallback);

    app.all('*',function(req, res, next) {
        if (req.session.access_token) {
            next();
        }else{
            res.redirect('/');
        }
    });

    app.get('/me', user.showMe);
    app.get('/user/:id', user.showUser);

    app.get('/album/:id', album.showAlbum);
    app.get('/album/:id/after/:after', album.showAlbum);
    app.get('/album/:id/before/:before', album.showAlbum);


};
