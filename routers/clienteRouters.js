const express = require('express')
const router = express.Router()
const clienteControllers = require('../controllers/clienteControllers')

router.get('/', clienteControllers.getALLClients)
router.get('/:id', clienteControllers.getClient)
router.post('/', clienteControllers.createClient)
router.put('/:id', clienteControllers.updataClient)
router.delete('/:id', clienteControllers.deleteClient)

module.exports = router