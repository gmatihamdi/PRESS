const express=require('express')
const Promotion = require("../models/promotionModel");
const router=express.Router();


router.get('/api/promotions',async(req,res)=>{
    const promotion= await Promotion.find();
    res.send(promotion)
})
router.post('/api/promotions',async(req,res)=>{
    const newPromotion= new Promotion(req.body);
    const saveP=await newPromotion.save();
    res.send(saveP)
})
router.delete('/api/promotions/:id',async(req,res)=>{
    const deletePromotion= await Promotion.findByIdAndDelete(req.params.id);
    res.send(deletePromotion)
})

module.exports=router