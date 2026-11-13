const mongoose=require('mongoose')
const Schema =mongoose.Schema

const productoSchema=new Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String
})
const producto= mongoose.model('producto', productoSchema)
module.exports= producto
