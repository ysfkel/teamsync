var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BugSchema=new Schema({
    title:String,
    description:String,
    date:{type:Date,default:Date.now}
});

module.exports=mongoose.model('Bug',BugSchema);
