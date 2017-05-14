var crypto = require('crypto');
var mongoUtil = require('../../config/mongoUtil');

function UserModel(){
}

//Create a user
UserModel.prototype.createUser = function(user, req, res){

	var cryptoPassword = crypto.createHash('md5').update(user.password).digest('hex');
	user.password = cryptoPassword;

	var avatars = ['bart', 'homer', 'lisa', 'maggie', 'marge'];

	//Generate random index between 0 to 4
	var index = Math.floor(Math.random() * 5) + 0;

	//Set a random profile pic for the new user
	user.avatar = avatars[index];

	var db = mongoUtil.getDb();

	db.collection('users').insert(user, {}, function(err, result){

		req.session.logged = true;
		req.session.user_id = result.ops[0]._id;
		req.session.user = user.user;
		req.session.avatar = user.avatar;

		res.redirect('home');
	});

};

//Login a user
UserModel.prototype.loginUser = function(user, req, res){

	var cryptoPassword = crypto.createHash('md5').update(user.password).digest('hex');
	user.password = cryptoPassword;

	var db = mongoUtil.getDb();

	db.collection('users').find(user).toArray(function(err, result){

		if(result[0] !== undefined){
			req.session.logged = true;
			req.session.user_id = result[0]._id;
			req.session.user = result[0].user;
			req.session.avatar = result[0].avatar;

			res.redirect('home');
		}
		else{
			res.redirect('/');
		}

	});

};

module.exports = function(){
	return UserModel;
};