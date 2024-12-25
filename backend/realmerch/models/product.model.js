// create a product model
const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    quantity: Number,
    image: String,
    date: { type: Date, default: Date.now },
    is_active: { type: Boolean, default: true },
    // created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'user_collection' }

})
const productModel = mongoose.model('product_collection', productSchema)
module.exports = productModel
