module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var post = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'alias'},
    message: String,
    stars: {type: Number, max: 5, min: 0},
    posts: [{type: Schema.Types.ObjectId, ref: 'post'}]
  });

  return mongoose.model('post', post);
}
