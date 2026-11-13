const express = require('express')
const router = express.Router()
const proveedorControllers = require('../controllers/proveedorControllers')

router.get('/', proveedorControllers.getALLProviders)
router.get('/:id', proveedorControllers.getProvider)
router.post('/', proveedorControllers.createProvider)
router.put('/:id', proveedorControllers.updataProvider)
router.delete('/:id', proveedorControllers.deleteProvider)


module.exports = router
