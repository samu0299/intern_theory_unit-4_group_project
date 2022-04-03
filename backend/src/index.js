const express = require("express");
const app = express();

const {register,login, generateToken} = require("./controllers/auth_controller");

const passport = require("./configs/google-oauth")
const cors = require("cors");



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  
  app.use(express.json());
  app.use(cors());
  
  app.post("/register", register)
  
  app.post("/login", login)




  
  app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false } ),

  function(req, res) {
    const token = generateToken(req.user)
    return res.status(200).send({user:req.user, token})
  }
)

module.exports = app;