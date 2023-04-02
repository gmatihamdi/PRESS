import React,{useState,useEffect} from 'react'
import { Link , useNavigate} from "react-router-dom"
import axios from 'axios';
import {BsPlusSquareFill,BsTrash3,BsPencilFill  } from 'react-icons/bs';
 function Promotion() {
    const navigate = useNavigate();
    const [listePromotion,setListePromotion]=useState('');
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


  return (
<div>

<Link className="btn btn-danger" ><BsPlusSquareFill/> Créer une Promotion</Link>
<br></br>
<br></br>
    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%" responsive>
    <thead  style={{backgroundColor: '#ffca08'}}>
      <tr>
      <th scope="col">N°</th>
    <th scope="col">code Promotion</th>
    <th scope="col">Promotion</th>
    <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
    {listePromotion && listePromotion.length ? listePromotion.map((promotion,index)=>(
        <tr key={promotion._id}>
          <th scope="row">{index + 1}</th>
          <td>{promotion.codePromotion}</td>
            <td>{promotion.libPromotionFr}</td>

          <td>
          
          <Link className='btn btn-danger'> <BsTrash3/> </Link>   <b></b>
          <Link className='btn btn-info'> <BsPencilFill/> </Link>
          </td>



        </tr>
        )):"loading..."}



    </tbody>

  </table>
</div>

    
  )
}

export default Promotion