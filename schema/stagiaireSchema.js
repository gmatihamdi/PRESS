const mongoose=require('mongoose')

const stagiaireSchema= mongoose.Schema({
    cinStagiaire:String,
    nomStagiaireFr: String,
    nomStagiaireAr: String,
    sexe: String,
    Lieunaissance: String,
    etatdossier: String,
    datenaissanceStag:String,
    adressStagiaire: String,
    telStagiaire: String,
    niveauScolaire: String,
    emailstagiaire: String,
    specialiteStagiaire: String,
    groupeStagiaire: String,
    codePromotion:  {type:String,
        ref:"Promotion"},
    codeSection:  {type:String,
        ref:"Section"}, 

},{
    timestamps:true
},
{ typeKey: '$type' })
module.exports=stagiaireSchema