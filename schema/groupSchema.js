const mongoose=require('mongoose')

const groupSchema= mongoose.Schema({
    codeGroupe:  String ,
  //  codePromotion:  {type:String,
   //  ref:"Promotion"},
    libGroupe:  String,
    codeSection:  {type:String,
     ref:"Section"}, 

},{
    timestamps:true
},
{ typeKey: '$type' })
module.exports=groupSchema