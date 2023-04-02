import React from 'react'
import Stagiaire from '../components/Stagiaire/Stagiaire'
import { Routes,Route} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import "./stylepage.css"
import Promotion from '../components/Promotions/Promotion';
import SelectStags from '../components/Stagiaire/SelectStags';
import GestUser from '../componentsPress/GestUser';
function Homepage() {
  return (
    <>
<Navbar/>
<Sidebar/>
<div className="contentpage">
<Routes>
       
       <Route path='/home/stagiaires' element={<Stagiaire/>} exact />
       <Route path='/home/promotions' element={<Promotion/>} exact />
       <Route path='/home/selectStagiaires' element={<SelectStags/>} exact />
       <Route path='/home/gestusers' element={<GestUser/>} exact />



       
       
     </Routes>
</div>





    </>
  )
}

export default  Homepage