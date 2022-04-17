var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var {patientRouter}=require('./controllers/patientController')
var {patientModel} = require('./models/patientModel')
var {doctorModel} = require('./models/doctorModel')
var {doctorRouter}=require('./controllers/doctorController')


mongoose.connect("mongodb+srv://joeleasojobi:C2S8f6KqF5HRZ3Fw@cluster0.oz8vl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
.then(()=>console.log('MongoDb Connected'))
.catch(err=>console.log(err))

var app=express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/patient',patientRouter)
app.use('/doctor',doctorRouter)

app.get('/',(req,res)=>{
    res.send("Patient-Doctor App")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server started running at http://localhost:3000");
})