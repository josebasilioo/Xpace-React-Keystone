const keystone = require('keystone');
const Header = keystone.list('Header').model;
const handlers = {
  getHeader: function (req, res) {

    Header.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers;