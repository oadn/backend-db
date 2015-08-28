module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var part = new Schema({
    title: String,
    textContent: String
  });

  part.add({parts: [part]});

  var book = new Schema({
    title: {type: String, required: true},
    members: [{
      user: {type: Schema.Types.ObjectId, ref: 'user'},
      role: {type: String, enum: ['author', 'writer', 'editor', 'reviewer']}
    }],
    parts: [part]
  });

  var project = new Schema({
    name: {type: String, required: true},
    org: {type: Schema.Types.ObjectId, ref: 'org'},
    members: [{
      user: {type: Schema.Types.ObjectId, ref: 'user'},
      role: {type: String, enum: ['owner', 'author', 'writer', 'editor', 'reviewer']}
    }],
    books: [book]
  });

  return mongoose.model('project', project);
}
