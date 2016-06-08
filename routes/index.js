var app=require('express')();

app.get('index',function(req,res){
   res.render('index') 
});