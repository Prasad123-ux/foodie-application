
const { OwnerRegister } = require("../../Modules/shopOwner/shopOwnerRegister")

// console.log(req.body.userDetail.location)

const updateProfileController= (req, res)=>{

    console.log(req.body.userDetail)

    OwnerRegister.findOneAndUpdate({email:req.email}, {
        shopName:req.body.userDetail.shopName,
        mobile_no:req.body.userDetail.mobile_no,
        address:req.body.userDetail.location

    }, {new:true}).exec()

    .then((user)=>{
        console.log(user)
        if(user!==null){
         res.status(200).json({ success:true,message:"User Data Updated Successfully"})

        }else{
            res.status(200).json({ success:false, message:"User Data Could Not Be Updated Successfully"})
        }
    }).catch((err)=>{
         res.status(404).json({message:"Data Not Found", err:err})
        
     })
}
module.exports={updateProfileController}  




