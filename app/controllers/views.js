'use strict'

var path = require('path');
// Main View

function loadLoginFranquiciador(req, res){
    res.sendFile(path.resolve('app/views/main/main.html'));
}

function loadLoginFranquiciado(req, res){
    res.sendFile(path.resolve('app/views/main/loginFranquiciado.html'));
}

function loadProfileFranquiciado(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciado/perfil_franquiciado.html'));
}
function loadProfileFranquiciador(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciador/perfil_franquiciador.html'));
}

function loadNuevaFranquicia(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciador/addfranchise.html'));
}

function loadRegisterFranquiciador(req, res){
    res.sendFile(path.resolve('app/views/main/register_admin.html'));
}



module.exports = {
    loadLoginFranquiciador,
    loadProfileFranquiciado,
    loadRegisterFranquiciador,
    loadProfileFranquiciador,
    loadNuevaFranquicia,
    loadLoginFranquiciado,
};
