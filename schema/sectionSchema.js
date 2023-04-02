const mongoose=require('mongoose')

const sectionSchema= mongoose.Schema({
    codeSection:  String ,
    codePromotion:  {type:String,
     ref:"Promotion"},
    libSection:  String,
    codeSpecialite:  {type:String,
     ref:"Specialite"}, 
    debutSection:  Date, 
    finSection:  Date,
    codeDiplome:  String,
    groupeSection:  String,   

},{
    timestamps:true
},
{ typeKey: '$type' })
module.exports=sectionSchema