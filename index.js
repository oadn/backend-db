var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var crypto = require('crypto');

mongoose.connect(config.mongo);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {

    app.use(session({
        secret: crypto.createHash('md5').update(__filename).digest('hex'),
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: db })
    }));

    app.use(bodyParser.urlencoded({extended: true}));

    app.use(bodyParser.json());

    app.use(function(err, req, res, next) {
      if(!err.status) return res.status(500).send(err.message||err);
      res.status(err.status).send(err.message);
    })

    var api = express.Router();

    api.use(function(req, res, next) {
      //Autenticar
      next();
    })

    api.use('/v1', require('./v1')(mongoose));

    app.use('/api', api);

    app.listen(config.port);

})
