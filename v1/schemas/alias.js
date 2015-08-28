module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var alias = new Schema({
    name: String,
    main: {type: Boolean, default: false},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    projects: [{type: Schema.Types.ObjectId, ref: 'project'}]
  });

  return mongoose.model('alias', alias);
};
