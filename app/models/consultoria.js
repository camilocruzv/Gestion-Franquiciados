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


