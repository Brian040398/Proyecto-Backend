//defino controlador 
const transaccionCtrl = require('./../controllers/transaccion.controller.js');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion
router.get('/', transaccionCtrl.getTransacciones);
router.post('/post', transaccionCtrl.createTransaccion);
router.get('/:id', transaccionCtrl.getTransaccion);
router.get('/filtro/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionesFiltroMonedas);
//exportamos el modulo de rutas
module.exports = router;