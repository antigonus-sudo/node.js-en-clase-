const Proveedor = require('../models/proveedorModels')

class ProveedorService {
    constructor(){}

    async getALL(){
        const proveedores=await Proveedor.find({})
        return proveedores
    }

    async filterById(id){
        const proveedor=await Proveedor.findOne({_id:id})
        return proveedor
    }

    async create(data){
        const proveedor=new Proveedor(data)
        return await proveedor.save()
    }

    async update(id,data){
        return await Proveedor.findByIdAndUpdate({_id:id}, data)
    }

    async delete(id){
        return await Proveedor.deleteOne({_id:id})
    }
}

module.exports = ProveedorService
