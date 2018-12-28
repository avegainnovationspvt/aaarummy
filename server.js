const express = require('express');
const app = express();
const server = require('http').createServer(app);
const gameConfig = require('./config/game-config.js');
const port = require('./config/port.js');
var path = require('path');

var async = require('async');
var auth = require('./middleware/index');
var User = require('./models/user');
var cookieParser = require('cookie-parser');
var LocalStrategy = require("passport-local").Strategy;
var GoogleStrategy = require('passport-google-oauth20');
var passport = require('passport');
var flash = require("connect-flash");
var mongoose = require("mongoose");
var bcrypt =  require('bcryptjs');


var router = express.Router();
//Mongo connection
mongoose.connect("mongodb://pdcoder:pdcoder1!@ds143604.mlab.com:43604/rummy");

//EJS support
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//session support
app.use(require("express-session")({
  secret: 'Bingo',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 6000000
  }
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

//Passport setup
passport.use(new LocalStrategy({passReqToCallback : true},(req,username, password,done)=>{
  User.findOne({
      username: username
  }, (err,user)=>{
      
      if (err) return done(err);

       // When user is not found
       if (!user) return done(null, false, req.flash('errorlogin','Mail not found'));

       bcrypt.compare(password,user.password,(err,res)=>{
          if (err) return done(err);
          if (res === false) {
            return done(null, false, req.flash('errorlogin','Wrong password'));
          } else {
            return done(null, user);
          }
      });
  });
}));

//Google passport setup
passport.use(
  new GoogleStrategy({
      clientID:'xxxxx',
      clientSecret:'xxxx',
      callbackURL:'http://localhost:3000/auth/google/callback'
  },(accessToken, refreshToken, profile, done)=>{
      process.nextTick(function() {
          User.findOne({"email": profile.emails[0].value}, function(err, founduser){
              if (err) {
                  return done(err);
              } else {
                  if (founduser) {
                      return done(null, founduser);
                  } else {
                      User.findOne({ 'googleUserId' : profile.id }, function(err, user) {
                          if (err)
                              return done(err);
                          if (user) {
                              // if a user is found, log them in
                              return done(null, user);
                          } else {
                              // if the user isnt in our database, create a new user
                              var newUser = new User();
                              // set all of the relevant information
                              newUser.googleUserId    = profile.id;
                              newUser.username = profile.emails[0].value;
                              // save the user

                              User.create(new User(newUser), function(err) {
                                  if (err)
                                      throw err;
                                  return done(null, newUser);
                              });
                          }
                      });
                  }
              }
          });
          // try to find the user based on their google id
      });
  })
);

app.use(function(req, res, next){
  if (req.isAuthenticated()) {
      res.locals.currentUser = req.user;
      res.locals.success = req.flash('success');
      res.locals.error = req.flash('error');
  } else {
      res.locals.success = req.flash('success');
      res.locals.error = req.flash('error');
      res.locals.errorlogin = req.flash('errorlogin');
  }
  next();
});


passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, (err,user)=>{
      cb(err,user);
  });
});


app.get('/auth/google', passport.authenticate('google',{
  scope:[
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
  ]
}));

app.get("/", auth.isLoggedIn, function (req, res) {
    res.render("index", { username : req.user.username});
  });

  

app.get("/login", function (req, res) {
  res.render("login", { error: res.locals.error, errorlogin : res.locals.errorlogin });
});

app.get("/signup", function (req, res) {
  res.render("signup", { success: req.flash('success'), error: res.locals.error });
});


app.post("/signup", async (req, res) => {

  const user = await User.findOne({ username : req.body.username });
  if (user) {
    req.flash('error', 'Email is already in use.');
    res.redirect('/signup');
    return;
  }
  else{
  await bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw err;
      req.body.password = hash;
      const newUser = new User(req.body);
      console.log(newUser);
      newUser.save();
    });
  });

  req.flash('success', 'Registration successfully, go ahead and login.')
  res.redirect('login')
}
});

app.post('/login', passport.authenticate("local",{
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}), (req, res) => {
});

//Forgot Password logic
app.get('/forgot', function (req, res) {
    res.render('forgot');
  });
  
  app.get('/reset/:token', function (req, res) {
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
      if (!user) {
        req.flash('error', 'Password reset token is invalid or has expired.');
        return res.redirect('/logout');
      }
      res.render('resetPass', {
        user: req.user
      });
    });
  });

  app.post('/forgot', function (req, res, next) {
    async.waterfall([
      function (done) {
        crypto.randomBytes(20, function (err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function (token, done) {
        User.findOne({ username: req.body.email }, function (err, user) {
          if (!user) {
            req.flash('error', 'No account with that email address exists.');
            return res.redirect('/forgot');
          }
  
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
          user.save(function (err) {
            done(err, token, user);
          });
        });
      },
  
      function (token, user, done) {
  
        const msg = {
          to: user.username,
          from: 'prakashdas1998.pd@gmail.com',
          subject: 'Verify your account!',
          html: `Please click on the <a href="http://localhost:3000/reset/${token}">link</a> to reset your password`,
        };
        sgMail.send(msg, function (err) {
          req.flash('info', 'An e-mail has been sent to ' + user.username + ' with further instructions.');
          done(err, 'done');
        });
      }
    ], function (err) {
  
      if (err) return next(err);
      res.redirect('/forgot');
    });
  
  
  });
  
  
  app.post('/reset', async function (req, res) {
    var pass = req.body.password;
    var confirm = req.body.confirmPass;
    if (pass !== confirm)
      res.render('resetPass', { error: 'Passwords don\'t match' });
    var user = User.findOne({ 'username': req.user.username });
  
    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(result.value.password, salt, (err, hash) => {
        if (err) throw err;
        user.password = hash;
        user.save();
      });
    });
});

const io = require('socket.io')(server, {
  pingInterval: 15000,
  pingTimeout: 30000
});
gameConfig.io = io;
const game = require('./game.js')(gameConfig);

io.on('connect', (socket) => {
  game.appendSocketListeners(socket);
});

app.disable('x-powered-by');
app.use(express.static('dist'));
app.use(express.static('public'));


// 404 handling.
app.use((req, res) => {
  res.status(404);
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><title>404 Not found</title></head><body><h1>404 Not found.</h1><br><span style="color:blue;text-decoration:underline;cursor:pointer" onclick="location.href=location.host">Main page</span></body></html>');
});

server.listen(port, () => {
  console.log(`Listening on ${server.address().port}`);
});
