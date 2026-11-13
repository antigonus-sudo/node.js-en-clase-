const mongoose=require('mongoose')
const Schema=mongoose.Schema

const clienteSchema=new Schema({
    nombre_completo: String,
    dni: String,
    correo: String,
    ciudad: String
})
const Cliente=mongoose.model('Cliente', clienteSchema)
module.exports=Cliente
