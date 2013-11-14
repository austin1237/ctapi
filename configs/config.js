var Config = function() {
}

Config.prototype.getConfig = function() {
  config = {
    db: {

    	//var MONGOHQ_URL="mongodb://user:pass@server.mongohq.com:port_name/db_name"
    	//mongodb://<user>:<password>@paulo.mongohq.com:10023/test1
      prod: "mongodb://austin:password1@paulo.mongohq.com:10023/test1",
      dev: "mongodb://austin:password1@paulo.mongohq.com:10023/test1",
      test: "mongodb://austin:password1@paulo.mongohq.com:10023/test1"
    }
  }

  return config;
}

module.exports = Config;
