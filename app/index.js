const express = require('express');
const server = express();
const routes = require('./routes/routes');
const path = require('path');
require('dotenv').config();
const session = require('express-session');
const mongo = require('mongodb');
const expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
var expressValidator = require('express-validator');
server.use(expressValidator())


//let dbConn = 'mongodb://user1:123456a@ds025232.mlab.com:25232/eacidb';
//let dbConn = 'mongodb://localhost/CRM';
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}).then( (req, res) => {
  console.log("Conectado a la base de datos exitosamente");
}).catch( err => {
  console.log("Error al conectarse a la base de datos: ", err);
});

// Middleware
const bodyParser = require('body-parser');
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

var sess = {
    secret: 'keyboard cat',
    cookie: {
      maxAge: 5 * 60000 // Five minutes
    },
    resave: true,
    saveUninitialized: true
  }
  server.use(session(sess));

  
  // Attach routes as middleware


server.use(passport.initialize());
server.use(passport.session());
server.use(routes);



server.set('port', process.env.PORT || 5000);

server.listen(server.get('port'), () => {
  console.log("server on port ${server.get('port')}");
});


/*
const PORT = 8000;
const HOST = '0.0.0.0'; 

server.listen(PORT, HOST, function(req, res){
    console.log('\nApp web corriendo en http://localhost:'+PORT+'\n');
  });
  */


  server.get('/', (req, res) => {
    res.redirect('/signin');  
  });
  
  module.exports = server;

MONGO_URI = 'mongodb+srv://proyectosw:proyectofinal@clusterfinal-ihwut.mongodb.net/test?retryWrites=true&w=majority';
mongoose.set('userFindAndModify',true);
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(db => console.log('DB IS CONNECTEDDDDD'));
console.log('CORRE')


const db = mongoose.connection;


server.set('view engine', 'jade');


server.use(passport.initialize());
server.use(passport.session());
server.set('views', path.join(__dirname, 'views'));

server.use(flash());
server.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});




