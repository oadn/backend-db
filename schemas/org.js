var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var org = new Schema({
  name: String,
  owners: [{type: Schema.Type.ObjectId, ref: 'user'}],
  members: [{type: Schema.Type.ObjectId, ref: 'user'}]
})

module.exports = mongoose.model('org', org);
