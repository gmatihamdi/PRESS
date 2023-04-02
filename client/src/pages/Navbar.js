import React,{useState,useEffect} from 'react'
import "./stylepage.css"
import { BsBoxArrowRight} from "react-icons/bs";
import { Link , useNavigate} from "react-router-dom"
function Navbar() {
  const [name,setName]=useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const nameuser = localStorage.getItem("name");
    setName(nameuser)
    
   },[])


   const offsession=()=>{
    localStorage.removeItem('token');
   // navigate('/'); 
  }

  return (
    <div> 
    <div  className="Navclass" >
  
  
    <div className='navtext'>Bienvenue  {name} <Link onClick={offsession} className="btn btnnav " to='/'><BsBoxArrowRight/></Link></div>

</div> 



    </div>
  )
}
export default Navbar
