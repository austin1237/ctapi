
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');

//supervisor -s -. node app

//controllers
var users = require('./routes/users');
var test2 = require('./routes/test2');
var remove = require('./routes/remove');
var update = require('./routes/update');
var mongo = require('./routes/mongo');
var app = express();

// API version
var url = '/v1/api';

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
    url = '';
}

// CORS header securiy
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});



//make this restful
app.get('/', routes.index);

app.get(url + '/users', users.index);

//read
app.post(url + '/test2', test2.index);

app.post(url + '/delete', remove.index);

app.post(url + '/update', update.index);


app.get(url + '/mongo' , mongo.index);





//creats the node server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
}); 

