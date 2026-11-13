const express = require('express')
const router = express.Router()
const ordenControllers = require('../controllers/ordenControllers')

router.get('/', ordenControllers.getALLOrders)
router.get('/:id', ordenControllers.getOrder)
router.post('/', ordenControllers.createOrder)
router.put('/:id', ordenControllers.updataOrder)
router.delete('/:id', ordenControllers.deleteOrder)

module.exports = router