const express = require('express')
const { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/product.controller')
const router = express.Router()
const multer = require('multer')
const cloudinary = require('../cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'realmerch',
        allowedFormats: ['jpg', 'png', 'jpeg'],   
    },
})

const upload = multer({ storage })

router.post('/add-product', upload.single('image'), addProduct)
router.get('/all-products', getAllProducts)
router.get('/product/:id', getProductById)
router.put('/update-product/:id', upload.single('image'),  updateProduct)
router.delete('/delete-product/:id', deleteProduct)

module.exports = router