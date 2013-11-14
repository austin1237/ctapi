/**
 * Created by Austin on 11/12/13.
 */
var Users = require('../models/users').Users;

var Collection = require('../models/mongo').Collection;

exports.index = function(req, res){
   console.log(Collection);
};