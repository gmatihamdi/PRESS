const mongoose=require('mongoose')

const productSchema= mongoose.Schema({
    title:String,
    desc:String,
    imgeUrl:String,
    sizes:[String],
    price:Number
})
module.exports=productSchema