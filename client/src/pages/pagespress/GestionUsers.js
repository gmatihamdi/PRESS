import React,{useState,useEffect} from 'react'
import { Link , useNavigate} from "react-router-dom";
import {BsPlusSquareFill,BsTrash3,BsPencilFill  } from 'react-icons/bs';
import Modal from 'react-modal';
import axios from 'axios';
import './modal.css'
function GestionUsers() {

  const navigate = useNavigate();
  const [listeUsers,setListeUsers]=useState('');
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
  const openclosmodalSup=()=>{
    setModalSup(!modalSup)
  }



  useEffect(()=>{

    
/****/ 
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

/****/ 





      axios.get('/api/users').then(res=>{setListeUsers(res.data)})  
     },[])

     const AjoutUser=async(event)=>{
      event.preventDefault();
       
      await axios.post('/api/users',newUser).then(res => 
        setMsgDialog('insertion avec success')
        ).catch(err => {setMsgDialog("Erreur d'insertion ")}) 
    
    }
   //<iframe src="https://www.pressreader.com/tunisia/assabah/20230329" width={1000} height={500} ></iframe>
//const openUrl= frame.src="https://www.pressreader.com/tunisia/assabah/20230329"
//window.open("https://www.pressreader.com/tunisia/assabah/20230329", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"); 

  return (
    <>




    <Link className="button" onClick={openclosmodalajout} ><BsPlusSquareFill/> Ajouter</Link>
    <br></br>
    <br></br>
        <table  responsive>
        <thead  >
          <tr>
          <th scope="col">N°</th>
        <th scope="col"> User</th>
        <th scope="col">Role</th>
        <th scope="col">Fonction</th>
       
        <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        
        {listeUsers && listeUsers.length ? listeUsers.map((user,index)=>(
        <tr key={user._id}>
          <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
            <td>{user.role}</td>
            <td>{user.fonction}</td>
           
          <td>
          <Link className='btn btn-danger' onClick={openclosmodalSup}> <BsTrash3/> </Link>   <b></b>
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
        <img src="" className="modal__product" />
      </div>
      <div className="modal__content">
        <h2>Ajouter Utilisateur</h2>
<br></br>
        <form onSubmit={AjoutUser}>
          <ul className="form-list">
            <li className="form-list__row">
              <label>Login</label>
              <input type="text" name="login" onChange={handleChange} required />
            </li>
            <li className="form-list__row">
              <label>Name</label>
              <input type="text" name="name" onChange={handleChange} required />
            </li>
            <li className="form-list__row">
              <label>Password</label>
              <input type="password" name="password" onChange={handleChange} required/>
            </li>
            <li className="form-list__row">
              <label>Rôle</label>
              <select  name="role" onChange={handleChange} required >
   <option >Rôle</option>
       <option >Admin</option>
       <option >Lecteur</option>      
   </select>
            </li>
          
            <li className="form-list__row">
              <label>Fonction</label>
              <select  name="fonction" onChange={handleChange} required >
   <option >Fonction</option>
       <option >Chef de bureau</option>
       <option >Sous directeur </option>
       <option >Directeur</option>      
       <option >Directeur Central</option>
       <option >PDG</option>      


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
  <form className="modal-content" >
    <div className="containerM">
      <h1>Supprimer un compte</h1>
      <p>Etes-vous sûr de vouloir supprimer le compte?</p>

  
   <div className="clearfix">
        <button type="button" className="cancelbtn" onClick={openclosmodalSup}>Cancel</button>
        <button type="button" className="deletebtn">Supprimer </button>
      </div>
    </div>
  </form>


</Modal>


    </>
  )
}
export default GestionUsers