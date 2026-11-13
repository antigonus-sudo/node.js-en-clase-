const mongoose=require('mongoose')
const Schema = mongoose.Schema

const ordenSchema =new Schema({
    nro_pedido: String,
    total: Number,
    metodo_pago: String,
    entregado: Boolean
})
const Orden=mongoose.model('Orden',ordenSchema)
module.exports=Orden