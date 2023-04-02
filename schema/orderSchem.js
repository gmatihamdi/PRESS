const mongoose=require('mongoose')

const orderSchema= mongoose.Schema({
    name:String,
    email:String

},{
    timestamps:true
})
module.exports=orderSchema

//rect