const Ticket = require('../models/ticket.js');


const ticketCtrl = {}

ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find();
    res.json(tickets);
}

ticketCtrl.createTicket = async (req, res) => {
    
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(201).json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.',error
        })
    }
}
ticketCtrl.getTicket = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    res.json(ticket);
}

ticketCtrl.editTicket = async (req, res) => {
    try {
      await Ticket.updateOne({ _id: req.params.id }, req.body);
      res.json({
        status: '1',
        msg: 'ticket actualizado'
      });
    } catch (error) {
      res.status(400).json({
        status: '0',
        msg: 'Error procesando la operación'
      });
    }
  };

  ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = ticketCtrl;