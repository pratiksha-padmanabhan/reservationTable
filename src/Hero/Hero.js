//  import '../../App.css';

// import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
//  import img1 from "/Users/pratiksha/pratproj/src/assets/restauranfood.jpg"

import './Hero.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
 <div style={{marginTop:"0px"}}>
   <div className="main">
     <div className="grid-container">
        <div class='about'>
          <h1 className="name">Little Lemon</h1>
          <h3 className="location">Chicago</h3>
          <h5 className="description">We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</h5>
          <Link to="/BookingForm"><button className="reserveATable">Reserve a table</button> </Link>   
        </div>
        <div class="imageholding">
          <img className="resFood" src={require('/Users/pratiksha/pratproj/src/assets/restauranfood.jpg')} alt='hello'/>
        </div>
      </div>
     
 
 
     </div>
   </div>
    );
}

export default Hero;