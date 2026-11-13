const express = require('express')
const router = express.Router()
const categoriaControllers = require('../controllers/categoriaControllers')

router.get('/', categoriaControllers.getALLCategories)
router.get('/:id', categoriaControllers.getCategory)
router.post('/', categoriaControllers.createCategory)
router.put('/:id', categoriaControllers.updataCategory)
router.delete('/:id', categoriaControllers.deleteCategory)

module.exports = router
