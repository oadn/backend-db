module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var project = new Schema({
    name: {type: String, required: true},
    description: String,
    stars: {type: Number, min: 0, max: 5},
    price: {type: Number, default: 0},
    preOrdered: [{type: Schema.Types.ObjectId, ref: 'alias'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'post'}],
    org: {type: Schema.Types.ObjectId, ref: 'org'},
    members: [{
      user: {type: Schema.Types.ObjectId, ref: 'alias'},
      role: {type: String, enum: ['owner', 'author', 'writer', 'editor', 'reviewer']}
    }],
    volumes: [{type: Schema.Types.ObjectId, ref: 'volume'}]
  });

  return mongoose.model('project', project);
}
