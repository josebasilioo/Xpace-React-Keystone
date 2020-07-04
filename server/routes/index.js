const cors = require('cors');
const path = require('path');

const apiHeader = require('../views/Header');

exports = module.exports = function (app) {
	app.use(cors())
	// página principal
	app.get('/', function (req, res) {
		res.sendFile.join(__dirname, '../public/index.html')
	})

	//envia os dados do banco
	app.get('/api/header', apiHeader.getHeader)
	app.get('*', (req, res) => {
		res.redirect('/');
    });
}