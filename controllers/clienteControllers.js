const ClienteService = require('../services/clienteService')
const clienteService = new ClienteService()

exports.getALLClients = async (req, res) => {
    const clientes = await clienteService.getALL()
    res.status(200).json(clientes)
}

exports.getClient = async (req, res) => {
    const id = req.params.id
    const cliente = await clienteService.filterById(id)
    if (!cliente) {
        return res.status(400).json({"message": "Cliente no encontrado"})
    }
    res.status(200).json(cliente)
}

// para crear
// entrada = req y salida = res
exports.createClient = async (req, res) => {
    try {
        let data = req.body // entrada 
        await clienteService.create(data)
        res.status(201).send('Cliente Registrado')
    } catch (error) {
        res.status(500).json({"error": error.message}) // salida
    }
}

// para actualizar
exports.updataClient = async (req, res) => {
    let data = req.body
    const id = req.params.id
    const cliente = await clienteService.filterById(id)
    if (!cliente) {
        return res.status(400).json({"message": "Cliente no encontrado"})
    }
    await clienteService.update(id, data)
    res.status(200).send('se modifico el registro correctamente')
}

// para eliminar 
exports.deleteClient = async (req, res) => {
    const id = req.params.id
    const cliente = await clienteService.filterById(id)
    if (!cliente) {
        return res.status(400).json({"message": "Usuario no encontrado"})
    }
    await clienteService.delete(id)
    res.status(200).send('Se elimino el usuario correctamente')
}
