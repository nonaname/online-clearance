var Express = require('express');
var router = Express.Router();
var models = require('../../models');
var mymodule = require('./../mymodule')

router.route('/:username')
	.get(function (req, res) {
		models.user.findAll({
			where: req.params
		}).then(function(user) {
			models.subject.findAll().then(function(subject) {
				res.render('dashboard/student', {subjects: mymodule.getDataValues(subject)});
				console.log('\n\n\n' + subject + '\n\n\n\n\n\n\n\n\n\n\n\n')
			})
		})
	});

module.exports = router;
