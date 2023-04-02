import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Link , useNavigate} from "react-router-dom"
import { BsZoomIn,BsFillPrinterFill } from "react-icons/bs";
import { Dropdown } from 'react-bootstrap';
import logo from './entete.jpeg';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {BsPlusSquareFill } from 'react-icons/bs';
import "../../css/modal/modal.css"
 function SelectStags() {
    const [stagiaire,setStagiaire]=useState('');
    const [stagiairefiltr,setStagiairefiltr]=useState('');
    const [listePromotion,setListePromotion]=useState('');
    const [listeSection,setListeSection]=useState('');
    const [listeGroupe,setListeGroupe]=useState('');
    const [etatdossier,setEtatdossier]=useState('');
    const [modalaccept,setModalaccept]=useState(false);
    const [modalrefu,setModalrefu]=useState(false);
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

    function onChangeEtatdossier(e){
        const val = e.target.value;
        setEtatdossier(val)
    }
  
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
  
    const openclosmodalaccept=()=>{
        setModalaccept(!modalaccept)
      }
  
      const openclosmodalrefu=()=>{
        setModalrefu(!modalrefu)
      }
 
  
  
  
  
  
  
  const pdfGenerate = () => {
    var Values = stagiaire.map((element, index) => Object.values([index + 1, element.cinStagiaire, element.nomStagiaireFr]));
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(9);
    pdf.addImage(logo, 'JPEG', 35, 10, 520, 60);
    pdf.setFontSize(22);
    pdf.text(210, 80, 'Liste de stagiaires')
    pdf.text(230, 110, etatdossier)
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
      z:etatdossier
    }
    await axios.post(`/api/filtrestagiare`, a).then(res=>{setStagiaire(res.data)})
    setIdSection('')
  }
  
    return (
      <div  > 
      <Link className="btn btn-danger" ><BsPlusSquareFill/> Ajouter un Stagiaire</Link> 
      <br></br> <br></br>
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
  <div class="col-auto">
            <select class="form-control" name="niveauMatiere"  onChange={onChangeEtatdossier}>
              <option >Etat</option>

              <option >Accepter</option>
              <option >Refuser</option>
              <option >En attente</option>
           


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
                                <Dropdown.Item > <Link onClick={openclosmodalaccept} > Accepter </Link></Dropdown.Item>
                                <Dropdown.Item > <Link onClick={openclosmodalrefu} > Refuser </Link></Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
  
                          </td>
  
  
  
                        </tr>
                        )):"loading..."}
  
  
  
                    </tbody>
  
                  </table>
  
  

                  <Modal className='affichModel' isOpen={modalaccept}  onRequestClose={openclosmodalaccept}>
<span className='close-icon' onClick={openclosmodalaccept}>&times;</span>
<p >Etes vous sur d'accepter cet candidature?</p>
<div>
              <select class="form-control" name="grouprselect" 
              >
              <option >Selectionner un groupe</option>

            </select>
            <br></br>
              </div>
<div>  <Link className='btn btn-success btnmodal' >Accepter</Link>  </div>

</Modal>

<Modal className='affichModel' isOpen={modalrefu}  onRequestClose={openclosmodalrefu}>
<span className='close-icon' onClick={openclosmodalrefu}>&times;</span>
<p >Etes vous sur de Refuser cet candidature?</p>

<div>  <Link className='btn btn-danger btnmodal' >Oui Refuser</Link>  </div>

</Modal>
  
  
  
          
  
  
      
      
      
      </div>
  )
}
export default SelectStags