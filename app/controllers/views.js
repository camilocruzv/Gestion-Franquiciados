'use strict'

var path = require('path');
// Main View

function loadLoginFranquiciador(req, res){
    res.sendFile(path.resolve('app/views/main/main.html'));
}

function loadLoginFranquiciado(req, res){
    res.sendFile(path.resolve('app/views/main/loginFranquiciado.html'));
}

function loadLoginMain(req, res){
    res.sendFile(path.resolve('app/views/main/principal.html'));
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
function loadBuscarFranquicia(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciador/buscarfranquicia.html'));
}

function loadAgregarConsultoria(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciador/agregarconsultoria.html'));
}

function loadRegisterFranquiciador(req, res){
    res.sendFile(path.resolve('app/views/main/register_admin.html'));
}

function loadGraficaEdadCliente(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciado/analisis_mercado/edad_cliente.html'));
}

function loadGraficaAnuncio(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciado/analisis_mercado/como_se_entero.html'));
}

function loadGraficaMercado(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciado/analisis_mercado/posicionamiento.html'));
}

function loadGraficaAudienciaAlcanzada(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciado/analisis_publicidad/audiencia.html'));
}

function loadGraficaTiempoAnuncio(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciado/analisis_publicidad/tiempo.html'));
}

function loadGraficaCanalesPublicitarios(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciado/analisis_publicidad/canales.html'));
}

//Franquiciador
function loadGraficaMercadoFranquiciador(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciador/analisis_mercado/posicionamiento.html'));
}

function loadGraficaAudienciaAlcanzadaFranquiciador(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciador/analisis_publicidad/audiencia.html'));
}

function loadGraficaCanalesPublicitariosFranquiciador(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciador/analisis_publicidad/canales.html'));
}

function loadFranquiciaEncontrada(req, res){
    res.sendFile(path.resolve('app/views/perfil_franquiciador/franquicia_encontrada.html'));
}

module.exports = {
    loadLoginFranquiciador,
    loadProfileFranquiciado,
    loadRegisterFranquiciador,
    loadProfileFranquiciador,
    loadNuevaFranquicia,
    loadLoginFranquiciado,
    loadLoginMain,
    loadBuscarFranquicia,
    loadGraficaEdadCliente,
    loadGraficaAnuncio,
    loadGraficaMercado,
    loadGraficaAudienciaAlcanzada,
    loadGraficaTiempoAnuncio,
    loadGraficaCanalesPublicitarios,
    loadGraficaMercadoFranquiciador,
    loadGraficaAudienciaAlcanzadaFranquiciador,
    loadGraficaCanalesPublicitariosFranquiciador,
    loadFranquiciaEncontrada,
    loadAgregarConsultoria
};
