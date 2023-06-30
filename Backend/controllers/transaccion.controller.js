const Transaccion = require('../models/transaccion.js');


const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req, res) => {
    
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(201).json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        })
    } catch (error) {
        
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.',error
        })
    }
}

transaccionCtrl.getTransaccion = async (req, res) => {
    const transaccion = await Transaccion.findById(req.params.id);
    res.json(transaccion);
}

transaccionCtrl.getTransaccionesFiltroMonedas = async (req, res) => {
    try {
        const monedaOrigen = req.params.monedaOrigen,
        monedaDestino = req.params.monedaDestino;

        var transacciones = await Transaccion.find({ monedaOrigen: monedaOrigen});
        transacciones = await Transaccion.find({ monedaDestino: monedaDestino })
        res.json(transacciones);

    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: '0',
            msg: 'Error al filtrar transacciones por Monedas',

        })
    }

}
module.exports = transaccionCtrl;