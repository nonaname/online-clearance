var Express = require('express');
var router = Express.Router();

router.get('/', function (req, res) {
	res.render('dashboard/student');
});

module.exports = router;
