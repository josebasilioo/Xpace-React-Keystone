const cors = require('cors');
const path = require('path');

const apiHeader = require('../views/Header');
const apiFoods = require('../views/Foods');

exports = module.exports = function (app) {
	app.use(cors())

	app.get('/', function (req, res) {
		res.sendFile.join(__dirname, '../public/index.html')
	})


	app.get('/api/header', apiHeader.getHeader)
	app.get('/api/foods', apiFoods.getFoods)
	app.get('*', (req, res) => {
		res.redirect('/');
    });
}