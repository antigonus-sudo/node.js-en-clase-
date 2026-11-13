const ProductoService = require('../services/productoService')
const productoService = new ProductoService()

exports.getALLProducts = async (req, res) => {
    const productos = await productoService.getALL()
    res.status(200).json(productos)
}

exports.getProduct = async (req, res) => {
    const id = req.params.id
    const producto = await productoService.filterById(id)
    if (!producto) {
        return res.status(400).json({"message": "Producto no encontrado"})
    }
    res.status(200).json(producto)
}

// para crear
exports.createProduct = async (req, res) => {
    try {
        let data = req.body
        await productoService.create(data)
        res.status(201).send('Producto Registrado')
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}

// para actualizar
exports.updateProduct = async (req, res) => {
    let data = req.body
    const id = req.params.id
    const producto = await productoService.filterById(id)
    if (!producto) {
        return res.status(400).json({"message": "Producto no encontrado"})
    }
    await productoService.update(id, data)
    res.status(200).send('Se modificó correctamente')
}

// para eliminar
exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    const producto = await productoService.filterById(id)
    if (!producto) {
        return res.status(400).json({"message": "Producto no encontrado"})
    }
    await productoService.delete(id)
    res.status(200).send('Se eliminó correctamente')
}
