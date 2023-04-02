import React from 'react';
import { Link , useNavigate} from "react-router-dom";
import {BsPlusSquareFill,BsTrash3,BsPencilFill  } from 'react-icons/bs';
 function GestUser() {
  return (
    <div>

    <Link className="btn btn-danger" ><BsPlusSquareFill/> Ajouter</Link>
    <br></br>
    <br></br>
        <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%" responsive>
        <thead  style={{backgroundColor: '#24292e',color:'white'}}>
          <tr>
          <th scope="col">N°</th>
        <th scope="col"> User</th>
        <th scope="col">Role</th>
        <th scope="col">Fonction</th>
        <th scope="col">Catégories</th>
        <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        
            <tr >
              <th scope="row">1</th>
              <td>Hamdi</td>
                <td>admin</td>
                <td>Directeur</td>
                <td>ALL</td>
              <td>   
              <Link className='btn btn-danger'> <BsTrash3/> </Link>   <b></b>
              <Link className='btn btn-info'> <BsPencilFill/> </Link>
              </td>
            </tr>
     
    
    
    
        </tbody>
    
      </table>
    </div>
  )
}
export default GestUser