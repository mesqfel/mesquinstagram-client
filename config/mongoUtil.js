var MongoClient = require('mongodb').MongoClient;
var MongoUri = require('./mongoUri');

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect(MongoUri.getUri(), function( err, db ) {
      _db = db;
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};