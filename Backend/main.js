const http=require("http")
const express = require('express')
const route=require('./Route')
const app=express()
const cors=require('cors')
const server=http.createServer(app)
app.use(express.json());  
app.use(cors())
app.use(route);


server.listen(8000,()=>{
  console.log("Server Connected Sucessfully")
})
