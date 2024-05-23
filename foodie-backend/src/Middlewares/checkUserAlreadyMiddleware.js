// import { Food } from "../Modules/users"
const {Food}= require('../Modules/users')

const checkUserAlready=(req, res, next)=>{
    Food.findOne({email:req.body.email}).exec() 
    .then((user)=>{
        if(user===null){
      next()

        }else{
            res.status(404).json({success:false,message:"user already found please login"})
        }
    }).catch((err)=>{
        res.status(404).json({ success:false, message:"data not found", err:err})
    })

}

module.exports={checkUserAlready}