import React from 'react'
import { useParams } from "react-router";
import{useState , useEffect} from "react"


function HubDetails() {

    const {id} = useParams ()
    const [hubs, setHubs ] = useState([])
    console.log(hubs + "here")
    useEffect(()=>{
     const getHubs = async () => {
     const response = await fetch(`/hubs/${id}`);
       setHubs(await response.json());
     }
     getHubs();

   })

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
    </>
  )
}

export default HubDetails
