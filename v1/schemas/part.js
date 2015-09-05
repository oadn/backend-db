var version = require('mongoose-version');

module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var part = new Schema({
    title: String,
    content: String,
    type: {type: String, enum: ['text', 'image']},
    parameters: [{
      key: String,
      val: String
    }],
    members: [{
      user: {type: Schema.Types.ObjectId, ref: 'alias'},
      role: {type: String, enum: ['author', 'writer', 'editor', 'reviewer']},
      stars: {type: Number, min: 0, max: 5},
      comments: [{type: Schema.Types.ObjectId, ref: 'post'}]
    }],
    parts: [{type: Schema.Types.ObjectId, ref: 'part'}]
  });

  part.plugin(version, {collection: 'partVersion', mongoose: mongoose});

  return mongoose.model('part', part);
}
