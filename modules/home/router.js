var Express = require('express');
var router = Express.Router();

router.get('/', function (req, res) {
	res.send('hello world!');
});

module.exports = router;
