// Users model
var Users = require('../models/users').Users;


//Read
exports.read = function (req, res) {
    var query ={};

    //Finds all of the documents matching the schema defined in the model file
    console.log('about to fire off database query');
    Users.find(query, function (err, data) {
        console.log('query has been fired');
        if (err) {
            // if something goes wrong respond with an error
            res.send(500, { error: 'Internal Error' });
            console.log('500 error');
        }

        if (!data) {
            //if no data is return let the user know that authentication failed
            res.send(403, { error: 'Authentication Failed' });
            console.log('403 error');
        }

        //if data is collected from the database return a 200 header, with the json from mongo.
        res.send(200, data);
        console.log('data has been sent');
        return;
    });
};




//Update
exports.update = function (req, res) {
    //var _id = req._id;
    var query = {_id: req.params.id } //id from url};
    console.log(query);
    console.log(req.body.userId + ' ' + ' ' + req.body.userName + ' ' + req.body.password);
    console.log('the javascript object is ' + req.body.toString());
    var update = req.body;
    console.log('update string is' + JSON.stringify(update));

    //mongo doesn't like the following two fields in the update
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


//Save
exports.write = function (req, res) {

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


//Delete
exports.delete = function (req, res) {

    var _id = req.params.id;//id from url
    console.log('id is ' + _id)
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

