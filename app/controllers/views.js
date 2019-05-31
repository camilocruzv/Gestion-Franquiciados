'use strict'

var path = require('path');
// Main View

function loadMainPage(req, res){
    res.sendFile(path.resolve('app/views/main/main.html'));
}

module.exports = {
    loadMainPage,
};
