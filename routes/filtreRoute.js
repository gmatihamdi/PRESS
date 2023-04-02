const express=require('express')
const Stagiaire = require("../models/stagiaireModel");
const Groupe = require("../models/groupeModel");
const Section = require("../models/sectionModel");
const router=express.Router();

router.post('/api/filtrestagiare',async (req, res) => {
    const codeSect = req.body.x;
    const etat = req.body.z;
    const groupe = req.body.y;
   
    const stagiaires= await Stagiaire.find({
            codeSection: codeSect,
            groupeStagiaire: groupe, etatdossier: etat 
        }).populate([
            {
                path: 'codePromotion',
                model: 'Promotion'
            },
            {
                path: 'codeSection',
                model: 'Section'
            }
  ])
            

            res.send(stagiaires)
     //       console.log(stagiaires)
})

router.post('/api/getgroup',async (req, res) => {

    let ids = req.body.x;
   // console.log(req.body.x)
     const groupe= await Groupe.find({codeSection: ids});
         res.send(groupe)
        // console.log(groupe)
})


router.post('/api/getsection', async(req, res) => {
let idp = req.body.x;
//console.log(req.body.x)
 const section= await Section.find({codePromotion: idp});
     res.send(section)

   //  console.log(section)

})
router.post('/api/filtrestagiarePrint',async (req, res) => {
    const codeSect = req.body.x.value;
    const etat = 'Accepter';
    const groupe = req.body.y.value;
   // console.log(codeSect);
  //  console.log(groupe);
   
    const stagiaires= await Stagiaire.find({
            codeSection: codeSect,
            groupeStagiaire: groupe, etatdossier: etat 
        }).populate([
            {
                path: 'codePromotion',
                model: 'Promotion'
            },
            {
                path: 'codeSection',
                model: 'Section'
            }
        ])
            
console.log(stagiaires)
            res.send(stagiaires)
})







module.exports=router