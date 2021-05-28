const express = require('express')
const dotenv = require("dotenv")
const connectDB = require('./config/db')

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

connectDB()
const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

app.listen(process.env.PORT || 5000, console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`))