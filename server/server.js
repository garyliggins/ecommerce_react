import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()

const app = express()

//this is a get http request, if i go to localhost:5000 it will run the text
app.get("/", (req, res) => {
    res.send("API is running...")
})

//this route will give you a json array of all products showing on localhost:5000
app.get("/api/products", (req, res) => {
    res.json(products)
})

// this route will get each individual product
app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

//when you save the port in the .env file this is how you bring it back in the file
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))