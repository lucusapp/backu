var express = require('express'),
    config  = require('./config/config');

var app     = express();

require('./config/express')(app, config);
require('./app/routes')(app);

app.listen( config.port, function(){
    var _message = 'Express server listening on port ' + app.get('port') ;

    console.log(_message);
});
