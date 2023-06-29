const Producto = require('../models/producto.js');


const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {

    let criteria = {};
    if ((req.query.destacado != null) && (req.query.destacado != "")){
        criteria.destacado = req.query.destacado;
    }

    var productos = await Producto.find(criteria);
    res.json(productos);
}










productoCtrl.createProducto = async (req, res) => {
    
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.status(201).json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.',error
        })
    }
}
productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

productoCtrl.editProducto = async (req, res) => {
    try {
      await Producto.updateOne({ _id: req.params.id }, req.body);
      res.json({
        status: '1',
        msg: 'Producto actualizado'
      });
    } catch (error) {
      res.status(400).json({
        status: '0',
        msg: 'Error procesando la operación'
      });
    }
  };

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'producto removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }


    productoCtrl.getProductoDestacados = async (req, res) => {
        var criteria = { 'destacado': true };
        var productos = await Producto.find(criteria);
        res.json(productos);
    }
}
module.exports = productoCtrl;