// import { OwnerRegister } from "../../Modules/shopOwner/shopOwnerRegister"
const {OwnerRegister}=require ('../../Modules/shopOwner/shopOwnerRegister')

const updateShopDetailController=(req, res)=>{

    
OwnerRegister.findOneAndUpdate({email:req.email}, {
    shopName:req.body.data.shopName,
    name:req.body.data.ownerName,
    mobile_no:req.body.data.mobileNumber,
    contact_no:req.body.data.contactNumber,
    Phone_no:req.body.data.phoneNumber,
    address:req.body.data.location,
    city:req.body.data.city,
    state:req.body.data.state,
    zip:req.body.data.zipPin

}, {new:true}).exec()
.then((user)=>{
    
    if(user!==null){
        res.status(200).json({message:"Data Saved"})
    }else{
        res.status(404).json({message:"Data Not Saved"})
    }

}).catch((err)=>{
    res.status(404).json({message:"There is some problem while data storing", err:err})
})
}


module.exports={updateShopDetailController}