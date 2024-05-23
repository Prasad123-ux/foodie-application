// import { reviews } from "../Modules/review"


const { ProductData } = require('../Modules/Products')
const {Reviews}= require('../Modules/review')

const submitReviewController=(req, res)=>{
   console.log(req.body.id)
   
ProductData.findOne({_id:req.body.id}).exec()
.then((user)=>{
    console.log(user.product_email)
    if(user!==null){
        
        
        reviewObject= new Reviews({
            product_id:req.body.id,
            userMail:req.email,
            product_rating:req.body.rating,
            product_review:req.body.review,
            product_mail:user.product_email,
            product_name:user.product_name
        
        })
        reviewObject.save().then(()=>{
            console.log("review saved")
        res.status(200).json({success:true, message:"Your Review Saved"})
        
        }).catch((err)=>{
            console.log("product not found in productaDatas")
            res.status(404).json({success:false, message:"Your review not saved", err:err})
        
        
        })

    }


}).catch((err)=>{
    res.status(404).json({success:true, message:"There is some error", err:err})

})


}


module.exports={submitReviewController}