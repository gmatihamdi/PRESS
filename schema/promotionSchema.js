const mongoose=require('mongoose')

const promotionSchema= mongoose.Schema({
    codePromotion:  String ,
    libPromotionFr:  String,
    libPromotionAr:  String,
    debutPromotion:  String, 
    finPromotion:  String,
    capacitePromotion:  String,   

},{
    timestamps:true
})
module.exports=promotionSchema