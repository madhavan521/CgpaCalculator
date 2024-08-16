
const express = require('express')
const route=express.Router()
const mark = require('./BookSchema')
//post data
route.post('/', async(req,res)=>{
  const {name,
    rollno,
    semester1,
    semester2,
    semester3,
    semester4,
    semester5,
    semester6,
    total} =  req.body
    try{
      const newMark = new mark({name,
      rollno,
      semester1,
      semester2,
      semester3,
      semester4,
      semester5,
      semester6,
      total})
      await newMark.save()
      console.log(newMark)
       res.status(201).send(newMark)
    }
    catch(err){
      res.status(500).send(err)
    }   
})

// get all data
route.get('/',async(req,res)=>{
  try{
      const getdata = await mark.find()
      res.status(200).send(getdata)

  }
  catch(err){
    console.log(err)
    res.status(500).send(err)
  }
})
//get element by id
route.get('/:id',async(req,res)=>{
  const {id}=req.params
  try{
    const getbydata= await mark.findById(id)
    if(!getbydata){
    res.status(404).send(" no data found")
    }  
    else{
            res.status(200).send(getbydata)

    }

  }
  catch(err){
    console.log(err)
    res.status(500).send(err)

  }
})
//delete element by id
route.delete('/:id',async(req,res)=>{
  const {id}=req.params;
  try{
    const getbydata= await mark.findByIdAndDelete(id)
    res.status(200).send(getbydata)
  }
  catch(err){
    console.log(err)
    res.status(500).send(err)

  }
})
module.exports =route