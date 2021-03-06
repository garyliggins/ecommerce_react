import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'


//this route will give you a json array of all products showing on localhost:5000
router.get("/", asyncHandler(async (req, res) => {
    const products =  await Product.find({})
    res.json(products)
}))

// this route will get each individual product
router.get("/:id", asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error("Product not found")
    }
 
}))

export default router