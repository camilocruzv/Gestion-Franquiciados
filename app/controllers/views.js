'use strict'

var path = require('path');
// Main View

function loadMainPage(req, res){
    res.sendFile(path.resolve('app/views/main/main.html'));
}

function loadProfileFranquiciado(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciado/perfil_franquiciado.html'));
}

module.exports = {
    loadMainPage,
    loadProfileFranquiciado,
};
