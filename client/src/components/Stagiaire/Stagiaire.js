import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import { Link , useNavigate} from "react-router-dom"
import { fetchStagiaires } from '../../store/actions/stagiaires';
import { BsZoomIn,BsFillPrinterFill } from "react-icons/bs";
import { Dropdown } from 'react-bootstrap';
import logo from './entete.jpeg';
import fontarab from './Amiri-Regular.ttf' ;
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { base64Str } from 'base-64';
 function Stagiaire(props) {

  const [stagiaire,setStagiaire]=useState('');
  const [stagiairefiltr,setStagiairefiltr]=useState('');
  const [listePromotion,setListePromotion]=useState('');
  const [listeSection,setListeSection]=useState('');
  const [listeGroupe,setListeGroupe]=useState('');

  const [idPromotion,setIdPromotion]=useState('');
  const [idSection,setIdSection]=useState('');
  const [idGroup,setIdGroup]=useState('');

  function handleChangePromotion(e){
    const val = e.target.value;
    setIdPromotion(val ) }

    function handleChangeSection(e){
      const val = e.target.value;
      setIdSection(val)
    console.log('section handlchange')
    console.log(val)
  }

  const navigate = useNavigate();

  function handleChangeGroup(e){
        const value = e.target.value;
        setIdGroup(value ) } 

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token){
    console.log('ok')
    }
    else{
      navigate('/');
    }

   axios.get('/api/promotions').then(res=>{setListePromotion(res.data)})
    
  },[])

   const pdfAttestation =(datastg)=>{ 
    const pdf = new jsPDF('p', 'pt', 'a4');
      pdf.setFontSize(9);
      pdf.addImage(logo, 'JPEG', 35, 10, 520, 50);
      pdf.setFontSize(22);
      pdf.addFileToVFS(fontarab, base64Str);
      pdf.addFont(fontarab, 'Amiri', 'normal');
     pdf.setFont('Amiri'); 
      pdf.text(300, 100, 'شهادة حضور ',{align: 'center' })
      pdf.setFontSize(16);
      //pdf.line(150, 110, 300, 110);
      pdf.text(550, 200,'يشهد مدير المركز القطاعي للتكوين في فنون الطباعة بأريانة أنّ  ؛', {align: 'right' })
      pdf.text(550, 250, ' المتكون ة ', {align: 'right' })
     pdf.text(250, 250,datastg.nomStagiaireAr)
      pdf.text(550, 300, 'صاحب بطاقة تعريف وطنية رقم ', {align: 'right' })
      pdf.text(250, 300,datastg.cinStagiaire)
      pdf.text(550, 350, 'المولود بتاريخ ', {align: 'right' })
      pdf.text(250, 350,datastg.datenaissanceStag)
      pdf.text(550, 400, 'مرسم بالمركز ', {align: 'right' })
       pdf.text(250, 400,datastg.codePromotion.libPromotionAr)
      pdf.text(550, 450, 'سلمت هذه الشهادة للمعني للإستظهار بها لدى من يهمه الأمر ', {align: 'right' })
      pdf.text(80, 500, 'مدير المركز ')
      pdf.setFontSize(9)
     window.open(pdf.output('bloburl'))
    }

    async function printattpresence (id){
      console.log(id)
      
     await  axios.post(`/api/printstag/${id}`).then(res=>{
      console.log(res.data)
      pdfAttestation(res.data)
      })
    //  pdfAttestation()
    
    }

    async function printattinscri (id){
      console.log(id)
      setStagiairefiltr('')
     await  axios.post(`/api/printstag/${id}`).then(res=>{
      pdfAttinscri(res.data)
      })
    }


   const pdfAttinscri = (datastag) => {
      var pdf = new jsPDF('p', 'pt', 'a4');
      pdf.setFontSize(9);
      pdf.addImage(logo, 'JPEG', 35, 10, 480, 60);
      pdf.setFontSize(22);
      pdf.addFileToVFS(fontarab, base64Str);
      pdf.addFont(fontarab, 'Amiri', 'normal');
     pdf.setFont('Amiri'); 
      pdf.text(210, 100, 'شهادة ترسيم ')
      pdf.setFontSize(16);
      //pdf.line(150, 110, 300, 110);
      pdf.text(220, 200,'يشهد مدير المركز القطاعي للتكوين في فنون الطباعة بأريانة أنّ ؛')
      pdf.text(480, 250, ' المتكون (ة) ')
      pdf.text(400, 250,datastag.nomStagiaireAr)
      pdf.text(410, 300, 'صاحب بطاقة تعريف وطنية رقم ')
      pdf.text(310, 300,datastag.cinStagiaire)
      pdf.text(470, 350, 'المولود بتاريخ ')
      pdf.text(250, 350,datastag.datenaissanceStag)
      pdf.text(470, 400, 'مرسم بالمركز ')
      pdf.text(250, 400,datastag.codePromotion.libPromotionAr)
      pdf.text(220, 450, 'سلمت هذه الشهادة للمعني للإستظهار بها لدى من يهمه الأمر ')
      pdf.text(80, 500, 'مدير المركز ')
      pdf.setFontSize(9)
     window.open(pdf.output('bloburl'))
    }



const pdfGenerate = () => {
  var Values = stagiaire.map((element, index) => Object.values([index + 1, element.cinStagiaire, element.nomStagiaireFr]));
  var pdf = new jsPDF('p', 'pt', 'a4');
  pdf.setFontSize(9);
  pdf.addImage(logo, 'JPEG', 35, 10, 520, 60);
  pdf.setFontSize(22);
  pdf.text(210, 80, 'Feuille de présence')
  pdf.setFontSize(10);
  pdf.setFontSize(9)
  pdf.text(35, 800, "(*) ")
  pdf.autoTable({ html: '#my-table', startY: 150, showHead: 'everyPage' })
  pdf.autoTable({
    head: [['N°', 'CIN', 'Nom&Prénom', 'Observation']],
    body: Values
  })
 window.open(pdf.output('bloburl'))
}

const findsectionClick=async()=>{
  const a = {x:idPromotion}
  await axios.post(`/api/getsection`, a).then(res=>{setListeSection(res.data)})
 console.log(listeSection)
}

const findgroupClick=async()=>{
  console.log('idSection')
  const b = {x:idSection}
console.log(idSection)
  await axios.post(`/api/getgroup`, b).then(res=>{setListeGroupe(res.data)})
 console.log(listeGroupe)
}

const getListStagiaire=async()=> {
  const a = {
    x: idSection,
    y: idGroup,
    z:"Accepter"
  }
  await axios.post(`/api/filtrestagiare`, a).then(res=>{setStagiaire(res.data)})
  setIdSection('')
}

  return (
    <div  > 
    <form className="row g-4">
<div class="col-auto">
<select class="form-control" name="idPromo"  onChange={handleChangePromotion}  onClick={findsectionClick}>
<option >Selectionner une Promotion</option>

{listePromotion &&
listePromotion.map(function (promotion) {
return <option value={promotion._id}  >{promotion.libPromotionFr}</option>;
}) 
}
</select>
</div>
<div class="col-auto">

<select class="form-control" name="idsection" 
onChange={handleChangeSection} 
onClick={findgroupClick}
 >

<option >Selectionner une Section </option>

{listeSection &&
  listeSection.map(function (section) {
return <option value={section._id}  >{section.codeSection}</option>;
}) 
}
</select>
</div>
<div class="col-auto">

<select class="form-control" name="idgroup" 
onChange={handleChangeGroup} 

 >

<option >Selectionner un groupe </option>

{listeGroupe &&
  listeGroupe.map(function (groupe) {
return <option value={groupe._id}  >{groupe.codeGroupe}</option>;
}) 
}
</select>
</div>


 <div className="col-auto">
          <Link className='btn btn-danger' onClick={getListStagiaire}> <BsZoomIn /> </Link>
          </div>
          <div className="col-auto">

{stagiaire? <Link className="btn btn-success" onClick={pdfGenerate}><BsFillPrinterFill/></Link> : ''}

          
</div> 
</form>
         
        <br></br>


    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%" responsive>
                  <thead  style={{backgroundColor: '#ffca08'}}>
                    <tr>
                      <th scope="col">N°</th>
                      <th scope="col">CIN</th>
                      <th scope="col">Nom&Prénom</th>
                      <th scope="col"> الاسم و اللقب </th>

                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {stagiaire && stagiaire.length ? stagiaire.map((stagiare,index)=>(
                      <tr key={stagiare._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{stagiare.cinStagiaire}</td>
                        <td>{stagiare.nomStagiaireFr}</td>
                        <td>{stagiare.nomStagiaireAr}</td>

                        <td>
                        
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              Action
                            </Dropdown.Toggle>

                            <Dropdown.Menu>                           
                              <Dropdown.Item ><Link to={"#" }>Modifier</Link></Dropdown.Item>
                              
                              <Dropdown.Item href="#/action-3"><Link to={"#" }>Relevé de notes</Link></Dropdown.Item>
                              <Dropdown.Item ><Link  onClick={(e)=>printattpresence(stagiare._id)} >Attestation de présence</Link></Dropdown.Item>
                              <Dropdown.Item ><Link onClick={(e)=>printattinscri(stagiare._id) }>Attestation d'inscription</Link></Dropdown.Item>
                          
                            </Dropdown.Menu>
                          </Dropdown>

                        </td>



                      </tr>
                      )):"loading..."}



                  </tbody>

                </table>






        


    
    
    
    </div>
  )
}
export default connect((state)=>{
  return{
    stagiaires:state.stagiaires
  }
},{fetchStagiaires})(Stagiaire)