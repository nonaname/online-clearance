var Express = require('express');
var router = Express.Router();
var models = require('../../models');
var mymodule = require('../mymodule');

router.route('/')
	.get(function (req, res) {
		models.year_level.findAll().then(function(year) {
			var year = mymodule.getDataValues(year);
			models.section.findAll().then(function(section) {
				var section = mymodule.getDataValues(section);
				res.render('home/signup', {
					years: year,
					sections: section
				});
			})
			console.log(year)
		})
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
