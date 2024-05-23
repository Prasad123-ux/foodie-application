const { Reviews } = require("../../Modules/review")

const getReviewProductDataController=(req, res)=>{
    req.body 
    Reviews.find({product_mail:req.email}).exec()
    .then((user)=>{
        if(user){
            res.status(200).json({success:true,data:user})
        }else{
            res.status(404).json({success:false ,message:"Data not found"})
        }
        
    }).catch((err)=>{
        res.status(404).json({success:false, message:"Data not found" , err:err})

    })
}

module.exports={getReviewProductDataController} 
