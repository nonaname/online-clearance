var Express = require('express');
var router = Express.Router();
var models = require('../../models')

router.route('/')
	.get(function (req, res) {
		res.render('home/login')
	})
	.post(function (req, res) {
		console.log(req.body);
		models.user.findOne({
			where: req.body
		}).then(function(users) {
			console.log(users);
			user = users;
			if (user) {
				console.log(user)
				res.redirect('/' + user.dataValues.type + '/' + user.dataValues.username);
			} else {
				res.redirect('/login');
			}
		})
	});	

module.exports = router;
