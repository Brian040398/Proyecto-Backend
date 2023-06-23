const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1/proyectodb2';
mongoose.connect(URI)
.then(db=>console.log('DB funca'))
.catch(err=>console.error(err))
module.exports = mongoose;