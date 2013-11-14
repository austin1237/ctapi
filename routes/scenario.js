
/*
 * GET home page.
 */

// Scenario model
var Scenario = require('../models/scenarios').Scenarios;

exports.index = function (req, res) {
  var query;

  Scenario.find(query, function (err, data) {
    if (err) {
      res.send(500, { error: 'Internal Error' });
    }

    if (!data) {
      res.send(403, { error: 'Authentication Failed' });
    }

    res.send(200, data);
  });
};