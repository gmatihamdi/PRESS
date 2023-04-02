import React from 'react'
import "./sidebar.css"
import {NavLink} from "react-router-dom";
import { BsFillHouseFill,BsPeopleFill,BsFillBookmarkFill,BsMortarboardFill } from 'react-icons/bs';
export default function Sidebar() {
  return (
    <div>

<div className="sidebar">
<br></br>
<NavLink to="/home/selectStagiaires"><BsFillHouseFill/> Acceuil</NavLink>
  <NavLink to="/home/gestusers"><BsPeopleFill/> Gestion des comptes</NavLink>



</div>



    </div>
  )
}
