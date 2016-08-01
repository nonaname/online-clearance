var Express = require('express');
var router = Express.Router();

router.get('/:username', function (req, res) {
	res.render('dashboard/teacher');
});

module.exports = router;
