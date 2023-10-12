const mongoose = require('mongoose')

const techSkills = new mongoose.Schema({
    skill :{
        type : String,  
        required : "Enter a Technical Skill - cannot be empty"
    },
   
})


module.exports = mongoose.model("technicalskill",techSkills)