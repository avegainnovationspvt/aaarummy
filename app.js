//Main server entry point file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//Mongo connection
mongoose.connect("mongodb://Sudeep36:sant0551@ds149616.mlab.com:49616/rummy");

// Initializing the app variable to express
const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware
// Making it public so that any domain can access it and can disable some rooutes if user doesn't send correct token
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/forgot-password', express.static(__dirname + 'public'));
app.use('/login', express.static(__dirname + 'public'));
app.use('/game', express.static(__dirname + 'pubic'));
app.use('/lobby', express.static(__dirname + 'public'));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
	console.log('Server started on port '+port);
});
