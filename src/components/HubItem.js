import {NavLink} from "react-router-dom"

function HubItem({ hub, onDeleteHub }) {
  const { id, name, image,location,founder } = hub;



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

    <NavLink to={`/hubs/${hub.id} `}>

    <div className="spice-item card">
      <img src={image} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>Location: {location}</p>
        <p> Founder: {founder}</p>
        
      
        <p>
          <button onClick={handleDeleteHub}>Delete Hub</button>
        </p>
      </div>
    </div>
    </NavLink>
  );
}

export default HubItem;