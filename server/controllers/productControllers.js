const Product = require('../models/productModel')


const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)

    } catch (error) {
        res.status(400).json({ message: "Products failed to fetch", error })
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id })
        res.status(200).json(product)

    } catch (error) {
        res.status(404).json({ message: "Product not found", error })
    }
}

module.exports = {
    getProducts,
    getProductById
}