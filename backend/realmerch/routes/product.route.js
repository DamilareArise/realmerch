const express = require('express')
const { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/product.controller')
const router = express.Router()

router.post('/add-product', addProduct)
router.get('/all-products', getAllProducts)
router.get('/product/:id', getProductById)
router.put('/update-product/:id', updateProduct)
router.delete('/delete-product/:id', deleteProduct)

module.exports = router