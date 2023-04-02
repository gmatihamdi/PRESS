const express = require('express')
const User = require('../models/userModel')
const router = express.Router()

const jwt = require("jsonwebtoken");


router.get('/api/users',(req,res)=>{
    User.find({},(err,data)=>{
        res.json(data)
      
    })
})



router.delete('/api/users/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({'message':'deleted'})
})

router.post('/api/users',async(req,res)=>{
    console.log(req.body.role)
    const existUser = await User.find({login:req.body.name ,password:req.body.password})
    if(existUser.length>0){
        return res.status(400).send('That user already exisits!');  
    }
    else{
    user=new User(req.body)
    const saveuser=await user.save();
    res.send(saveuser)
    }
})
router.put('/api/users/:id',async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,req.body)
    res.json({'message':'updated'})
})


router.post('/api/login',async(req,res)=>{
    let roleuser='';
console.log(req.body)
    const datauser = await User.find({ login: req.body.login ,password:req.body.password });   
    
    console.log(datauser.role)

    if(datauser.length != 0){       
      const token = jwt.sign({         
            login: datauser.login ,
            password:datauser.password,         
            },
            'secret', {
                expiresIn: "18h"
            }
        );

for(i=0;i<datauser.length;i++){

 roleuser=datauser[i].role;
 name=datauser[i].name;
 iduser=datauser[i]._id;



}
console.log('roleuser')
console.log(roleuser)
console.log(name)

         res.status(200).json({
            message: "successful",
            token: token ,
            data:roleuser,
            dataname:name,
            iduser:iduser
            
          });
          console.log(token)

    }
    else {
        res.status(401).json({
            success: false,
            message: "Invalid Username/Password",
            result: {}
        })
    }

  

})


/* GET Current user token */

module.exports=router