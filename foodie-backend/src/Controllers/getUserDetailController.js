const { Food } = require("../Modules/users")

const getUserDetail=(req, res)=>{

Food.findOne({email:req.email}).exec()

.then((user)=>{
    console.log(user)
    if(user!==null){
    res.status(200).json({message:"data found" , data:user})
    }else{
        res.status(404).json({message:'data not found',})
    }

}).catch((err)=>{
    res.status(404).json({message:"data not found ", err:err})
})
}

module.exports={getUserDetail}