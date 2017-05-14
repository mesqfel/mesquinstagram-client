var mongoUtil = require('./config/mongoUtil');

/* Import server configs */
var app = require('./config/server');

mongoUtil.connectToServer( function( err ) {

  app.listen(8000, function(){
  	console.log('Server now listening on port 8000');
  });

});