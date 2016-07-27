var Express = require('express');
var router = Express.Router();
var models = require('../../models')

router.route('/')
	.get(function (req, res) {
		res.render('home/login')
	})
	.post(function (req, res) {
		models.user.findAll({
			where: req.body
		}).then(function(users) {
			user = users[0];
			if (user) {
				res.redirect('/dashboard/' + user.dataValues.username);
			} else {
				res.redirect('/login');
			}
		})
	});

module.exports = router;
