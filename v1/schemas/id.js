module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  //User Id from google, facebook, yahoo, etc.
  var id = new Schema({
    id: {type: String, index: true},
    user: {type: Schema.Types.ObjectId, ref: 'user'}
  })

  return mongoose.model('id', id);
};
