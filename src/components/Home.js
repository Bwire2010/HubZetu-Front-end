import React from 'react';
import homeimage from '../Assets/hubs.jpg'
import '../Css/Home.css'
import { Nav } from 'react-bootstrap';

const Home =() =>{
    return(
        <> 
       <div className="mainsection">
        <div className="contentbox">
            <h1>Welcome to HubZetu</h1>
            <p> Helping Fellow tech members Choose their next hub by offering honest reviews. </p>
                 <div className="btnBox">
                    <div className="btn">
                        <Nav.Link to ='/login' className="SendNow"> Join Us </Nav.Link>
                      
                    </div>

                 </div>
        </div>
        <div className="imageContainer">
            <img src ={homeimage} alt = "home" />
        </div>
       </div>
        </>

    )
}

export default Home;

