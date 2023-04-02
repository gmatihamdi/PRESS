const mongoose=require('mongoose')

const accesUserSchema= mongoose.Schema({
    
    accesPress:String,
    imgPress:String,
    idUser:  {type:String,
        ref:"User"},
   
},{
    timestamps:true
},
{ typeKey: '$type' })
module.exports=accesUserSchema