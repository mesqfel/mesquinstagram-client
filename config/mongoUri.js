require('dotenv').config();

var _uri = process.env.MONGODB_URI;
module.exports = {
  getUri: function() {
    return _uri;
  }
};