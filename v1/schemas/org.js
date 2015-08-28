module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var org = new Schema({
    name: String,
    members: [{
      user: {type: Schema.Types.ObjectId, ref: 'user'},
      isAdmin: {type: Boolean, default: false}
    }],
    projects: [{type: Schema.Types.ObjectId, ref: 'project'}]
  })

  return mongoose.model('org', org);
};
