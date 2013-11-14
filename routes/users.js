// Users model
var Users = require('../models/users').Users;

exports.index = function (req, res) {
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