//defino controlador 
const ticketCtrl = require('./../controllers/ticket.controller.js');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion
router.get('/', ticketCtrl.getTickets);
router.post('/post', ticketCtrl.createTicket);
router.get('/:id', ticketCtrl.getTicket);
router.put('/:id', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
//exportamos el modulo de rutas
module.exports = router;