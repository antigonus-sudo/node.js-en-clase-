const Orden = require('../models/orderModels')

class OrdenService {
    constructor(){}

    async getALL(){
        const ordenes = await Orden.find({})
        return ordenes
    }

    async filterById(id){
        const orden = await Orden.findOne({_id:id})
        return orden
    }

    async create(data){
        const orden = new Orden(data)
        return await orden.save()
    }

    async update (id, data){
        return await Orden.findByIdAndUpdate({_id:id}, data)
    }

    async delete (id){
        return await Orden.deleteOne({_id:id})
    }
}

module.exports = OrdenService
