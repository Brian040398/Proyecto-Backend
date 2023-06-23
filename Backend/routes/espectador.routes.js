//defino controlador 
const espectadorCtrl = require('./../controllers/espectador.controller.js');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion
router.get('/', espectadorCtrl.getEspectadores);
router.post('/post', espectadorCtrl.createEspectador);
router.get('/:id', espectadorCtrl.getEspectador);
//exportamos el modulo de rutas
module.exports = router;