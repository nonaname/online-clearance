// This loads the .env file on the project root directory to the process.env variable
require('dotenv').config();

// Require base modules of the app
var Express = require('express');
var Logger = require('morgan');
var BodyParser = require('body-parser');
var MethodOverride = require('method-override');
var path = require('path');

// Instantiate an app instance
var app = Express();
app.use(Express.static('./public/'));
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the templating engine (Google PugJS for reference)
app.set('view engine', 'pug');

// HTTP logger middleware
app.use(Logger('dev'));

// Body parser for JSON-type requests
app.use(BodyParser.json());

// Body parser for URL encoded (queries) data from requests
app.use(BodyParser.urlencoded({ extended: true }));

// So we can easily use PUT & DELETE requests
app.use(MethodOverride('_method'));

// Array of module names to load
var modules = [
    { name: 'home', path: '/' },
    'user',
    'signup',
    'login',
    'student'
];

// Load the app routes with the corresponding modules
require('./routeLoader')(modules, app);

// Start the app
app.listen(process.env.PORT || 3000, function () {
	console.log('Example app listening on port 3000!');
});
