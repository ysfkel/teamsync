var mongoose=require('mongoose');
var Person=require('./valueObjects/person');
var Task=require('./valueObjects/task')
var Schema=mongoose.Schema;

var TeamMemberSchema=new Schema({
    personalDetails:Person,
    tasks:[mongoose.model('Task')]
});

module.exports=mongoose.model('TeamMember',TeamMemberSchema);

