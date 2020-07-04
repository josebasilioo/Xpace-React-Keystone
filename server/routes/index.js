const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Header = keystone.list('Header');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/header', (req, res) => {
    Header.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });
};