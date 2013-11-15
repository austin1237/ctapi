// Users model
var Users = require('../models/users').Users;

exports.index = function (req, res) {

    var user = new Users(req.body);
    user.save(function (err) {
        if (err){ // ...
            console.log('error occured');
            console.log(err);
        }
        console.log('insert of ' + req.body + 'was successful');
    });

    res.send(200);
    //Finds all of the documents matching the schema defined in the model file
};