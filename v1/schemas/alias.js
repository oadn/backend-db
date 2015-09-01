module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var alias = new Schema({
    name: String,
    stars: {type: Number, min: 0, max: 5},
    main: {type: Boolean, default: false},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    preOrders: [{type: Schema.Types.ObjectId, ref: 'volume'}],
    projects: [{type: Schema.Types.ObjectId, ref: 'project'}]
  });

  return mongoose.model('alias', alias);
};
