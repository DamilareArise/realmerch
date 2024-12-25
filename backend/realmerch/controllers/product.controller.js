// add product controller
const productModel = require('../models/product.model')
const express = require('express')

// add product
const addProduct = (req, res) => {
    const { name, price, description, category, quantity, image } = req.body
    
    const newProduct = new productModel({ name, price, description, category, quantity, image })
    newProduct.save()
        .then((data) => {
            res.send({ status: true, data })
        })
        .catch((err) => {
            res.status(500).send({ status: false, message: err.message })
        })
}
// get all products
const getAllProducts = (req, res) => {
    productModel.find()
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
    const { name, price, description, category, quantity, image } = req.body
    productModel.findByIdAndUpdate(id, { name, price, description, category, quantity, image}, { new: true })
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
            res.send({ status: true, data })
        })
        .catch((err) => {
            res.status(500).send({ status: false, message: err.message })
        })
}
// export all functions
module.exports = { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct }


