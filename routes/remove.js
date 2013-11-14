/**
 * Created by Austin on 11/10/13.
 */
// Users model
var Users = require('../models/users').Users;

exports.index = function (req, res) {

    var userId = req.body.userId;
    console.log('userId is ' + req.body.userId)
    Users.remove({ userId: userId } , function (err) {
        if (err){ // ...
            console.log('error occured');

        }
        console.log('Delete of ' + req.body + 'was successful');
    });

    res.send(200);
    //Finds all of the documents matching the schema defined in the model file
};

