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
    password: {
        type: String
    },
    tipo: {
        type: String
    },
    porcentajeEdad: [{
        joven: String,
        adulto: String,
        adultoMayor: String,
        anciano: String,
    }],
    anuncio: [{
        internet: String,
        fachada: String,
        otro: String,
    }],
    tiempo: [{
        rango1: String,
        rango2: String,
        rango3: String,
        rango4: String,
    }]
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

module.exports.getInfoFranquiciado = function(req, res) {
    let username = req.query.username;
    Franquiciado.findOne({ username: username }, (err, info_franquiciado) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}`, status: 'failed' })
        if (!info_franquiciado) return res.status(404).send({ message: `El aspirante no está registrado en la BD`, status: 'failed' })
        res.status(200).send({ info_franquiciado, status: 'success' })
    });
}

module.exports.getInfoFranquiciadoPorUbi = function(req, res) {
    let ubicacion = req.query.ubicacion;
    Franquiciado.findOne({ ubicacion: ubicacion }, (err, info_franquiciado2) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}`, status: 'failed' })
        if (!info_franquiciado2) return res.status(404).send({ message: `El aspirante no está registrado en la BD`, status: 'failed' })
        res.status(200).send({ info_franquiciado2, status: 'success' })
    });
}