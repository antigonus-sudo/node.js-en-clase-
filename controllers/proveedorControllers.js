const ProveedorService = require('../services/proveedorService')
const proveedorService = new ProveedorService()

exports.getALLProviders = async (req, res) => {
    const proveedores = await proveedorService.getALL()
    res.status(200).json(proveedores)
}

exports.getProvider = async (req, res) => {
    const id = req.params.id
    const proveedor = await proveedorService.filterById(id)
    if (!proveedor) {
        return res.status(400).json({"message": "Proveedor no encontrado"})
    }
    res.status(200).json(proveedor)
}

// para crear
// entrada = req y salida = res
exports.createProvider = async (req, res) => {
    try {
        let data = req.body // entrada 
        await proveedorService.create(data)
        res.status(201).send('Proveedor Registrado')
    } catch (error) {
        res.status(500).json({"error": error.message}) // salida
    }
}

// para actualizar
exports.updataProvider = async (req, res) => {
    let data = req.body
    const id = req.params.id
    const proveedor = await proveedorService.filterById(id)
    if (!proveedor) {
        return res.status(400).json({"message": "Proveedor no encontrado"})
    }
    await proveedorService.update(id, data)
    res.status(200).send('se modifico el registro correctamente')
}

// para eliminar 
exports.deleteProvider = async (req, res) => {
    const id = req.params.id
    const proveedor = await proveedorService.filterById(id)
    if (!proveedor) {
        return res.status(400).json({"message": "Usuario no encontrado"})
    }
    await proveedorService.delete(id)
    res.status(200).send('Se elimino el usuario correctamente')
}
