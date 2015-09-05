module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var post = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'alias'},
    message: String,
    stars: {type: Number, max: 5, min: 0},
    project: {type: Schema.Types.ObjectId, ref: 'project'},
    refType: {type: String, enum: ['comment', 'project', 'volume', 'author', 'writer', 'editor', 'review']},
    refOid: {type: Schema.Types.ObjectId},
    posts: [{type: Schema.Types.ObjectId, ref: 'post'}],
    state: {type: String, enum: ['posted', 'deleted', 'questioned']}
  });

  return mongoose.model('post', post);
}
