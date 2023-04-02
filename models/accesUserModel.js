const mongoose=require('mongoose')
const accesUserSchema = require('../schema/accesUserSchema')

const AccesUser=mongoose.model('AccesUser',accesUserSchema)
module.exports=AccesUser