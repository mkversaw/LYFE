import React from 'react';
import img2 from './images/coin.svg';
import img3 from './images/user.svg';
import './App.css';
import { NavLink as Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Profile = () =>{
    return(
        <div>
        <img className = "photoFour" src ={img3} style={{}} alt=""/>


        <div className="justify-content-center">
            <h1 className="fullLine"> Bingus </h1>
        </div>
        
        <div className = "stats" >
            
            <ul><li><h1> Level: 3 </h1> </li>
            <li><h1> XP: 500 </h1></li>
            <li><h1> Coins: 453 </h1></li>
            <li><h1> Savings: $0.32 / month </h1></li></ul>
        </div>
        </div>
    )
}
export default Profile;