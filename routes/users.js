// All routes for the users
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/secret');
const User = require('../models/user');

// Post Route for register the user
router.post('/register', (req, res, next) => {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		contact: req.body.contact,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, (err, user) => {
		if(err){
			res.json({success: false, msg:'Failed to register user'});
		} else {
			res.json({success: true, msg:'User registered'});
		}
	});
});

// Post Route for authenticating the user
router.post('/authenticate', (req, res, next) => {
	const username =  req.body.username;
	const password =  req.body.password;
	// Accessing the user by the username
	User.getUserByUsername(username, (err, user) => {
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}
		// comparing the password between the user entered and in the database
		User.comparePassword(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign(user.toJSON(), config.secret, {
					expiresIn: 604800 // 1 week(time after that the user has to login)
				});
				// response given to the frontend
				res.json({
					success: true,
					token: 'JWT '+token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}
				});
			} else {
				return res.json({success: false, msg: 'Wrong password'});
			}
		});
	});
});

// Get Route for the profile of the user
// To protect the route pass the second parameter using passport
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	res.json({user: req.user});
});

module.exports = router;
