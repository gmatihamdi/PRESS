const mongoose=require('mongoose')
const stagiaireSchema = require('../schema/stagiaireSchema')

const Stagiaire=mongoose.model('Stagiaire',stagiaireSchema)
module.exports=Stagiaire