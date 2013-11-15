var mongoose = require('mongoose');
//if (mongoose.connection.readyState == 0){//checks if already connected to the database
console.log("creating connection to the database");
var Config = require('../configs/config');
var config = new Config();
config = config.getConfig().db.dev;
mongoose.connect("mongodb://austin:password1@paulo.mongohq.com:10023/test1");
console.log('mongoose readyState is ' + mongoose.connection.readyState);

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userId: 'Number',
    userName: 'String',
    password:  'String'
});


var Users = mongoose.model('users', UserSchema);


console.log('users model created');
console.log('mongoose readyState is ' + mongoose.connection.readyState);
module.exports.Users = Users