const express = require('express');

const viewsCtlr = require('../controllers/views');

const router = express.Router();

var Franquiciador = require('../models/franquiciador');
var Franquiciado = require('../models/franquiciado');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// Views de la Página Principal
router.get('/franquiciador/signin', viewsCtlr.loadLoginFranquiciador);
router.get('/franquiciado/signin', viewsCtlr.loadLoginFranquiciado);
router.get('/register_admin', viewsCtlr.loadRegisterFranquiciador);
router.get('/perfil/franquiciado', viewsCtlr.loadProfileFranquiciado);
router.get('/perfil/franquiciador', viewsCtlr.loadProfileFranquiciador);
router.get('/nuevafranquicia', viewsCtlr.loadNuevaFranquicia);
router.get('/signin', viewsCtlr.loadLoginMain);




//FRANQUICIADOR
router.post('/register_admin', function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password_confirm;
    var gerente = req.body.gerente;
    var email = req.body.email;
    var telefono = req.body.telefono;


    //validation
    req.checkBody('username', 'El nombre de usuario es requerido').notEmpty();
    req.checkBody('password', 'La contraseña es requerida').notEmpty();
    req.checkBody('username', 'Confirme la contreseña para registrarse').notEmpty();
    req.checkBody('password', 'Las contraseñas deben coincidir').equals(req.body.password_confirm);
    req.checkBody('gerente', 'El campo de gerente es requerido').notEmpty();
    req.checkBody('email', 'El email es requerido').notEmpty();
    req.checkBody('telefono', 'El telefono es requerido').notEmpty();
    
    var errors = req.validationErrors();
    console.log(errors)
    if (errors){
        res.render('main/register_admin', {errors:errors});
    } else{
        var newFranquiciador = new Franquiciador({
            gerente: gerente,
            email: email,
            telefono: telefono,
            username: username,
            password: password,
            tipo: "franquiciador"
        });

        Franquiciador.createFranquiciador(newFranquiciador, function(err,franquiciador){
            if (err) throw err;
            console.log(franquiciador);
        });


        res.redirect('/franquiciador/signin');
    }
});


passport.use('Franquiciador',new LocalStrategy(
  function(username, password, done) {
    Franquiciador.getFranquiciadorByUsername(username, function(err,user){
        if(err) throw err;
        if (!user){
            return done(null,false);
        }
    
    Franquiciador.comparePassword(password, user.password, function(err,isMatch){
            if (err) throw err;
            if (isMatch){
                return done(null,user)
            } else{
                return(null,false,{'message':'Constraseña no válida'})
            }
        })
    })
  }));

passport.serializeUser(function(user, done) {
    var key = {
        id: user.id,
        tipo: user.tipo
    }
    done(null, key);

});
  
passport.deserializeUser(function(key, done) {
    if (key.tipo == 'franquiciador') {
        Franquiciador.getFranquiciadorById(key.id, function(err, user) {
        done(err, user);
        });
    } else if (key.tipo == "franquiciado") {
        Franquiciado.getFranquiciadoById(key.id, function(err, user) {
            done(err, user);
            });
    }
});

router.post('/franquiciador/signin', 
    passport.authenticate('Franquiciador',{
        success_Redirect: '/perfil/franquiciador',
        failureRedirect: '/franquiciador/signin',
        failureFlash: true
    }),function(req,res){
        console.log('ENTRAAA');
        res.redirect('../perfil/franquiciador')
});



//FRANQUICIA
router.post('/nuevafranquicia', function(req,res){
    var gerente = req.body.gerente;
    var email = req.body.email;
    var telefono = req.body.phone;
    var ubicacion = req.body.ubicacion;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    console.log(gerente, email, telefono, ubicacion, username, password, password2);

    //validation
    req.checkBody('username', 'El nombre de usuario es requerido').notEmpty();
    req.checkBody('email', 'El email es requerido').notEmpty();
    req.checkBody('phone', 'El telefono es requerido').notEmpty();
    req.checkBody('gerente', 'El nombre del gerente es requerido').notEmpty();
    req.checkBody('ubicacion', 'La ubicación es requerida').notEmpty();
    req.checkBody('email', 'Ingrese un email válido').isEmail();
    req.checkBody('password', 'La contraseña es requerida').notEmpty();
    req.checkBody('password2', 'Confirme la contreseña para registrarse').notEmpty();
    req.checkBody('password', 'Las contraseñas deben coincidir').equals(req.body.password2);

    var errors = req.validationErrors();
    console.log(errors)
    if (errors){
        res.render('../perfil_franquiciador/addfranchise', {errors:errors});
    } else {
        var newFranquiciado = new Franquiciado({
            gerente: gerente,
            emaiil: email,
            telefono: telefono,
            ubicacion: ubicacion,
            username: username,
            password: password,
            tipo: "franquiciado"
        });

        Franquiciado.createFranquiciado(newFranquiciado, function(err,user){
            if(err) throw err;
            console.log(user)
        });

        //req.flash('success_msg', 'Se ha creado la franquicia exitosamente');
        res.redirect('/nuevafranquicia');
    }

});

passport.use('Franquiciado',new LocalStrategy(
    function(username, password, done) {
      Franquiciado.getFranquiciadoByUsername(username, function(err,user){
          if(err) throw err;
          if (!user){
              return done(null,false);
          }
      
      Franquiciado.comparePassword(password, user.password, function(err,isMatch){
              if (err) throw err;
              if (isMatch){
                  return done(null,user)
              } else{
                  return(null,false,{'message':'Constraseña no válida'})
              }
          })
      })
    }));


router.post('/franquiciado/signin', 
    passport.authenticate('Franquiciado',{
        success_Redirect: '/perfil/franquiciado',
        failureRedirect: '/franquiciado/signin',
        failureFlash: true
    }),function(req,res){
        console.log('ENTRAAA');
        res.redirect('../perfil/franquiciado')
});


module.exports = router;
