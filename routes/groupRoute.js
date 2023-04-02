const express=require('express')
const Groupe = require("../models/groupeModel");
const router=express.Router();


router.get('/api/groupe',async(req,res)=>{
    const groupe= await Groupe.find({})
    .populate([         
{
      path: 'codePromotion',
      model: 'Promotion'
  },
  {
    path: 'codeSection',
    model: 'Section'
  }

]);
    res.send(groupe)
})
router.post('/api/groupe',async(req,res)=>{
    const newGroupe= new Groupe(req.body);
    const saveG=await newGroupe.save();
    res.send(saveG)
})
router.delete('/api/groupe/:id',async(req,res)=>{
    const deleteGroupe= await Groupe.findByIdAndDelete(req.params.id);
    res.send(deleteGroupe)
})

module.exports=router