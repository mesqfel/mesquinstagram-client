/* Import modules */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

/* Init express */
var app = express();

/* Set views */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Set express.static middleware */
app.use(express.static('./app/public'));

/* Set body-parser middleware */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* Set express-validator middleware */
app.use(expressValidator());

/* Set express-session */
app.use(expressSession({
	secret: 'f0357a3f154bc',
	resave: false,
	saveUninitialized: false
}));

/* Do the autoload */
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* Finally we export the app */
module.exports = app;