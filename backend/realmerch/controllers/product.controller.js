// add product controller


const productModel = require('../models/product.model')
const express = require('express')
const cloudinary = require('../cloudinary')





// add product
const addProduct = (req, res) => {
    const { name, price, description, category, quantity} = req.body
    // console.log(req.file.filename);
    
    
    const newProduct = new productModel({ name, price, description, category, quantity, image: req.file.path, imagePublic_id: req.file.filename })
    newProduct.save()
        .then((data) => {
            res.send({ status: true, data })
        })
        .catch((err) => {
            res.status(500).send({ status: false, message: err.message })
        })
}
// get all products and reverse the order by date

const getAllProducts = (req, res) => {
    productModel.find().sort({ date: -1 })
        .then((data) => {
            res.send({ status: true, data })
        })
        .catch((err) => {
            res.status(500).send({ status: false, message: err.message })
        })
}
// get product by id
const getProductById = (req, res) => {
    const { id } = req.params
    productModel.findById(id)
        .then((data) => {
            res.send({ status: true, data })
        })
        .catch((err) => {
            res.status(500).send({ status: false, message: err.message })
        })
}
// update product
const updateProduct = (req, res) => {
    const { id } = req.params
    const updateData = req.body
    if (req.file) {
        updateData.image = req.file.path
        updateData.imagePublic_id = req.file.filename
    }
    productModel.findByIdAndUpdate(id, updateData, { new: true })
        .then((data) => {
            res.send({ status: true, data })
        })
        .catch((err) => {
            res.status(500).send({ status: false, message: err.message })
        })
}
// delete product
const deleteProduct = (req, res) => {
    const { id } = req.params

    productModel.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({ status: false, message: 'Product not found' })
            }
            if (data.imagePublic_id) {
                cloudinary.uploader.destroy(data.imagePublic_id)
            }
            res.send({ status: true, data })
        })
        .catch((err) => {
            res.status(500).send({ status: false, message: err.message })
        })
}
// export all functions
module.exports = { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct }


