import React from 'react';
import homeimage from '../Assets/hubs.jpg'
import '../Css/Home.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home =() =>{
    const isReviewOpen = useSelector(state => state.review.isReviewOpen)
    console.log(isReviewOpen)
    return(
        <> 
       <div className="mainsection">
        <div className="contentbox">
            <h1>Welcome to HubZetu</h1>
            <p> Helping Fellow tech members Choose their next hub by offering honest reviews. </p>
                 <div className="btnBox">
                    <div className="btn">
                        <NavLink to ='/signup' className="SendNow"> Join Us </NavLink>
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

