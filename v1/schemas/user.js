var crypto = require('crypto');

module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var user = new Schema({
    ids: [{type: Schema.Types.ObjectId, ref: 'id'}],
    aliases: [{type: Schema.Types.ObjectId, ref: 'alias'}],
    myBooks: [{
      book: {type: Schema.Types.ObjectId, ref: 'volume'},
      read: {type: Number, default: 0}
    }],
    mail: String,
    name: {type: String, index: true},
    salt: String,
    pass: String
  });

  user.pre('save', function(next){
    if(this.modifiedPaths().indexOf('pass')!=-1) {
      if(!this.salt) {
        this.salt = crypto.createHash('md5').update(Math.random()+new Date().toISOString()).digest('hex');
      }
      this.pass = crypto.createHash('sha256').update(this.salt+'.'+this.pass).digest('hex');
    }
    next();
  });

  user.methods.authenticate = function(pass) {
    return this.pass == crypto.createHash('sha256').update(this.salt+'.'+pass).digest('hex');
  };

  return mongoose.model('user', user);
}
