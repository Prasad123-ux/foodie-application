const jwt = require("jsonwebtoken")
const { Food } = require("../Modules/users")
const bcrypt= require('bcrypt')
const env= require('dotenv').config()

  
  
  const userRegisterController=(req, res)=>{
     console.log(req.body)
    const planePassword= req.body.password

    const saltRound= 10
    bcrypt.hash(planePassword, saltRound, (err, hash)=>{
    if(err){
        res.status(404).json({message:"data not hashed"})    

    }else{
    console.log(hash)
        req.body.password= hash
        const token=jwt.sign({email:req.body.email, role:req.body.role}, process.env.JWT_TOKEN, {expiresIn:"30d"})
        const foodObject= new Food(req.body)
foodObject.save().then(()=>{
    res.status(200).json({message:"data saved", token:token, role:"user"})
 



}).catch((e)=>{
    res.status(404).json({message:"data not saved", error:e})




})
    }
    


        
    
})
}
module.exports={userRegisterController}