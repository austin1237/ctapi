
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');

//supervisor -s -. node app
// Users controller
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


app.get('/', routes.index);

//users endpoint
app.get(url + '/users', users.index);

app.post(url + '/test2', test2.index);

app.post(url + '/delete', remove.index);

app.post(url + '/update', update.index);


app.get(url + '/mongo' , mongo.index)


/*    function(req, res) {
    var name = req.body.name;
    var userId = req.body.userId;
    var password = req.body.password;

    console.log(req.body);
    res.send(200);
});*/


// Scenario endpoint
//app.get(url + '/scenarios', scenario.index);

//test1 endpoint
//app.get(url + '/test1', test1.index);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
}); 

