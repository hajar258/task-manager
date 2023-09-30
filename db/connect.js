const mongoose = require('mongoose')




// THIS APPROACH WILL ENABLE US TO DO THE CONNECTIO CHECK FIRST AND THEN DO THE LOGIC
const connectDB = (url)=>{
    mongoose
        .connect(url,{
            useNewUrlParser: true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        })
}

module.exports  = connectDB


// this approach will amke the app work fisrt an then check the connection with the db -- which is not good , we need to check the connection to db fisrt and then go to our logic 
/** 
mongoose
.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(()=>{console.log('CONNECTED TO THE DB ...');})
.catch((err)=>{console.log(err);})
*/
