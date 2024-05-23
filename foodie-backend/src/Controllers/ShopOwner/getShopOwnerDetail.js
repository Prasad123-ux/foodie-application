// import { OwnerRegister } from "../../Modules/shopOwner/shopOwnerRegister"
const {OwnerRegister} = require('../../Modules/shopOwner/shopOwnerRegister')
const getShopOwnerDetail=(req, res)=>{
     

    console.log(req.body)
    console.log(req.email)
OwnerRegister.findOne({email:req.email}).exec()
// console.log(user)
.then((user)=>{
    console.log(user)
    if(user!==null){
        // console.log(user)
        res.status(200).json({ success:true,  data:user})
    }else{
        res.status(404).json({ success:false, message:"data not found"})
    }

})
.catch((err)=>{
    res.status(404).json({success:false, message:"data not saved", err:err})

})


}
module.exports={getShopOwnerDetail}