/**
 * Created by Austin on 11/12/13.
 */
var mongoose = require('mongoose');
//if (mongoose.connection.readyState == 0){//checks if already connected to the database
console.log("creating connection to the database");
var Config = require('../configs/config');
var config = new Config();
config = config.getConfig().db.dev;

if (mongoose.connection.readyState = 0 ) {
    mongoose.connect("mongodb://austin:password1@paulo.mongohq.com:10023/test1");
    console.log('mongoose readyState is ' + mongoose.connection.readyState);
}
var collection;

mongoose.connection.on('open', function (ref) {
    console.log('about to get names.');
    mongoose.connection.db.collectionNames(function (err, names) {//gets the names of the collections in the database
        collection = names
        console.log(names);
    });
});

module.exports.collection = collection;


