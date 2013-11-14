var mongoose = require('mongoose');
if (mongoose.connection.readyState == 0){//checks if already connected to the database
	var Config = require('../configs/config');
	var config = new Config();
	config = config.getConfig().db.dev;
	mongoose.connect(config);
}

var Schema = mongoose.Schema;

var Test1Schema = new Schema({
  title: 'String', 
  description: 'String', 
  createdDate: 'Date', 
  
});

var Test1 = mongoose.model('scenarios', Test1Schema);


// var kitty = new Test1({title: 'Test2', description: 'Test2', createdDate: new Date(), numberOfViews: 0});

// kitty.save(function (err) {
//   if (err) // ...
//   console.log('save failed');
// });

module.exports.Test1 = Test1;