import React,{useState,useEffect} from 'react';
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios';
import Modal from 'react-modal';
import Bounce from 'react-reveal/Bounce'
 function Read() {
    const navigate = useNavigate();
    const [listjournaux,setListjournaux]=useState('')
    const [iduser,setIduser]=useState('')
    const [idjor,setIdjor]=useState('')

    const [modelshow,setModelshow]=useState(false)

const openModel=(id)=>{
    setIdjor(id)
    setModelshow(!modelshow)
    console.log(idjor)
}

    useEffect(()=>{
  
        const token = localStorage.getItem("token");
        if (token){
        console.log('ok')
        }
        else{
          navigate('/');
        }
        const iduser = localStorage.getItem("iduser");
        setIduser(iduser)



        axios.post(`/api/accesUserid/${iduser}`).then(res=>{setListjournaux(res.data)})  

        console.log(listjournaux)
         
       },[])

const url=`https://www.pressreader.com/tunisia/${idjor}/20230401`

//style={{pointerEvents:'none'}}

  return (
    <>
 <div className="container">


 {listjournaux && listjournaux.length ? listjournaux.map((listJor,index)=>(
  <Bounce left cascade>
    <div className="part normal">
                <h4 className="part-title">{listJor.accesPress}</h4>
                <hr className="line"/>
                <p className="part-desc">
                <button onClick={()=>openModel(listJor.accesPress)}>Aperçu</button>
                </p>
            </div>
</Bounce>
            )):"loading..."} 





            <Modal   isOpen={modelshow} className='modal' onRequestClose={openModel}>

<span onClick={openModel} className="close" >&times;</span>

  
<iframe src={url} width={1300} height={600} ></iframe>

</Modal>





            
            
        </div>


    </>
  )
}
export default Read