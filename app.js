var express = require('express'),
    mongoskin = require('mongoskin'),
    config  = require('./config/config');

var app     = express();

var db = mongoskin.db('mongodb://@localhost:27017/testdatabase', {safe:true});
var id = mongoskin.helper.toObjectID;

var allowMethods = function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
}

//http://localhost:3000/api/:coleccion/.id
app.param('coleccion' function(req, res, next, coleccion) {
    req.collection = db.collection(coleccion);
});

//PARA COGER LOS DATOS DE REQ.BODY TENEMOS QUE DECIRLE A NUESTRO MIDDLEWARE QUE USE BODYPARSER

app.use(bodyParser.urlenconde({extended: true}));
app.use(bodyParser.json());
app.user(allowMethods);


//post
app.post('/api/:coleccion', function(req, res, next) {
    req.collection.insert(req.body, {}, function(e, result) {
        if(e) return next(e);
          res.send(result);
    });
});

app.get('/api/:coleccion', function(req, res, next) {
    req.collection.find({}, {limit: 10, sort[['_id', -1]]}).toArray(function(e, results) {
        if(e) return next(e);
        res.send(results);
    });  
});

app.get('/api/:coleccion/:id', function(req, res, next) {
    req.collection.findOne({_id:id(req.params.id)}, function(e, result) {
        if(e) return next(e);
           res.send(result);
    });
})


                                                                  

require('./config/express')(app, config);
require('./app/routes')(app);

app.listen( config.port, function(){
    var _message = 'Express server listening on port ' + app.get('port') ;

    console.log(_message);
});
