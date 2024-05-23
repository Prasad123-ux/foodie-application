// import { OwnerRegister } from "../../Modules/shopOwner/shopOwnerRegister"
const { validationResult } = require('express-validator')
const {OwnerRegister}= require('../../Modules/shopOwner/shopOwnerRegister')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')

const ownerRegisterController=(req, res)=>{
    // console.log(req.body)
    const error= validationResult(req)
    if(!error.isEmpty()){
        res.status(403).json({error:error})
    }else{
        

        OwnerRegister.findOne({email:req.body.email}).exec()
        // console.log(user)
        .then((user)=>{
            console.log(user)
            if(user!==null){
                res.status(404).json({message:"user already registered"})
            }else{
                const salt=10
                bcrypt.hash(req.body.password, salt, (err, result)=>{
                    if(err){
                        res.status(403).json({message:"problem with validation"})
                    }else if(result){
                        req.body.password= result 
                        const ownerRegisterObject=new OwnerRegister(req.body)
                        ownerRegisterObject.save().then((user)=>{
                            const token=jwt.sign({email:req.body.email, role:user.body.role},process.env.JWT_TOKEN, {expiresIn:"30d"} )
                            res.status(200).json({message:"data saved", token:token})
                            console.log(user)
                        }).catch((err)=>{
                            res.status(422).json({message:"User not saved", error:err})
                            console.log(err)
                        })
                    }else{
                        res.status(500).json({message:"validation error"})
                    }

                })
               

            }

        })
    
    
}
}

module.exports={ownerRegisterController}