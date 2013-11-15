/**
 * Created by Austin on 11/12/13.
 */

var collection = require('../models/mongo').collection;

exports.index = function(req, res){
    console.log(collection);
    res.send(200, JSON.stringify(Collection));
};