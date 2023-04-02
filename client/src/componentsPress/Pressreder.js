import React,{useState,useEffect} from 'react'
import axios from 'axios';

 function Pressreder() {

const [journaux,setJournaux]=useState('');
    useEffect(()=>{
 

        
      },[])

/*
 {journaux && journaux.length ? journaux.articles.map((jr)=>(
    <p>{jr.title} </p>
    )):"loading..."}

*/

const affich=async()=>{

  await  axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-02-24&sortBy=publishedAt&apiKey=9b5615dd3a5b421ba29ccb096001e285`).then(res=>{setJournaux(res.data.articles)})  ;
    console.log(journaux)
}

  return (
    <div>
    <p>Hello app</p>
 <h1><button onClick={affich} className="btn btn-success" >click here</button></h1>


    
    <table>
    <thead  style={{backgroundColor: '#ffca08'}}>
    <tr>
                      <th scope="col">title</th>
                      <th scope="col">description</th>
                      <th scope="col"> urlToImage</th>
                      <th scope="col">url</th>
                    </tr>
                  </thead>
                  <tbody>
                  {journaux && journaux.length ? journaux.map((jr)=>(
                    <tr>
                  <td>{jr.title} </td>
                  <td>{jr.description} </td>
                  <td><img src={jr.urlToImage} width="60px" height="60px" /> </td>
                  <td><a href={jr.url}>lien vers</a> </td>

                  </tr>

                  )):"loading..."}
                  </tbody>
   

</table>

 

</div>
  )
}
export default Pressreder