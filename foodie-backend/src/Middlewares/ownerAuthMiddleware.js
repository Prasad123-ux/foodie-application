

const jwt= require('jsonwebtoken')
require('dotenv').config()

const ownerAuthMiddleWare=(req, res, next)=>{
  const  token=req.body.token
//  console.log(req.body)
  if(token===undefined){
    res.status(403).json({success:false,message:"Authentication Error: Please Register Yourself"})
  }else{
    const decoded=jwt.verify(token, process.env.JWT_TOKEN)
    req.user= decoded 
    req.email= decoded.email
    req.role= decoded.role
    
    if(req.role==="user"){
      // console.log("you are going")
        next()
    }else{
        res.status(403).json({success:false, message:'Unauthorized access'})
    }



  }
}


module.exports={ownerAuthMiddleWare}