const mongoose=require('mongoose')

const userSchema= mongoose.Schema({
    
    login:String,
    name:String,
    password:String,
    role:String,
    fonction:String,
    etatCompte:String
},{
    timestamps:true
},
{ typeKey: '$type' })
module.exports=userSchema