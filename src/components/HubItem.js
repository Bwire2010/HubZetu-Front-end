import {NavLink} from "react-router-dom"

function HubItem({ hub }) {
  const { name, image,location,founder } = hub;





  return (

    <NavLink to={`/hubs/${hub.id} `}>

<div class='container-poster'>
  <div class='poster'>
    <div class='poster-img'>
      <img src={image} alt={name} />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p>Location: {location}</p>
        <p> Founder: {founder}</p>
        </div>
        
    
      </div>
    </div>
    </NavLink>
  );
}

export default HubItem;