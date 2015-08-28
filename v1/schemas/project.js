module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var volume = new Schema({
    title: {type: String, required: true},
    description: String,
    stars: {type: Number, min: 0, max: 5},
    comments: [{type: Schema.Types.ObjectId, ref: 'post'}],
    reviews: [{type: Schema.Types.ObjectId, ref: 'post'}],
    members: [{
      user: {type: Schema.Types.ObjectId, ref: 'alias'},
      role: {type: String, enum: ['author', 'writer', 'editor', 'reviewer']}
    }],
    parts: [{type: Schema.Types.ObjectId, ref: 'part'}]
  });

  var project = new Schema({
    name: {type: String, required: true},
    description: String,
    stars: {type: Number, min: 0, max: 5},
    comments: [{type: Schema.Types.ObjectId, ref: 'post'}],
    org: {type: Schema.Types.ObjectId, ref: 'org'},
    members: [{
      user: {type: Schema.Types.ObjectId, ref: 'alias'},
      role: {type: String, enum: ['owner', 'author', 'writer', 'editor', 'reviewer']}
    }],
    volumes: [volume]
  });

  return mongoose.model('project', project);
}
