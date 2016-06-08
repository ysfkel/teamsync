var Schema=require('mongoose').Schema;


var TaskSchema=new Schema({
   
   DateCreated:Date,
   title:String,
   status:B
    
});

module.exports=mongoose.model('Task',TaskSchema);