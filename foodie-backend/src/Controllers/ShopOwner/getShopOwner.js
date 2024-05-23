// import { OwnerRegister } from "../../Modules/shopOwner/shopOwnerRegister"
const {OwnerRegister}= require('../../Modules/shopOwner/shopOwnerRegister')

const getShopOwnerController=(req, res)=>{
    

    OwnerRegister.findOne({email:req.email}).exec().then((user)=>{
        if(user!==null){
            res.status(200).json({success:true, message:"Login Suuccessfully", Data:user})
        }else{
            res.status(403).json({success:false, message:"user not found"})
        }

    }).catch(()=>{
        res.status(403).json({ success:false,message:"user not found "})
    })
}
module.exports={getShopOwnerController}