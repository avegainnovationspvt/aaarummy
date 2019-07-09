const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/secret');

//creating some options to authenticate and to fetch the tokens from header and then will create a new jwtstrategy which contains options and function which consists of payload where all the user information is present
module.exports = function(passport){
	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		User.getUserById(jwt_payload._id, (err, user) => {
			if(err){
				return done(err, false);
			}

			if(user){
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}));
}