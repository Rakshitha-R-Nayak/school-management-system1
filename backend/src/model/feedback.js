const mongoose= require('mongoose')
const feedbackSchema= new mongoose.Schema({
    name:{
        type: String,
        require : true,
    },
    USN : {
        type: String,
        unique : true,
    },
    email : {
        type: String,
    },
    message :{
        type: Number
    },


})
module.exports= new mongoose.model('Feedback',feedbackSchema);
