
/*
 * GET home page.
 */

// test1 model
var Test1 = require('../models/test1').Test1;

exports.index = function (req, res) {
  var query;

  //Finds all of the documents matching the schema defined in the model file
  Test1.find(query, function (err, data) {
    
    if (err) {
      // if something goes wrong respond with an error
      res.send(500, { error: 'Internal Error' });
    }

    if (!data) {
      //if no data is return let the user know that authentication failed
      res.send(403, { error: 'Authentication Failed' });
    }

    //if data is collected from the database return a 200 header, with the json from mongo.
    res.send(200, data);
  });
};