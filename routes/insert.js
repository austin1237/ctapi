
//User model
var user = require('../models/users').Users;

exports.index = function (req, res) {
    var query;
    console.log("POST: ");
    console.log(req.body);
    console.log(req.body.mydata);
    var jsonData = JSON.parse(req.body.mydata);

    var insert = new user(jsonData);

    insert.save(query, function (err, data) {
        if (err) {
            res.send(500, { error: 'Failed insert' });
        }

        if (!data) {
            res.send(403, { error: 'Authentication Failed' });
        }

        res.send(200, data);
        console.log("insert succesful");
    });
};