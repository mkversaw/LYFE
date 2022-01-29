const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose; // easier to make new schemas
const https = require('https');
const http = require('http');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');

const firebaseConfig = {
	apiKey: "AIzaSyAx4MvE-Zo4QquSyTC6nqml7IPpYsDUs0Y",
	authDomain: "lyfetamuhack22.firebaseapp.com",
	projectId: "lyfetamuhack22",
	storageBucket: "lyfetamuhack22.appspot.com",
	messagingSenderId: "417014250599",
	appId: "1:417014250599:web:5caa7690dcc0f06cefa8c2",
	measurementId: "G-M26TQ1EK64"
};

initializeApp(firebaseConfig);


app.get("/", function(req, res){
    res.render("login.ejs");
});

let port = 3000;

app.listen(port, function() {
    console.log("Server started successfully.");
});