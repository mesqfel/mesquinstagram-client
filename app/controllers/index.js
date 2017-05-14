module.exports.index = function(application, req, res){
	
	var showForm = {};
	if(req.params.form !== undefined)
		showForm.form = req.params.form;

	res.render('index/index', {errors: {}, formData: {}, showForm: showForm });
};

module.exports.login = function(application, req, res){

	var formData = req.body;

	req.assert('user', 'Username is a required field').notEmpty();
	req.assert('password', 'Password is a required field').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.render('index/index', {errors: errors, formData: formData, showForm: {form: 'login'}});
		return;
	}

	var userModel = new application.app.models.UserModel();

	userModel.loginUser(formData, req, res);
};

module.exports.logout = function(application, req, res){
	
	req.session.destroy(function(err){
		res.redirect('/');
	});

};

module.exports.createUser = function(application, req, res){

	var formData = req.body; 

	req.assert('user', 'Username is a required field').notEmpty();
	req.assert('password', 'Password is a required field').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.render('index/index', {errors: errors, formData: formData, showForm: {form: 'create'}});
		return;
	}

	var userModel = new application.app.models.UserModel();

	userModel.createUser(formData, req, res);
};
