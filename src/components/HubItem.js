import {NavLink} from "react-router-dom";



function HubItem({ hub }) {
  const { name, image,location,founder } = hub;


  return (


    <NavLink to={`/hubs/${hub.id} `}>


<div class="hub-item card">
      <img src={image} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>Location: {location}</p>
        <p> Founder: {founder}</p>
        </div>
    
    </div>

    </NavLink>
    
  );
}

export default HubItem;