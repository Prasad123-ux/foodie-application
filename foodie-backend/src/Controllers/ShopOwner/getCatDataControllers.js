// import { foodCategory } from "../../Modules/foodCategory"
const {foodCategory}= require('../../Modules/foodCategory')



const getCatDataController=(req, res)=>{
    

    foodCategory.find().exec()
    .then((user)=>{
        if(user!==null){
        res.status(200).json({success:true,message:"data received", catData:user})
        }else{
            res.status(500).json({success:false, message:"data not received"})
        }

    }).catch((err)=>{
        res.status(200).json({success:false, message:"data not found", error:err})

    })

}
module.exports={getCatDataController}