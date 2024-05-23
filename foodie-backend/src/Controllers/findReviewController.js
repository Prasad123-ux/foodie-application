const { Reviews } = require("../Modules/review")

const findReviewController=(req,res)=>{
    const id= req.body.id
    Reviews.find({product_id:id}).exec()
    .then((user)=>{
        if(user!==null){
            res.status(200).json({success:true, message:user})
        }else{
            res.status(404).json({success:false, message:'Reviews not Found'})
        }

    }).catch((err)=>{
        res.status(404).json({success:false, message:"Here is some error", err:err})

    })
}


module.exports={findReviewController}