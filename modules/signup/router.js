var Express = require('express');
var router = Express.Router();
var models = require('../../models')

router.route('/')
	.get(function (req, res) {
		res.render('home/signup')
	})
	.post(function (req, res) {
		// check if username is unique
		// check if password matches confirm_password
		// check if data is within the character range
		if (req.body.password === req.body.confirm_password) {
			models[req.body.type].create(req.body).then(function() {
				models[req.body.type].findAll({
					where: {first_name: req.body.first_name, 
							last_name: req.body.last_name,
							e_mail: req.body.e_mail}
				}).then(function(user) {
					models.user.create({
						type: req.body.type,
						username: req.body.username,
						password: req.body.password,
						referenceID: user[0].dataValues.id
					})
				})
				res.redirect('/login');
			});
		} else {
			res.redirect('/');
		}
	});
	
module.exports = router;
