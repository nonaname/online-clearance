var Express = require('express');
var router = Express.Router();

router.get('/', function (req, res) {
	res.render('home/login');
});

module.exports = router;
