const Producto= require('../models/productoModels')

class ProductoService{
    constructor(){}

    async getALL(){
        const producto=await Producto.find({})
        return producto
    }

    async filterById(id){
        const producto=await Producto.findOne({_id:id})
        return producto
    }

    async create(data){  // si tines una async siempre tiene un await
        const producto=new Producto(data)
        return await producto.save()  //   <<==
    }

    async update (id, data){
        return await Producto.findByIdAndUpdate({_id:id},data)
    }

    async delete (id){
        return await Producto.deleteOne({_id:id})
    }

}

module.exports=ProductoService