
var LocalStrategy=require('passport-local').Strategy;
var User=require('../models/user')


var config=function(passport){

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
}

module.exports=config;
