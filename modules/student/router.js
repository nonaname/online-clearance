var Express = require('express');
var router = Express.Router();
var models = require('../../models');
var mymodule = require('./../mymodule')

router.route('/:username')
	.get(function (req, res) {
		models.user.findOne({
			where: req.params
		}).then(function(user) {
			models.subject.findAll().then(function(subject) {
				models.requirement.findAll().then(function(requirement) {
					res.render('dashboard/student', {
						subjects: mymodule.getDataValues(subject),
						user: user.dataValues,
						requirements: mymodule.getDataValues(requirement)
					});
				})
			});
		})
	});

// router.route('/:username/:subject')
// 	.get(function(req, res) {
// 		models.user.findOne({
// 			where: mymodule.filter(req.params, 'username')
// 		}).then(function(user) {
// 			models.subject.findOne({
// 				where: mymodule.filter(req.params, 'subject')
// 			}).then(function(subject) {
// 				models.requirement.findAll({
// 					where: {
// 						type: 'subject',
// 						referenceID: subject.id
// 					}
// 				}).then(function(requirement) {
// 					res.render('dashboard/student', {
// 						subjects: mymodule.getDataValues(subject),
// 						user: user.dataValues,
// 						requirements: mymodule.getDataValues(requirement)
// 					})
// 				})
// 			})
// 		})
// 	})

router.route('/:username/edit')
	.get(function(req, res) {models.user.findOne({
			where: req.params
		}).then(function(user) {
			models.subject.findAll().then(function(subject) {
				models.requirement.findAll().then(function(requirement) {
					res.render('dashboard/student', {
						subjects: mymodule.getDataValues(subject),
						user: user.dataValues,
						requirements: mymodule.getDataValues(requirement)
					});
				})
			});
		})
	})
module.exports = router;
