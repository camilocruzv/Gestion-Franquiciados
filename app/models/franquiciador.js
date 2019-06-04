var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var FranquiciadorSchema = mongoose.Schema({
    gerente: {
        type: String
    },
    email: {
        type: String
    },
    telefono: {
        type: String
    },
    username: {
        type: String,
    },
    password: {
        type: String
    },
    tipo: {
        type: String
    },
    
});

var Franquiciador = module.exports = mongoose.model('Franquiciador', FranquiciadorSchema);

module.exports.createFranquiciador = function(newFranquiciador,callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newFranquiciador.password, salt, function(err, hash) {
            newFranquiciador.password = hash;
            newFranquiciador.save(callback);
        });
    }); 
}

module.exports.getFranquiciadorByUsername = function(username, callback){
    var query = {username: username};
    Franquiciador.findOne(query, callback);

}
module.exports.getFranquiciadorById = function(id, callback){
    Franquiciador.findById(id, callback);

}

module.exports.comparePassword = function(candidatepassword,hash, callback) {
    bcrypt.compare(candidatepassword,hash, function(err,isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
}

module.exports.getInfoFranquiciador = function(req, res) {
    var username = req.query.username;
    Franquiciador.findOne({ username: username }, (err, info_franquiciador) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}`, status: 'failed' })
        if (!info_franquiciador) return res.status(404).send({ message: `El aspirante no está registrado en la BD`, status: 'failed' })
        res.status(200).send({ info_franquiciador, status: 'success' })
    });
}
