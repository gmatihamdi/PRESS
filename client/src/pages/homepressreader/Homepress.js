import React,{useState,useEffect} from 'react'
import './style.css';
import logosteg from "./images/logo-steg.jpg";
import {NavLink,Link , useNavigate,Routes,Route} from "react-router-dom";
import { BsFillHouseFill,BsPeopleFill,BsFillMapFill,BsBoxArrowRight } from 'react-icons/bs';
import Read from '../pagespress/Read';
import GestionUsers from '../pagespress/GestionUsers';
import Acces from '../pagespress/Acces';
 function Homepress() {

    const [name,setName]=useState('');
    const [roleuser,setRoleuser]=useState('')
    const navigate = useNavigate();
  
    useEffect(()=>{
      const token = localStorage.getItem("token");
      const nameuser = localStorage.getItem("name");
      setName(nameuser)
      
      const roleuse = localStorage.getItem("roleuser");
      setRoleuser(roleuse)
      

     },[])
  
     const adminstrateur = roleuser === "Admin"

     const offsession=()=>{
      localStorage.removeItem('token');
     // navigate('/'); 
    }


  return (
    <div>
   <div className="navbar">
        <div className="container">
<div className="logo">
    <h2 className="logo-text"><img src={logosteg} width="200px" height="50px"/></h2>
</div>

<label for="nav"></label>
    <ul className="ul-list">
        <li className="list-item">  <NavLink to="/home/read" ><BsFillHouseFill/> Acceuil</NavLink></li>
{adminstrateur ? <li className="list-item"> <NavLink to="/home/gestionUsers"><BsPeopleFill/> Comptes</NavLink></li> :'' }
        
        {adminstrateur ?   <li className="list-item"> <NavLink to="/home/acces"><BsFillMapFill/>Accès </NavLink></li>  :'' }

        <li className="list-item"><Link onClick={offsession} to='/'><BsBoxArrowRight/> Déconnecter</Link></li> 
        
    </ul>

</div>
    </div>
    <div className="home">
        <div className="container">
            <div className="home-information">
            <h3 className="home-title"> Bienvenue  {name}</h3>
<h4 className="home-info"> </h4>


      <button className="home-btn">Pressreader</button>
      
    </div>
    </div>
    </div>
    <div className="work">

    <Routes>
       
       <Route path='/home/read' element={<Read/>} exact />
       <Route path='/home/gestionUsers' element={<GestionUsers/>} exact />
       <Route path='/home/acces' element={<Acces/>} exact />


    
       
     </Routes>

       
    </div>


    </div>
  )
}
export default Homepress