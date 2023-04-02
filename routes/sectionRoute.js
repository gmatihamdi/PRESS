const express=require('express')
const Section = require("../models/sectionModel");
const router=express.Router();


router.get('/api/section',async(req,res)=>{
    const section= await Section.find();
    res.send(section)
})
router.post('/api/section',async(req,res)=>{
    const newSection= new Section(req.body);
    const saveS=await newSection.save();
    res.send(saveS)
})
router.delete('/api/section/:id',async(req,res)=>{
    const deleteSection= await Section.findByIdAndDelete(req.params.id);
    res.send(deleteSection)
})

module.exports=router