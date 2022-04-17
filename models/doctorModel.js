var mongoose = require('mongoose');

var doctorSchema=new mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        qualification: {
            type:String,
            required:true
        },
        department: {
            type:String,
            required:true
        },
        contactNumber: {
            type:Number,
            required:true
        }
    }
)

var doctorModel=mongoose.model('doctors',doctorSchema);

module.exports={doctorModel}