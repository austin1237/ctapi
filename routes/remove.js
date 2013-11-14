/**
 * Created by Austin on 11/10/13.
 */
// Users model
var Users = require('../models/users').Users;

exports.index = function (req, res) {

    var _id = req.body._id;
    console.log('id is ' + req.body.userId)
    Users.remove({ _id: _id} , function (err) {
        if (err){ // ...
            console.log('error occured');
            res.send(500);

        }
        console.log('Delete of ' + _id + 'was successful');
    });

    res.send(200);
    //Finds all of the documents matching the schema defined in the model file
};

