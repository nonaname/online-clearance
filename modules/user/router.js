var Express = require('express');
var router = Express.Router();
var models = require('../../models');

router.route('/')
    .get(function (req, res) {
        models.user.findAll().then(function (users) {
            res.render('user/index', { users: users });
        });
    })
    .post(function (req, res) {
        models.user.create(req.body).then(function () {
            res.redirect('/user');
        });
    })

router.route('/:id')
    .get(function (req, res) {
        models.user.findAll().then(function (users) {
            res.render('user/index', { users: users, selectedUser: users.filter(function (user) { return user.id == req.params.id; })[0] });
        });
    })
    .post(function (req, res) {
        models.user.findById(req.params.id).then(function (user) {
            user.update(req.body).then(function () {
                res.redirect('/user');
            });
        });
    });

router.get('/:id/delete', function (req, res) {
    models.user.findById(req.params.id).then(function (user) {
        user.destroy();
        res.redirect('/user');
    });
});

module.exports = router;
