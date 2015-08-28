var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alias = new Schema({
  name: String,
  main: {type: Boolean, default: false}
});

//User Id from google, facebook, yahoo, etc.
var id = new Schema({
  id: {type: String, index: true}
})

var user = new Schema({
  ids: [id],
  aliases: [alias],
  mail: String,
  name: {type: String, index: true},
  pass: String
})

module.exports = mongoose.model('user', user);
