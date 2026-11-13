const Categoria = require('../models/categoriaModels')

class CategoriaService {
    constructor(){}

    async getALL(){
        const categorias = await Categoria.find({})
        return categorias
    }

    async filterById(id){
        const categoria = await Categoria.findOne({_id:id})
        return categoria
    }

    async create(data){
        const categoria = new Categoria(data)
        return await categoria.save()
    }

    async update (id, data){
        return await Categoria.findByIdAndUpdate({_id:id}, data)
    }

    async delete (id){
        return await Categoria.deleteOne({_id:id})
    }
}

module.exports = CategoriaService
