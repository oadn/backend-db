module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var user = new Schema({
    ids: [{type: Schema.Types.ObjectId, ref: 'id'}],
    aliases: [{type: Schema.Types.ObjectId, ref: 'alias'}],
    mail: String,
    name: {type: String, index: true},
    pass: String
  })

  return mongoose.model('user', user);
}
