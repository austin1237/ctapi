/**
 * Created by Austin on 11/10/13.
 */
var Users = require('../models/users').Users;

exports.index = function (req, res) {
    //var _id = req._id;
    var query = {_id: req.body._id};
    console.log(query);
    console.log(req.body.userId + ' ' + ' ' + req.body.userName + ' ' + req.body.password);
    console.log('the javascript object is ' + req.body.toString());
    var update = req.body;
    console.log('update string is' + JSON.stringify(update));

    //mongo doesn't like the following two field in the update
    delete update["$$hashKey"];
    delete update["_id"];

    Users.findOneAndUpdate( query, update, function (err) {
        if (err){ // ...
            console.log('error occured');
            console.log(err);
            res.send(500);

        }
        console.log('Update of ' + req.body + 'was successful');
    });

    res.send(200);
};


