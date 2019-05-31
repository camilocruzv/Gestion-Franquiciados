const express = require('express');
const server = express();
const routes = require('./routes/routes');
const path = require('path');
require('dotenv').config();
const session = require('express-session');

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
server.use(routes);

const PORT = 8000;
const HOST = '0.0.0.0'; 

server.listen(PORT, HOST, function(req, res){
    console.log('\nApp web corriendo en http://localhost:'+PORT+'\n');
  });

  server.get('/', (req, res) => {
    res.redirect('/signin');  
  });
  
  module.exports = server;
