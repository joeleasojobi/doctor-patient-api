var mongoose = require('mongoose');

var patientSchema=new mongoose.Schema(
    {
        code: {
            type:Number,
            required:true
        },
        name: {
            type:String,
            required:true
        },
        address: {
            type:String,
            required:true
        },
        phoneNo: {
            type:Number,
            required:true
        },
        symptoms: {
            type:String,
            required:true
        },
        disease: {
            type:String,
            required:true
        },
        bloodGroup: {
            type:String,
            required:true
        },
        place: {
            type:String,
            required:true
        },
        pincode: {
            type:Number,
            required:true
        }
    }
)

var patientModel=mongoose.model('patients',patientSchema);

module.exports={patientModel}