const mongoose = require('mongoose')

// this is to set a structure for our documents in our collection  
const TaskSchema = new mongoose.Schema({
    name: {
        // to setup the validation 
        type:String, 
        // required:true,
        required:[true, 'must provide a name!'],
        trim:true,
        maxlength:[20,'nme ca not be more than 20 characters'],
    },
    completed:{
        // to setup the validation 
        type:Boolean, 
        default:false,
        trim:true,
        maxlength:[20,'nme ca not be more than 20 characters'],
    },
})

module.exports = mongoose.model('Task',TaskSchema)