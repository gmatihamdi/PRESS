const express = require('express')
const AccesUser = require('../models/accesUserModel');
const router = express.Router()


router.get('/api/accesUser',async(req,res)=>{
  const acces= await AccesUser.find().populate([
        {
            path: 'idUser',
            model: 'User'
        }
    ]);
    res.send(acces)
})

router.delete('/api/accesUser/:id',async(req,res)=>{
    await AccesUser.findByIdAndDelete(req.params.id)
    res.json({'message':'deleted'})
})

router.post('/api/accesUser',async(req,res)=>{
   
    const existacces= await AccesUser.find({accesPress:req.body.accesPress, idUser:req.body.idUser})
 
    if(existacces.length>0){
        return res.status(400).send('That user already exisits!');  
    }
    else{
        accesUser=new AccesUser(req.body)
        const saveaccesUser=await accesUser.save();
        res.send(saveaccesUser)
    }
   
  
})

router.post('/api/accesUserid/:id',async(req,res)=>{
    const accesUser=await AccesUser.find({idUser:req.params.id});
    res.send(accesUser)
 
})


router.put('/api/accesUser/:id',async(req,res)=>{
    await AccesUser.findByIdAndUpdate(req.params.id,req.body)
    res.json({'message':'updated'})
})



/* GET Current user token */

module.exports=router