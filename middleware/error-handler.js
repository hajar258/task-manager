// express midleware for handing the error 

const {CustomeAPIError} = require('../errors/custome-error')

const errorHandlerMiddleware = (err, req, res, next)=>{
    if ( err instanceof CustomeAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({err:'Something went wrong, please try again!'})
}


module.exports = errorHandlerMiddleware
