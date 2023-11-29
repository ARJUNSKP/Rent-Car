const express=require('express')
require('dotenv').config()
require('./connection/db')
const route=require('./router/route')
const cors=require('cors')
const server=express()
server.use(cors())
server.use(express.json())
server.use(route)
server.use('/carImage',express.static('./uploads'))
const port = 4000 || process.env.port
server.listen(port,()=>{
    console.log(`--- server is running ${port} this port---`)
})