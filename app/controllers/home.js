module.exports.home = function(application, req, res){

	var _name = '';
	var _avatar = '';
	var _id = '';
	if(req.session.logged){
		_id = req.session.user_id;
		_name = req.session.user;
		_avatar = req.session.avatar;
	}

	res.render('home/home', {user: {id: _id, name: _name, avatar: _avatar}});
};
