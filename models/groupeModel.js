const mongoose=require('mongoose')
const groupSchema = require('../schema/groupSchema')

const Groupe=mongoose.model('Groupe',groupSchema)
module.exports=Groupe