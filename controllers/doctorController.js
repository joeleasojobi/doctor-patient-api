var express = require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var {doctorModel} = require('../models/doctorModel')
var doctorRouter=express.Router()

doctorRouter.use(bodyParser.urlencoded({ extended: false }))
doctorRouter.use(bodyParser.json())

doctorRouter.get('/',(req,res)=>{
    return res.send("This is Doctors page")
})

doctorRouter.post('/addDoctors',(req,res)=>{   
    var doctorObject=new doctorModel(req.body);
    doctorObject.save(
        (error)=>{
            if(error){
                res.send(error)
            } else {
                res.json({"status":"success"})

            }
        }
    )
    res.json( doctorObject )
})

doctorRouter.get('/viewDoctors',async (req,res)=>{
    try{
        var result=await doctorModel.find()
        res.json(result)
    }catch(error){
        res.send(error)
    }
})
doctorRouter.post('/searchDoctor',async(req,res)=>{
    try{
        var result=await doctorModel.find(req.body)
        res.json(result)
    }catch(error){
        res.json({"status":"error"})
    }
})
doctorRouter.post('/editDoctor',async(req,res)=>{
    try{
        var result=await doctorModel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }catch(error){
        res.json({"status":"error"})
    }
})

doctorRouter.post('/deleteDoctor',async(req,res)=>{
    try{
        var result=await doctorModel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }catch(error){
        res.json({"status":"error"})
    }
})


module.exports={doctorRouter}