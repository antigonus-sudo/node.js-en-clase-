const OrdenService = require('../services/ordenService')
const ordenService = new OrdenService()

exports.getALLOrders = async (req, res) => {
    const ordenes = await ordenService.getALL()
    res.status(200).json(ordenes)
}

exports.getOrder = async (req, res) => {
    const id = req.params.id
    const orden = await ordenService.filterById(id)
    if (!orden) {
        return res.status(400).json({"message": "Orden no encontrada"})
    }
    res.status(200).json(orden)
}

// para crear
// entrada = req y salida = res
exports.createOrder = async (req, res) => {
    try {
        let data = req.body // entrada 
        await ordenService.create(data)
        res.status(201).send('Orden Registrada')
    } catch (error) {
        res.status(500).json({"error": error.message}) // salida
    }
}

// para actualizar
exports.updataOrder = async (req, res) => {
    let data = req.body
    const id = req.params.id
    const orden = await ordenService.filterById(id)
    if (!orden) {
        return res.status(400).json({"message": "Orden no encontrada"})
    }
    await ordenService.update(id, data)
    res.status(200).send('se modifico el registro correctamente')
}

// para eliminar 
exports.deleteOrder = async (req, res) => {
    const id = req.params.id
    const orden = await ordenService.filterById(id)
    if (!orden) {
        return res.status(400).json({"message": "Usuario no encontrado"})
    }
    await ordenService.delete(id)
    res.status(200).send('Se elimino el usuario correctamente')
}
