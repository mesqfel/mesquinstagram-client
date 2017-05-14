module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

	application.get('/index/:form', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

	application.get('/home', function(req, res){
		application.app.controllers.home.home(application, req, res);
	});

	application.post('/login', function(req, res){
		application.app.controllers.index.login(application, req, res);
	});

	application.post('/logout', function(req, res){
		application.app.controllers.index.logout(application, req, res);
	});

	application.post('/create-user', function(req, res){
		application.app.controllers.index.createUser(application, req, res);
	});

};