var Express = require('express');
var router = Express.Router();
var models = require('../../models')

router.route('/:username')
	.get(function (req, res) {
		models.user.findAll({
			where: req.params
		}).then(function(users) {
			models[users[0].dataValues.type].findAll({
				where: { id: users[0].dataValues.id}
			}).then(function(users) {
				res.render('student_dashboard/index', {user: users[0].dataValues});
			})
		})
	})

module.exports = router;
