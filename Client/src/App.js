import './App.css';
import React, { Component,useState, useEffect } from 'react';
import {Image} from 'react-native';
import {isMobile} from 'react-device-detect';


import {InputAdornment , Grid,Icon, Card, CardContent, CardMedia,Typography, Button, CardActions,Box,TextField} from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

import DatePicker from "react-datepicker";

import running from "./runningman.svg";
import waterglass from "./waterglass.svg";
import lunch from "./lunch.svg";
import breakfast from "./breakfast.svg";
import dinner from "./dinner.svg";
import bed from "./bed.svg";
import gym from "./gym.svg";

import Navbar from "./Navbar.js";
import Profile from "./Profile.js"

class App extends Component {

  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    //return body;
  

  const [glassAmt, setGlassAmt] = useState(0);
  const [calories, setCalories] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [bcalories,setBcalories] = useState(0);
  const [lcalories,setLcalories] = useState(0);
  const [dcalories, setDcalories] = useState(0);

  const[bdisable,setBdisable]=useState(false);
  const[ldisable,setLdisable]=useState(false);
  const[ddisable,setDdisable]=useState(false);

  const[gymTime, setGymTime]=useState(0);
  const[totalGymTime, setTotalGymTime]=useState(0);


  const[hours,setHours]=useState(8);
  let today=new Date();
  let min=today.getMinutes();
  let time=today.getHours();

  const[wakeTime,setWakeTime]=useState(parseInt(time)+parseInt(hours));
  

  const[minutesRun,setMinutesRun]=useState(0);
  const[totalRun,setTotalRun]=useState(0);



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
  
  
      <CardContent>
        <Typography variant="h6">
          Time spent running:
        </Typography>
        <Typography>
          It is recommended to exercise for at least 1 hour daily
        </Typography>

      </CardContent>

      <CardContent  className="d-flex flex-row justify-content-center .padding-xs">
      
        <TextField 
            type="number"
            id="filled-helper-text"
            label="Enter time"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">mins</InputAdornment>,
            }}
            onChange={event => {
              event.target.value = Math.min(300, parseInt(event.target.value) );
              if (event.target.value<300){
               setMinutesRun(event.target.value);
              }
            }
            
          }
          />
  
      </CardContent>
        <CardActions className="justify-content-center p-4">
          <Button type="submit" size="large" variant="contained" onClick={() => {

                      setTotalRun(parseInt(totalRun)+parseInt(minutesRun));
                    }} 
                    >Submit</Button>
      </CardActions>
    </React.Fragment>
  );
  
  const cardwater=(
    <React.Fragment>
      
      <CardContent className="imgContainer" >
        <CardContent className="mediawrapper" >
          <CardMedia component="img"
            className="cardMedia" 
            src={waterglass}
          />
        </CardContent>
      </CardContent>
  
  
      <CardContent className="d-flex flex-row justify-content-center"  >
        <Typography variant="h6" >Daily Goal: 8 glasses of water</Typography>
  
      </CardContent>

      <CardContent>
        <Typography variant="h2">{glassAmt}/8</Typography>
      </CardContent>
      <CardContent >
        <CardActions  className="justify-content-around p-3">
          
          <Button size="large" variant="contained" onClick={() => {
                    if (glassAmt<8){
                      setGlassAmt(glassAmt+1);
                    //  alert(glassAmt);
                    }
                  }} 
                  >Drink!!</Button>
        </CardActions>
      </CardContent>
      
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
  
      <CardContent>
        <Typography variant="h6">
          Lunch caloric intake: 
          <br/>
           {lcalories} calories
        </Typography>
        </CardContent>
      <CardContent  className="d-flex flex-row justify-content-center .padding-xs">
        
      <TextField 
            type="number"
            id="filled-helper-text"
            label="enter calories"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">cal</InputAdornment>,
            }}
            disabled={ldisable}
            onChange={event => {
              event.target.value = Math.max(0, parseInt(event.target.value) ).toString().slice(0,4);
              if (event.target.value<10000){
               setLcalories(event.target.value);
              }
            }
            
          }
          />
  
      </CardContent>
        <CardActions className="justify-content-center p-4">
          <Button type="submit" size="large" variant="contained" onClick={() => {

                      setTotalCalories(parseInt(totalCalories)+parseInt(lcalories));
                      setLdisable(true);
                    }} 
                    >Submit</Button>
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
      <CardContent>
        <Typography variant="h6">
          Breakfast caloric intake: 
          <br/>
           {calories} calories
        </Typography>
      </CardContent>
    
      <CardContent  className="d-flex flex-row justify-content-center">
        
      <TextField 
            type="number"
            id="filled-helper-text"
            label="enter calories"
            variant="outlined"
            disabled={bdisable}
            InputProps={{
              endAdornment: <InputAdornment position="end">cal</InputAdornment>,
            }}
            onChange={event => {
              event.target.value = Math.max(0, parseInt(event.target.value) ).toString().slice(0,4);
              if (event.target.value<10000){
               setCalories(event.target.value);
              }
            }
            
          }
          />
  
      </CardContent>
      <CardActions className="justify-content-center p-4">
        <Button type="submit" size="large" variant="contained" onClick={() => {

                    setTotalCalories(parseInt(totalCalories)+parseInt(calories));
                    setBdisable(true);
                  }} 
                  >Submit</Button>
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
      <CardContent>
        <Typography variant="h6">
          Dinner caloric intake: 
          <br/>
           {dcalories} calories
        </Typography>
      </CardContent>
  
      <CardContent  className="d-flex flex-row justify-content-center">
        
      <TextField 
            type="number"
            id="filled-helper-text"
            label="enter calories"
            variant="outlined"
            disabled={ddisable}
            InputProps={{
              endAdornment: <InputAdornment position="end">cal</InputAdornment>,
            }}
            onChange={event => {
              event.target.value = Math.max(0, parseInt(event.target.value) ).toString().slice(0,4);
              if (event.target.value<10000){
               setDcalories(event.target.value);
              }
            }
            
          }
          />
  
      </CardContent>
      <CardActions className="justify-content-center p-4">
        <Button type="submit" size="large" variant="contained" onClick={() => {

                    setTotalCalories(parseInt(totalCalories)+parseInt(dcalories));
                    setDdisable(true);
                  }} 
                  >Submit</Button>
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

      <CardContent >
        <Typography variant="h6">
          How much sleep did you get last night? 
        </Typography>
        <Typography>
          It is recommended to sleep for at least 8 hours every night. 
        </Typography>

      </CardContent>
      <CardContent  className="d-flex flex-row justify-content-center .padding-xs">
        
        <TextField 
              type="number"
              id="filled-helper-text"
              label="Enter hours"
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end">hours</InputAdornment>,
              }}
              onChange={event => {
                event.target.value = Math.min(24, parseInt(event.target.value) );
                if (event.target.value<24){
                setHours(event.target.value);
                }
              }
              
            }
          />
  
      </CardContent>
        <CardActions className="justify-content-center p-4">
          <Button type="submit" size="large" variant="contained" onClick={() => {

                      
                      setWakeTime(parseInt(time)+parseInt(hours));
                    }} 
                    >Submit</Button>
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
            type="number"
            id="filled-helper-text"
            label="Enter workout time (m)"
            variant="outlined"
          />
  
      </CardContent>
      <CardActions>
        <Button type="submit" size="large" variant="contained" >Submit</Button>
      </CardActions>
    </React.Fragment>
  );
  
  
  }
  render() {
  return (
    
      <div className="App" style={{backgroundColor:"blue"}}>
        <Navbar></Navbar>

        <div className="gridWrapper" >
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} >
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card" >{this.cardwater}</Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{this.cardbreakfast}</Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{this.cardlunch}</Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{this.carddinner}</Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{this.cardrun}</Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" className="card">{this.cardsleep}</Card>
            </Grid>
            
          </Grid>

          
        </div>

        
        <h1 style={{color:'white'}} className="p-2">
          Total caloric intake today: {this.totalCalories}
        </h1>
        <h1 style={{color:'white'}} className="p-2">
          Total workout time today: {this.totalGymTime}
        </h1>

        <h1 style={{color:'white'}} className="p-2">
          Wake-up time for a healthy amount of sleeep: {this.wakeTime}:{this.min} O'clock
        </h1>

        <h1 style={{color:'white'}} className="p-2">
          Total amount of time exercising: {this.totalRun} minutes
        </h1>
        
        
        <div id="profile" className="justify-content-center">
          <Profile/>
        </div>

      </div>
  );
  }
}

export default App;
