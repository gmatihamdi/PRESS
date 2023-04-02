import React,{useState,useEffect} from 'react'
import "./login.css"
import { useNavigate} from "react-router-dom"
import logo from "../images/steg.jpg";
import axios from 'axios';
function Login() {
  const navigate = useNavigate();
const [login,setLogin]=useState('');
const [pwd,setPwd]=useState('');
const [msg,setMsg]=useState('');





  const redirection=()=>{

    navigate("/user"); 
  }

  function loginchange(e){
    const val = e.target.value;
    setLogin(val ) }
    function pwdchange(e){
      const val = e.target.value;
      setPwd(val ) }


      function onSubmit(e) {
        e.preventDefault();
             const user = {
               login:login,
               password:pwd,
             };
             
console.log(user);

          
             axios.post(`/api/login`,user)

             .then(res => {
               
               if (res.status === 200) {
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('roleuser', res.data.data);
                localStorage.setItem('name', res.data.dataname);
                localStorage.setItem('iduser', res.data.iduser);


                navigate("/home/read"); 
                         
               } else {
                 
                   setMsg('Erreur de connexion')

               }
           })
           .catch(error => {
               // return;
               setMsg('Erreur de connexion')
               })
             
        
   }





  return (
    <div className='pagelogin'>
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
          <img src={logo} width='150px' height='100px'/>
          
            <p style={{color:'red'}}>{msg && msg}</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="login-form" >
          <input type="text" placeholder="username" onChange={loginchange} required/>
          <input type="password" placeholder="password" onChange={pwdchange}  required/>
         <button  type="submit">Se connecter</button>
        
        </form>
      </div>
    



      </div>
    </div>
  )
}

export default Login