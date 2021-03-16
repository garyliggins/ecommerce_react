import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/mongoose.config.js'


import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

//this is a get http request, if i go to localhost:5000 it will run the text
app.get("/", (req, res) => {
    res.send("API is running...")
})


app.use('/api/products', productRoutes)

//when you save the port in the .env file this is how you bring it back in the file
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
