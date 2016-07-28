var Express = require('express');
var router = Express.Router();

router.get('/', function (req, res) {
	res.render('home/index');
});

module.exports = router;
