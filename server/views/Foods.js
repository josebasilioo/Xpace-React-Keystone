const keystone = require('keystone');
const Foods = keystone.list('Foods').model;
const handlers = {
  getFoods: function (req, res) {

    Foods.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers;