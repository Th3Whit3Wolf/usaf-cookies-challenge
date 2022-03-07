const express  = require('express'),
    app      = express();

    app.use(express.json());
// http://billpatrianakos.me/blog/2015/12/01/organizing-express-routes/
require('./routes')(app);

function createServer() {
	return app
}

module.exports = createServer;