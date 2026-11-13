const mongoose=require('mongoose')
const Schema = mongoose.Schema

const proveedorSchema=new Schema({
    ruc: String,
    telefono: String,
    direccion:String
})

const Proveedor=mongoose.model('Proveedor',proveedorSchema)
module.exports= Proveedor