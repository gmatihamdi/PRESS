import React,{useState,useEffect} from 'react'
import { Link , useNavigate} from "react-router-dom";
import {BsPlusSquareFill,BsTrash3,BsPencilFill  } from 'react-icons/bs';
import Modal from 'react-modal';
import axios from 'axios';
import './modal.css'
import { ToastContainer, toast } from 'react-toastify';
function Acces() {
    const navigate = useNavigate();
    const [listeUsers,setListeUsers]=useState('');
    const [listeAcces,setListeAcces]=useState('');
    const [idUser,setIdUser]=useState('');
    const [newUser,setNewUser]=useState('');
    const [modalajout,setModalajout]=useState(false);
    const [modalSup,setModalSup]=useState(false);
    const [msgDialog,setMsgDialog]=useState('')
  
  
    const handleChange=(e)=>{
      const value = e.target.value;
      setNewUser({
        ...newUser,
        [e.target.name] : value,
  
          }) }
  
    const openclosmodalajout=()=>{
      setModalajout(!modalajout)
      setMsgDialog('')
    }
    const openclosmodalSup=(id)=>{
      setModalSup(!modalSup)
      setIdUser(id)
      setMsgDialog('')
    }
  
  
  
    useEffect(()=>{
  
      const token = localStorage.getItem("token");
      const roleuse = localStorage.getItem("roleuser");
  const adminstrateur = roleuse === "Admin"
      console.log(adminstrateur)
      if (token){
  if(roleuse==='Admin'){
    console.log('ok')
  
  }
  else{
    navigate('/home/read');
  }
      
      }
      else{
        navigate('/');
      }
        axios.get('/api/users').then(res=>{setListeUsers(res.data)})  
        axios.get('/api/accesUser').then(res=>{setListeAcces(res.data)})  
       },[])
  
       const AjoutUser=async(event)=>{
        event.preventDefault();
         
        await axios.post('/api/accesUser',newUser).then(res => 
          setMsgDialog('insertion avec success')
        ).catch(err => {setMsgDialog("Erreur d'insertion ")}) 
      
      }

const supAcces=async()=>{

  await axios.delete(`/api/accesUser/${idUser}`).then(res => 
    setMsgDialog('supprimé avec succès')
  ).catch(err => {setMsgDialog("Impossible de Supprimer ")}) 

}



  return (
    <>




    <Link className="button" onClick={openclosmodalajout} ><BsPlusSquareFill/> Ajouter</Link>
    <br></br>
    <br></br>
        <table   responsive>
        <thead  >
          <tr>
          <th scope="col">N°</th>
        <th scope="col"> Lecteur</th>
        <th scope="col">Journaux</th>
        <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        
        {listeAcces && listeAcces.length ? listeAcces.map((user,index)=>(
        <tr key={user._id}>
          <th scope="row">{index + 1}</th>
          <td>{user.idUser?.name}</td>
            <td>{user.accesPress}</td>
          <td>
          <Link className='btn btn-danger' onClick={()=>openclosmodalSup(user._id)}> <BsTrash3/> </Link>   <b></b>
              <Link className='btn btn-info'> <BsPencilFill/> </Link>
           
          </td>
        </tr>
        )):"loading..."} 
        </tbody>
    
      </table>

      <Modal   isOpen={modalajout} className='modal' onRequestClose={openclosmodalajout}>

  <span onClick={openclosmodalajout} className="close" >&times;</span>
  <div className="modal__container">
      <div className="modal__featured">
        
        <div className="modal__circle"></div>
        <img src='' className="modal__product" />
      </div>
      <div className="modal__content">
        <h2>Accès à des journaux</h2>
<br></br>
        <form onSubmit={AjoutUser}>
          <ul className="form-list">
            <li className="form-list__row">
              <label>Journal</label>
              <select  name="accesPress" onChange={handleChange} required >
   <option >Journal</option>
       <option value='assabah' >assabah</option>
       <option value='la-presse-tunisia' >la-presse</option>
       <option value='al-mijhar' >al-mijhar</option>    
       <option value='assabah-hebdo' >assabah-hebdo</option>
       <option value='le-temps-tunisia' >le-temps-tunisia  </option> 

   </select>
            </li>
          
            <li className="form-list__row">
              <label>Lecteur</label>
              <select  name="idUser" onChange={handleChange} required >
   <option >User</option>
   {listeUsers &&
    listeUsers.map(function (user) {
return <option value={user._id}  >{user.name}</option>;
}) 
}

   </select>
            </li>
            
            <li>
              <button type="submit" className="button">Enregistrer</button>
            </li>
          </ul>
        </form>
        {msgDialog ? msgDialog :''}
      </div> 
    </div> 
    
    
  

</Modal>



<Modal   isOpen={modalSup} className='modal' onRequestClose={openclosmodalSup}>

  <span onClick={openclosmodalSup} className="close" >&times;</span>
  <ToastContainer/>
  <form className="modal-content" >
    <div className="containerM">
      <h1>Supprimer un compte</h1>
      <p>Etes-vous sûr de vouloir supprimer le compte?</p>

  
   <div className="clearfix">
        <button type="button" className="cancelbtn" onClick={openclosmodalSup}>Cancel</button>
        <button type="button" className="deletebtn" onClick={supAcces}>Supprimer </button>
      </div>
    </div>
    {msgDialog ? msgDialog :''}
  </form>
 

</Modal>


    </>
  )
}
export default  Acces