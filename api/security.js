var express=require('express');
var passport=require('passport');
var User=require('../models/user');
var jwt=require('jsonwebtoken');
var router=express.Router();






module.exports=function(appSecret){
    
    //register user
    router.post('/v1/register',function(req,res){
       //
       
        console.log('-hit')
    try{
    //     if(!req.body.role){
    
    //      return res.status(400).json("Bad request,you must provide the field fname,lname and role")
    //  }
    //  if(!req.body.fname){
       
    //      return res.status(400).json("Bad request,you must provide the field fname,lname and role")
    //  }
    //   if(!req.body.lname){
       
    //      return res.status(400).json("Bad request you must provide the field fname,lname and role")
    //  }
   
     
    var newUser=new User(
        {
            username:req.body.username,
            
            role:req.body.role
        });
      
      User.register(newUser,req.body.password,function(err,user){
          if(err){
              console.log('failed',err);
              return res.json({
                  status:'failed',
                  code:500,
                  message:err
                 
              } )
          }else{
              try{
                        return res.json({
                                status:'Ok',
                                    code:200,
                                    user:user
                                    });
                            

                //SAVE PROFILE DATA
                
               }catch(ex){
                   console.log(ex);
                   return res.status(500).send(ex.message);
               }
          }
      }) 
    }catch(ex){
                   console.log('failed',ex);
        return res.status(500).send(ex.message);
    }
      
       //END 
    });
    //sign in
    router.post('/v1/token',passport.authenticate('local',
           {session:false}),function(req,res){
               
       var user={
           name:req.user.username,
           id:req.user._id,
           role:req.user.role
       };
       var expiry={
           milliseconds:86400000,
           seconds:86400
       }
       
       return res.json({status:'ok',code:200,
               user:user,
               token:{
                   hash:jwt.sign(req.user,appSecret,{
                       expiresIn:expiry.seconds
                   }),
                   expiry:{
                       seconds:expiry.seconds,
                       milliseconds:expiry.milliseconds
                   }
               }
              });
 })
 
 return router;
}

