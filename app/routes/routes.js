const express = require('express');

const viewsCtlr = require('../controllers/views');

const router = express.Router();

// Views de la Página Principal
router.get('/signin', viewsCtlr.loadMainPage);

router.get('/perfil/franquiciado', viewsCtlr.loadProfileFranquiciado);

module.exports = router;
