const CategoriaService = require('../services/categoriaService')
const categoriaService = new CategoriaService()

exports.getALLCategories = async (req, res) => {
    const categorias = await categoriaService.getALL()
    res.status(200).json(categorias)
}

exports.getCategory = async (req, res) => {
    const id = req.params.id
    const categoria = await categoriaService.filterById(id)
    if (!categoria) {
        return res.status(400).json({"message": "Categoria no encontrada"})
    }
    res.status(200).json(categoria)
}

// para crear
// entrada = req y salida = res
exports.createCategory = async (req, res) => {
    try {
        let data = req.body // entrada 
        await categoriaService.create(data)
        res.status(201).send('Categoria Registrada')
    } catch (error) {
        res.status(500).json({"error": error.message}) // salida
    }
}

// para actualizar
exports.updataCategory = async (req, res) => {
    let data = req.body
    const id = req.params.id
    const categoria = await categoriaService.filterById(id)
    if (!categoria) {
        return res.status(400).json({"message": "Categoria no encontrada"})
    }
    await categoriaService.update(id, data)
    res.status(200).send('se modifico el registro correctamente')
}

// para eliminar 
exports.deleteCategory = async (req, res) => {
    const id = req.params.id
    const categoria = await categoriaService.filterById(id)
    if (!categoria) {
        return res.status(400).json({"message": "Usuario no encontrado"})
    }
    await categoriaService.delete(id)
    res.status(200).send('Se elimino el usuario correctamente')
}
