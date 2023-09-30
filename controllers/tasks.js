const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomeError} = require('../errors/custome-error')

const getAllTasks = asyncWrapper( async (req,res)=>{
   
        const tasks = await Task.find({})
        res.status(200).json({tasks})
        // res.status(200).json({tasks,amout:tasks.length,})
        // res.status(200).json({success:true,data:{tasks,nbHits:tasks.length} })
        // res.status(200).json({status:"success",data:{tasks,nbHits:tasks.length} })
})


const createTask = asyncWrapper(async (req,res)=>{
        // to create the document in our collection 
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

const getTask = asyncWrapper( async (req,res, next)=>{

        const {id: taskId} = req.params
        const task = await Task.findOne({_id: taskId}).exec();
        
        if(!task){
            return next(createCustomeError(`No task with id ${taskId}`,404))
            // const error = new Error ('Not Found')
            // error.status = 404
            // return next(error)
            // return res.status(404).json({msg:`No task with id ${taskId}`})
        }
        res.status(200).json({task})
})

const deleteTask = asyncWrapper( async (req,res)=>{
   
        const {id: taskId} = req.params
        const task = await Task.findOneAndDelete({_id: taskId});
        
        if(!task){
            // console.log("null");
            return next(createCustomeError(`No task with id ${taskId}`,404))
            // return res.status(404).json({msg:`No task with id ${taskId}`})
        }
        res.status(200).json({task:task, status:"sucess", msg:"Task has been deleted successfully!"})
})



const updateTask = asyncWrapper( async (req,res)=>{

        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators: true
        })

        if(!task){
            return next(createCustomeError(`No task with id ${taskId}`,404))
            // return res.status(404).json({msg:`No task with id ${taskID}`})
        }

        res.status(200).json({id: taskID, task})

})

module.exports={
    getAllTasks,createTask, getTask, updateTask, deleteTask
}