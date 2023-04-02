const express=require('express')
const Product = require("../models/productModel");
const router=express.Router();


router.get('/api/products',async(req,res)=>{
    const products=await Product.find();
    res.send(products)
})
router.post('/api/products',async(req,res)=>{
    const newProducts= new Product(req.body);
    const saveP=await newProducts.save();
    res.send(saveP)
})
router.delete('/api/products/:id',async(req,res)=>{
    const deleteProduct= await Product.findByIdAndDelete(req.params.id);
    res.send(deleteProduct)
})

module.exports=router