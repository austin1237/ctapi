var mongoose = require('mongoose');

	var Config = require('../configs/config');//Mongoose connection details =
	var config = new Config();
	config = config.getConfig().db.dev;
	mongoose.connect(config);///connects to the mongoose database

var Schema = mongoose.Schema;

//What you want to grab from the database
var ScenarioSchema = new Schema({
  title: 'String', 
  description: 'String', 
  createdDate: 'Date', 
  numberOfViews: 'Number'
});

//mongoose.model('Collection name in the database', Schema created);
var Scenarios = mongoose.model('scenarios', ScenarioSchema);


module.exports.Scenarios = Scenarios;
