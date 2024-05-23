 const jwt = require('jsonwebtoken')
const { Food } = require('../Modules/users')

 require('dotenv').config()

// import { JsonWebTokenError } from "jsonwebtoken"

const cartAuthMiddleware=(req, res, next)=>{
     console.log(req.body)
    
    const token= req.body.token  
    if(token==='undefined'){
        res.status(403).json({message:"Please login "})
    }else{
        console.log("accessed")
        
        const decoded= jwt.verify(token , process.env.JWT_TOKEN)
        // console.log(decoded)
        console.log("token unaccessed")
         req.email= decoded.email
         console.log(req.email)
 
        Food.findOne({email:decoded.email}).exec()
        .then((user)=>{
            if(user!==null){
                
                next()

            }else{
                res.status(404).json({message:"email not registered in database "})
            }

        }).catch((err)=>{
            res.status(404).json({message:err})
        })
        
    }

}
module.exports={cartAuthMiddleware}