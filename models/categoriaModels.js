const mongoose=require('mongoose')
const Schema = mongoose.Schema

const categoriaSchema =new Schema({
    nombre_categoria:String,
    descripcion:String,
    activo:Boolean
})
const Categoria=mongoose.model('Categoria',categoriaSchema)
module.exports=Categoria