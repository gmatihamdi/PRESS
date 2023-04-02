const mongoose=require('mongoose')
const sectionSchema = require('../schema/sectionSchema')

const Section=mongoose.model('Section',sectionSchema)
module.exports=Section