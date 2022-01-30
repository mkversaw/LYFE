import './App.css';

import React from 'react';
import { NavLink} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-scroll'
import img2 from './images/coin.svg';
import img3 from './images/user.svg'

import {InputAdornment , Grid,Icon, Card, CardContent, CardMedia,Typography, Button, CardActions,Box,TextField} from '@material-ui/core';



const NavBar = () =>{
  return(
    <header>
    <div className="gridWrapper" >
          <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2} >
            <Grid item xs={12}>
            <div className="leftside" >
                <h1 className="logo">Logo goes here!</h1>
            </div>
            </Grid>



            <Grid item xs={12}>
            <div className="rightside">
                <ul>
                
                    <li> <img className = "photoTwo" src ={img2} style={{}} alt=""/>   <div className="coinNumbers">   100</div></li>
                    <li><Link to ="profile" spy= {true} smooth = {true}> <img className="photoThree" src = {img3} style={{}} alt=""/></Link></li>
                    <li><a href="#">Sign Out</a></li>
                </ul>
            </div>
            </Grid>
          </Grid>
    </div>

    
  </header>
  
  )
}


export default NavBar;