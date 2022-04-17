var express = require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var {patientModel} = require('../models/patientModel')
var patientRouter=express.Router()

patientRouter.use(bodyParser.urlencoded({ extended: false }))
patientRouter.use(bodyParser.json())

patientRouter.get('/',(req,res)=>{
    return res.send("This is Patient Page")
})

patientRouter.post('/addPatient',(req,res)=>{   
    var patientObject=new patientModel(req.body);
    patientObject.save(
        (error)=>{
            if(error){
                res.send(error)
            } else {
                res.json({"status":"success"})

            }
        }
    )
    res.json( patientObject )
})

patientRouter.get('/viewPatients',async (req,res)=>{
    try{
        var result=await patientModel.find()
        res.json(result)
    }catch(error){
        res.send(error)
    }
})
patientRouter.post('/searchPatient',async(req,res)=>{
    try{
        var result=await patientModel.find(req.body)
        res.json(result)
    }catch(error){
        res.json({"status":"error"})
    }
})
patientRouter.post('/editPatient',async(req,res)=>{
    try{
        var result=await patientModel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }catch(error){
        res.json({"status":"error"})
    }
})

patientRouter.post('/deletePatients',async(req,res)=>{
    try{
        var result=await patientModel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }catch(error){
        res.json({"status":"error"})
    }
})


module.exports={patientRouter}