const express    = require('express'),
    cookieParser = require('cookie-parser'),
    app          = express();

app
    .use(express.json())
    .use(cookieParser());

// http://billpatrianakos.me/blog/2015/12/01/organizing-express-routes/
require('./routes')(app);

function createServer() {
	return app
}

module.exports = createServer;