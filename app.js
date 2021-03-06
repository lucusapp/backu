var express = require('express'),
    mongoskin = require('mongoskin'),
<<<<<<< HEAD
    bodyParser = require('body-parser'),
    urlencode = require ('urlencode'),
=======
>>>>>>> origin/master
    config  = require('./config/config');

var app     = express();

var db = mongoskin.db('mongodb://@localhost:27017/testdatabase', {safe:true});
var id = mongoskin.helper.toObjectID;

var allowMethods = function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
};

var allowCrossTokenHeader = function(req, res, next) {
    res.headers('Access-Control-Allow-Headers', 'token');
};

var auth = function(req, res, next) {
    if(req.headers.token === "password1234") {
        return next();
    } else {
        return next (new Error('no autorizado'));
    }
}
<<<<<<< HEAD


//http://localhost:3000/api/:coleccion/.id
app.param('coleccion', function(req, res, next, coleccion) {
=======
      

//http://localhost:3000/api/:coleccion/.id
app.param('coleccion' function(req, res, next, coleccion) {
>>>>>>> origin/master
    req.collection = db.collection(coleccion);
});

//PARA COGER LOS DATOS DE REQ.BODY TENEMOS QUE DECIRLE A NUESTRO MIDDLEWARE QUE USE BODYPARSER

<<<<<<< HEAD
app.use(bodyParser.urlencode({extended: true}));
=======
app.use(bodyParser.urlenconde({extended: true}));
>>>>>>> origin/master
app.use(bodyParser.json());
app.use(allowMethods);
app.use(allowCrossTokenHeader);


//post
app.post('/api/:coleccion', auth,  function(req, res, next) {
    req.collection.insert(req.body, {}, function(e, result) {
        if(e) return next(e);
          res.send(result);
    });
});

app.get('/api/:coleccion', auth, function(req, res, next) {
<<<<<<< HEAD
    req.collection.find({}, {limit: 10, sort: [['_id', -1]]}).toArray(function(e, results) {
        if(e) return next(e);
        res.send(results);
    });
=======
    req.collection.find({}, {limit: 10, sort[['_id', -1]]}).toArray(function(e, results) {
        if(e) return next(e);
        res.send(results);
    });  
>>>>>>> origin/master
});

app.get('/api/:coleccion/:id', auth, function(req, res, next) {
    req.collection.findOne({_id:id(req.params.id)}, function(e, result) {
        if(e) return next(e);
           res.send(result);
    });
})

//PUT
app.put('/api/:coleccion/:id', auth, function(req, res, next) {
<<<<<<< HEAD
    req.collection.update({_id: id(req.params.id)}, {$set: req.body}, {safe: true, multi: false},
=======
    req.collection.update(´_id: id(req.params.id)}, {$set: req.body}, {safe: true, multi: false},
>>>>>>> origin/master
       function(e, result) {
            if(e) return next(e);
    res.send((result === 1) ? {resultado: "ok"} : {resultado: "ko"});
    });
});

//DELETE

app.delete('/api/:coleccion/.id', auth, function() {
    req.collection.remove({_id: id(req.params.id), function(e, result) {
        if(e) return next (e);
<<<<<<< HEAD
         res.send((result === 1) ? {resultado: "ok"} : {resultado: "ko"});
    }
  });
});



=======
         res.send(result ===1} ? {resultado: "ok"} : {resultado: "ko"});
    });
});

                                                                  
>>>>>>> origin/master

require('./config/express')(app, config);
require('./app/routes')(app);

app.listen( config.port, function(){
    var _message = 'Express server listening on port ' + app.get('port') ;

    console.log(_message);
});
