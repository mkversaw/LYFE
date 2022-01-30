require('dotenv').config()
const path = require('path')
const ejs = require("ejs");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose; // easier to make new schemas
const https = require('https');
const http = require('http');
const admin = require('firebase-admin');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

var mongooseConn = mongoose.connection;

mongooseConn.on('connected', function() {
	console.log('connected to mongoDB successfully');
});

mongooseConn.on('disconnected', function() {
	console.log('disconnected from mongoDB successfully');
});

mongooseConn.on('error', console.error.bind(console, 'connection error:'));
module.exports = mongooseConn; // ???

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
//app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'build')));

app.use(cookieParser());

const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE,
	messagingSenderId: process.env.FIREBASE_MESSAGING,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const userSchema = new mongoose.Schema ({
	id: String,
	email: String,
	name: String,
	goldcoin: Number,
	socialcredit: Number
});

const User = mongoose.model("users", userSchema);

initializeApp(firebaseConfig);

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// user logins in -> redirect to react page

app.get("/", function(req, res) {
	var uid = req.cookies.uid;
  	if (uid) {
		User.findOne({id : uid}, function(err, foundUser) {
		  if (err) {
			res.redirect("/login");
		  } else {
			if (foundUser) {
			  res.redirect("/mainpage");
			}
		  }
		});
  	} else {
		res.render("login");
  	}
});

app.get("/login", function(req, res) {
	res.render("login");
});
  
app.get("/register", function(req, res) {
	res.render("register",{error : ""});
});

app.get("/mainpage", function(req, res) {
	res.render("mainpage");
});

app.post("/register", function(req, res) {
	const email = req.body.email;
	const password = req.body.pass1;
	const password2 = req.body.pass2;
	const name = req.body.username;
  
	if(password != password2) {
		res.render("register",{error : "Passwords did not match"});
		return;
	}

	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password) // check if account already exists
	  .then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		User.findOne({id: user.uid}, function(err, foundUser) {
		  if (err) {
			res.redirect("/register");
		  } else {
			if (foundUser) {
			  res.redirect("/login");
			}
		  }
		});
		
	  })
	  .catch((error) => { // no existing user
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			const newUser = new User({
			  id: user.uid,
			  name: name,
			  email: email,
			  goldcoin: 0,
			  socialcredit: 0
			});
			newUser.save(function(err) {
			  if (err) {
				res.redirect("/register");
			  }
			  res.cookie('uid', user.uid);
			  res.redirect("/mainpage");
			});
		  })
		  .catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
			res.redirect("/register");
		  });
	  });
});

app.post("/login", function(req, res){
	const email = req.body.email;
	const password = req.body.password;
	console.log(email);
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		User.findOne({id: user.uid}, function(err, foundUser) {
		  if (err) {
			res.redirect("/login");
		  } else {
			if (foundUser) {
			  res.cookie('uid', user.uid);
			  res.redirect("/mainpage");
			}
		  }
		});

	  })
	  .catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
		res.redirect("/login");
	  });
});

let port = (process.env.PORT || 5000);

app.listen(port, function() {
    //console.log("Server started successfully.");
});

// app.get('/express_backend', (req, res) => { // TODO
// 	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// }); //Line 