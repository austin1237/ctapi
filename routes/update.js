/**
 * Created by Austin on 11/10/13.
 */
var Users = require('../models/users').Users;

exports.index = function (req, res) {
    //var _id = req._id;
    var query = {userId: req.body.userId};
    console.log(query);
    console.log(req.body.userId + ' ' + ' ' + req.body.userName + ' ' + req.body.password);
    var update = {"userId": req.body.userId, "userName": req.body.userName, "password": req.body.password};
    console.log(update);
    Users.findOneAndUpdate( query, update, function (err) {
        if (err){ // ...
            console.log('error occured');
            console.log(err);

        }
        console.log(err);
        console.log('Update of ' + req.body + 'was successful');
    });

    res.send(200);
    //Finds all of the documents matching the schema defined in the model file
};

/*
var query = {"_id": id};
var update = {name: {first: 'john', last: 'smith'}};
var options = {new: true};
People.findOneAndUpdate(query, update, options, function(err, person) {
    if (err) {
        console.log('got an error');
    }

    // at this point person is null.
});*/
