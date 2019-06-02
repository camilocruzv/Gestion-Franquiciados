var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var FranquiciadoSchema = mongoose.Schema({
    gerente: {
        type: String,
    },
    email: {
        type: String
    },
    telefono: {
        type: String
    },
    ubicacion: {
        type: String
    },
    username: {
        type: String
    },
    passwprd: {
        type: String
    }
});

var Franquiciado = module.exports = mongoose.model('Franquiciado', FranquiciadoSchema);

module.exports.createFranquiciado = function(newFranquiciado,callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newFranquiciado.password, salt, function(err, hash) {
            newFranquiciado.password = hash;
            newFranquiciado.save(callback);
        });
    }); 
}

module.exports.getFranquiciadoByUsername = function(username, callback){
    var query = {username: username};
    Franquiciado.findOne(query, callback);

}
module.exports.getFranquiciadoById = function(id, callback){
    Franquiciado.findById(id, callback);

}

module.exports.comparePassword = function(candidatepassword,hash, callback) {
    bcrypt.compare(candidatepassword,hash, function(err,isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
}