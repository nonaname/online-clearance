var Express = require('express');
var router = Express.Router();
var models = require('../../models');
var mymodule = require('../mymodule');

router.route('/')
	.get(function (req, res) {
		models.year_level.findAll().then(function(year) {
			// var year = mymodule.getDataValue
		})
		res.render('home/signup');
		// for (var i = 7; i < 13; i++) {
		// 	models.year_level.create({
		// 		info: i
		// 	})
		// }

		// for (var i = 1; i < 7; i++) {
		// 	for (var j = 1; j < 5; j++) {
		// 		models.section.create({
		// 			name: Math.random(),
		// 			advisor: new Date().now,
		// 			year_level: i
		// 		})
		// 	}
		// }
	})
	.post(function (req, res) {
		// check if username is unique
		// check if password matches confirm_password
		// check if data is within the character range
		if (req.body.password === req.body.confirm_password) {
			models[req.body.type].create(req.body).then(function() {
				models[req.body.type].findAll({
					where: mymodule.filter(req.body, 'first_name', 'last_name', 'e_mail')
				}).then(function(user) {
					models.user.create({
						type: req.body.type,
						username: req.body.username,
						password: req.body.password,
						isOnline: false,
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
