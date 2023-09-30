// express server 

const express = require('express')
const app = express()
const tasks = require('../routes/tasks')

const connectDB = require('../db/connect')
// to access varuables in .env file
require('dotenv').config()
// 404 handle notfound response
const notFound = require('../middleware/notFound')
// middleware error handler 
const errorHandlerMiddleware = require('../middleware/error-handler')


// create middleware 
app.use(express.json())

//routes 
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks)

// to handle the 404 
app.use(notFound)
// error handler
app.use(errorHandlerMiddleware)


const port =process.env.PORT || 3000
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port , console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}
start()



