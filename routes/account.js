var express=require('express');
var router=express.Router();


router.get('/login',function(req,res){
   res.render('login'); 
});

router.get('/signup',function(req,res){
   res.render('sign-up'); 
});


router.get('/logout',function(req,res){
   req.logout();
   res.redirect('/') 
});