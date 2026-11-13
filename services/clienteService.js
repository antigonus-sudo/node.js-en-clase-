const Cliente = require('../models/clienteModels')

class ClienteService {
    constructor(){}

    async getALL(){
        const clientes = await Cliente.find({})
        return clientes
    }

    async filterById(id){
        const cliente = await Cliente.findOne({_id:id})
        return cliente
    }

    async create(data){
        const cliente = new Cliente(data)
        return await cliente.save()
    }

    async update (id, data){
        return await Cliente.findByIdAndUpdate({_id:id}, data)
    }

    async delete (id){
        return await Cliente.deleteOne({_id:id})
    }
}

module.exports = ClienteService
