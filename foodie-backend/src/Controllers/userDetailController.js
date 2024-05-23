const { Food } = require("../Modules/users")

const userDetailController= (req,res)=>{
    Food.findOne({email:req.email}).exec()
    .then((user)=>{
     if(user!==null){
        res.status(200).json({name:user.name, sirName:user.lastName, email:user.email, mobile_no:user.mobile_no, location:user.location})
     }else{
        res.status(404).json({message:"user not found"})

     }

    }).catch((err)=>{
        res.status(404).json({ message:"user not found"})
    })
}

module.exports={userDetailController}