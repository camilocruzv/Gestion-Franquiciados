var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var ConsultoriaSchema = mongoose.Schema({
    id_franquicia: {
        type: String,
    },
    fecha: {
        type: String
    },
    estado: {
        type: String
    },
    comentarios: {
        type: String
    }
});

var Consultoria = module.exports = mongoose.model('Consultoria', ConsultoriaSchema);

module.exports.createConsultoria = function(newConsultoria,callback){
    newConsultoria.save(callback);
}

module.exports.getInfoConsultoria = function(req, res) {
    let id_franquicia = req.query.id_franquicia;
    Consultoria.findOne({ id_franquicia: id_franquicia }, (err, info_consultoria) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}`, status: 'failed' })
        if (!info_consultoria) return res.status(404).send({ message: `El aspirante no está registrado en la BD`, status: 'failed' })
        res.status(200).send({ info_consultoria, status: 'success' })
    });
}


