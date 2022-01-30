import './App.css';

import React from 'react';
import { NavLink} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-scroll'
import img2 from './images/coin.svg';
import img3 from './images/user.svg'
import img1 from './images/lyfevect.svg'
import {InputAdornment , Grid,Icon, Card, CardContent, CardMedia,Typography, Button, CardActions,Box,TextField} from '@material-ui/core';



const NavBar = () =>{
  return(
    <header>
    <div className="container">
      <div className="leftside">
        <img className = "photo" src ={img1} style={{}} alt=""/>
      </div>
      <div className="rightside">
        <nav>
          <ul>
  
            <li><Link to ="profile" spy= {true} smooth = {true}> <img className="photoThree" src = {img3} style={{}} alt=""/></Link></li>
            <li><a href="#">Sign Out</a></li>
          </ul>
        </nav>
      </div>
      
    </div>
  </header>
  
  )
}


export default NavBar;