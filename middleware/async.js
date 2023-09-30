const asyncWrapper = (callback)=>{
    return async(req,res,next)=>{
        try {
            // console.log('Iam hereee');
            await callback(req,res,next)
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper