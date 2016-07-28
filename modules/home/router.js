var Express = require('express');
var router = Express.Router();
var models = require('../../models')

router.get('/', function (req, res) {
	res.render('home/index');
});
module.exports = router;


function gD(table) {
	for (var i = 1; i < arguments.length; i++) {
		models[table].create(arguments[i]);
	}
}

gD('admin', {
	name: 'Jarred'
})

gD('club', {
	name: 'ACES',
	adviser: 'Sir Buma'
})


gD('teacher', {
	first_name: 'Melvin',
	last_name: 'Bumanglag',
	e_mail: 'BM@gmail.com'
})

for (var i = 7; i < 13; i++)
	gD('year_level', {info: i});

gD('section', 	{name: 'Diamond', adviser: null, year_level: 1},
				{name: 'Rosal', adviser: null, year_level: 2});

gD('student', {
	first_name: 'Hans',
	last_name: 'Solo',
	e_mail: 'HS@gmail.com'
}, {
	first_name: 'Hans',
	last_name: 'Duo',
	e_mail: 'HSS@gmail.com'
}, {
	first_name: 'Hans',
	last_name: 'Trio',
	e_mail: 'HSSS@gmail.com'
});

gD('subject', {name: 'English'}, {name: 'Mathematics'}, {name: 'Integrated Science'});