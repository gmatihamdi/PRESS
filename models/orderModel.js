const mongoose=require('mongoose')
const orderSchema = require('../schema/orderSchem')
//rectifff
const Order=mongoose.model('order',orderSchema)
module.exports=Order