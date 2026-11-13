const express = require('express')
const router = express.Router()
const productoControllers = require('../controllers/productoControllers')

router.get('/', productoControllers.getALLProducts)
router.get('/:id', productoControllers.getProduct)
router.post('/', productoControllers.createProduct)
router.put('/:id', productoControllers.updateProduct) 
router.delete('/:id', productoControllers.deleteProduct) 
module.exports = router

