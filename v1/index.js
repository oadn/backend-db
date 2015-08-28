var express = require('express');

module.exports = function(mongoose) {

    var version = express.Router();

    var model = require('./schemas')(mongoose);

    //CRUD Routing
    for(var i in model) {
      (function(name, model) {
        version.route('/'+name)
          .get(function(req, res, next) {
            model
              .find(req.query)
              .exec(function(err, list) {
                if(err) return next(err);
                res.json(list);
              });
          })
          .post(function(req, res, next) {
            model.create(req.body, function(err, item) {
              if(err) return next(err);
              res.json(item);
            })
          });

        version.route('/'+name+'/:id')
          .get(function(req, res, next) {
            model
              .findOne({_id: req.params.id})
              .exec(function(err, item) {
                if(err) return next(err);
                res.json(item);
              });
          })
          .put(function(req, res, next) {
            model
              .findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true})
              .exec(function(err, item){
                if(err) return next(err);
                res.json(item);
              })
          })
          .delete(function(req, res, next) {
            model
              .findOneAndRemove({_id: req.params.id})
              .exec(function(err, item) {
                if(err) return next(err);
                res.json(item);
              })
          })
      })(i, model[i])
    }

    //Particular routing
    var pub = express.Router();

    pub.post('/login', function(req, res, next) {
      model.user
        .findOne({name: req.body.name})
        .exec(function(err, user) {
          if(err) return next(err);
          if(!user || !user.authenticate(req.body.pass)) return next({status: 404, message: 'Invalid username or password.'});
          req.session.user = user;
          res.status(200).end();
        });
    });

    version.use('/public', pub);

    return version;
}
