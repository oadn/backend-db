module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var volume = new Schema({
    title: {type: String, required: true},
    description: String,
    license: String,
    price: {type: Number, default: 0},
    published: {type: Boolean, default: false},
    cover: String,
    stars: {type: Number, min: 0, max: 5},
    comments: [{type: Schema.Types.ObjectId, ref: 'post'}],
    reviews: [{type: Schema.Types.ObjectId, ref: 'post'}],
    members: [{
      user: {type: Schema.Types.ObjectId, ref: 'alias'},
      role: {type: String, enum: ['author', 'writer', 'editor', 'reviewer']}
    }],
    parts: [{type: Schema.Types.ObjectId, ref: 'part'}],
    project: [{type: Schema.Types.ObjectId, ref: 'project'}],
    preOrdered: [{type: Schema.Types.ObjectId, ref: 'alias'}],
    readers: [{type: Schema.Types.ObjectId, ref: 'alias'}]
  });

  return mongoose.model('volume', volume);
}
