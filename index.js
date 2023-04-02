const express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const router = require('./routes/router');
const orderRouter = require('./routes/orderRoute');
const stagiaireRoute = require('./routes/stagiaireRoute');
const promotionRoute = require('./routes/promotionRoute');
const sectionRoute = require('./routes/sectionRoute');
const filtreRoute = require('./routes/filtreRoute');
const groupeRoute = require('./routes/groupRoute');
const userRoute = require('./routes/userRoute');
const accesUserRoute = require('./routes/accesUser');

require ('dotenv').config();
//my app hamdi gmati dec 2022
const app=express();
app.use(bodyParser.json());
app.use('/',router);
app.use('/',orderRouter);
app.use('/',stagiaireRoute);
app.use('/',promotionRoute);
app.use('/',sectionRoute);
app.use('/',filtreRoute);
app.use('/',groupeRoute);
app.use('/',userRoute);
app.use('/',accesUserRoute);



//const connectionString= "mongodb+srv://hamdi:123@cluster0.dffmgbq.mongodb.net/CSF?retryWrites=true&w=majority";
//const connectionString='mongodb://localhost:27017/CSF';
//const connectionString='mongodb://localhost:27017/PRESS';

//const connectionString= 'mongodb+srv://hamdi:123@press.abhoy2s.mongodb.net/PRESS?retryWrites=true&w=majority'

//const connectionString= 'mongodb+srv://hamdi:123@react.kjlkfg2.mongodb.net/shopping?retryWrites=true&w=majority';
//const connectionString='mongodb://localhost:27017/shopping';
mongoose.connect( process.env.MONGO_URI || 
     connectionString
   // ,{useNewUrlParser:true,userUnifiedTopology:true}
    ).then(res=>console.log("connection done"))

if(process.env.NODE_ENV==='production'){
    app.use('/',express.static('public'));
    app.get("/",(req,res)=>res.sendFile(__dirname + "/public/index.html"))
}else { app.get('/',(req,res)=>res.send("api running"))}
    
const PORT=process.env.PORT
app.listen(PORT || 5001,()=>{
    console.log("Running on port 5001")
})