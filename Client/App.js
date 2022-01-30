import './App.css';
import React, { Component,useState, useEffect } from 'react';
import {Image} from 'react-native';
import {isMobile} from 'react-device-detect';


import {Grid,Icon, Card, CardContent, CardMedia,Typography, Button, CardActions,Box,TextField} from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import { green, purple } from '@mui/material/colors';



import running from "./runningman.svg";
import waterglass from "./waterglass.svg";
import lunch from "./lunch.svg";
import breakfast from "./breakfast.svg";
import dinner from "./dinner.svg";
import bed from "./bed.svg";
import gym from "./gym.svg";

import foodtime from "./foodtime.js";






function App() {

  

  let today = new Date();
  let time = today.getHours();



  const userId = 4; // the id of the user that you want to fetch
  fetch(`/info/${userId}`);
  

 

  const cardrun = (
    <React.Fragment>
      
      <CardContent className="imgContainer" >
        <CardContent className="mediawrapper">
          <CardMedia component="img"
            className="cardMedia" 
            src={running}
          />
        </CardContent>
      </CardContent>
  
  
      <CardContent className="d-flex flex-row" >
      <TextField 
            id="filled-helper-text"
            Enter Calories
            label="enter calories"
            variant="outlined"
          />
  
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  const cardwater=(
    <React.Fragment>
      
      <CardContent className="imgContainer" >
        <CardContent className="mediawrapper">
          <CardMedia component="img"
            className="cardMedia" 
            src={waterglass}
          />
        </CardContent>
      </CardContent>
  
  
      <CardContent className="d-flex flex-row">
      <TextField 
      
            id="filled-helper-text"
            Enter Calories
            label="enter calories"
            variant="outlined"
          />
  
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  
  const cardlunch=(
    <React.Fragment>
      
      <CardContent className="imgContainer">
        <CardContent className="mediawrapper">
          <CardMedia component="img"
            className="cardMedia" 
            src={lunch}
          />
        </CardContent>
      </CardContent>
  
  
      <CardContent className="d-flex flex-row" >
      <TextField 
            id="filled-helper-text"
            Enter Calories
            label="enter calories"
            variant="outlined"
          />
  
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  const cardbreakfast=(
    <React.Fragment>
      
      <CardContent className="imgContainer">
        <CardContent className="mediawrapper">
          <CardMedia component="img"
            className="cardMedia" 
            src={breakfast}
          />
        </CardContent>
      </CardContent>
  
  
      <CardContent className="d-flex flex-row">
      <TextField 
            id="filled-helper-text"
            Enter Calories
            label="enter calories"
            variant="outlined"
          />
  
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  const carddinner=(
    <React.Fragment>
      
      <CardContent className="imgContainer">
        <CardContent className="mediawrapper">
          <CardMedia component="img"
            className="cardMedia" 
            src={dinner}
          />
        </CardContent>
      </CardContent>
  
  
      <CardContent className="d-flex flex-row">
      <TextField 
            id="filled-helper-text"
            Enter Calories
            label="enter calories"
            variant="outlined"
          />
  
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  const cardsleep=(
    <React.Fragment>
      
      <CardContent className="imgContainer">
        <CardContent className="mediawrapper">
          <CardMedia component="img"
            className="cardMedia" 
            src={bed}
          />
        </CardContent>
      </CardContent>
  
  
      <CardContent className="d-flex flex-row">
      <TextField 
            id="filled-helper-text"
            Enter Calories
            label="enter calories"
            variant="outlined"
          />
  
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  const cardgym=(
    <React.Fragment>
      
      <CardContent className="imgContainer">
        <CardContent className="mediawrapper">
          <CardMedia component="img"
            className="cardMedia" 
            src={gym}
          />
        </CardContent>
      </CardContent>
  
  
      <CardContent className="d-flex flex-row">
      <TextField 
            id="filled-helper-text"
            Enter Calories
            label="enter calories"
            variant="outlined"
          />
  
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  

 
  
  

  return (
    
      <div className="App" style={{backgroundColor:"blue"}}>
        <p>lmao</p>
        <div className="gridWrapper" >
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} >
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card" >{cardwater}</Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{cardbreakfast}</Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{cardlunch}</Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{carddinner}</Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{cardgym}</Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{cardsleep}</Card>
            </Grid>
            
          </Grid>
          <foodtime />
        </div>
      </div>
  );
}

export default App;
