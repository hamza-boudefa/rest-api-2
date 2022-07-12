const express=require('express')
const connectDB = require('./config/connectDB')
const user = require('./modules/userSchema')
// creat express app
require('dotenv').config()
const app=express()
app.use(express.json())

// port
connectDB()
const PORT=process.env.PORT || 4000

app.use('/userAPI',require('./Routes/userRoutes'))



// listing

app.listen(PORT,(err)=>err?console.log(err):console.log(`yasma3 on ${PORT}`))