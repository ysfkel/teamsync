var router=require('express')();
var Bug=require('../models/bug');

router.route('/v1/bugs')
.get(function(req,res){
    console.log('..bugs')
     Bug.find(function(err,data){
        if(err){
            throw err;
        }else{
            return res.json(data);
        }
     });
})
.post(function(req,res){ 
   var bug=new Bug(req.body);

    bug.save(function(err,data){
        if(err){
            throw err;
        }else{
            res.send(data);
        }
    })
    
})

router.route('/v1/bugs/:id')
.get(function(req,res){
   var id=req.params.id;
   Bug.findOne(id,function(err,data){
      if(err){
          throw err;
      }else{
          res.json(data);
      } 
   });
    
})




module.exports=router;