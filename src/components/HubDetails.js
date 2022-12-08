import React from 'react'
import { useParams } from "react-router";
import{useState , useEffect} from "react"
import Reviews from './Reviews';




function HubDetails(hub, onDeleteHub) {
    

    const {id} = useParams ()
    const [hubs, setHubs ] = useState([])
    
    useEffect(()=>{
     const getHubs = async () => {
     const response = await fetch(`/hubs/${id}`);
       setHubs(await response.json());
     }
     getHubs();

   })

    function handleDeleteHub() {
    fetch(`/logout/${id}`, {
      method: "DELETE",
     }).then((r) => {
      if (r.ok) {
        onDeleteHub(hub);
      }
       });
      }

  return (
    <>
   <img src={hubs.image} alt={hubs.name} />
    <h2>{hubs.name}</h2>
    <p>{hubs.location}</p>
    <p>{hubs.description}</p>
    <p> Founder:{hubs.founder}</p>
    
     <p>
      Link: <em>{hubs.website_url}</em>
    </p> 
  
    <button>Add Review</button>
    <button onClick={handleDeleteHub}> Delete Hub </button>
     <Reviews/>
    </>
  )
}

export default HubDetails
