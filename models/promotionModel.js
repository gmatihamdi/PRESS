const mongoose=require('mongoose')
const promotionSchema = require('../schema/promotionSchema')

const Promotion=mongoose.model('Promotion',promotionSchema)
module.exports=Promotion