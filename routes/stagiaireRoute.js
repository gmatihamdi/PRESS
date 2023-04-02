const express=require('express')
const Stagiaire = require("../models/stagiaireModel");
const router=express.Router();
const mongoose=require('mongoose')

router.get('/api/stagiaires',async(req,res)=>{
    const stagiaire= await Stagiaire.find() .populate([
        {
            path: 'codePromotion',
            model: 'Promotion'
        }
    ]);
    res.send(stagiaire)
})
router.post('/api/stagiaires',async(req,res)=>{
    const newStagiaire= new Stagiaire(req.body);
    const saveS=await newStagiaire.save();
    res.send(saveS)
})
router.delete('/api/stagiaires/:id',async(req,res)=>{
    const deleteStagiaire= await Stagiaire.findByIdAndDelete(req.params.id);
    res.send(deleteStagiaire)
})

router.post('/api/printstag/:id',async(req, res) => {
console.log(req.params.id )
   const stagiaire= await Stagiaire.findById({_id:req.params.id}).populate([
    {
        path: 'codePromotion',
        model: 'Promotion'
    },
    {
        path: 'codeSection',
        model: 'Section'
    }
]);
  
res.send(stagiaire)

console.log(stagiaire ) 
})

module.exports=router