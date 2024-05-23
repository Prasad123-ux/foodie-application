// import { ProductData } from "../../Modules/Products";
const {ProductData}= require('../../Modules/Products')

const getProductData=(req, res)=>{
    ProductData.find().exec()
    .then((user)=>{
        if(user!==null){
            res.status(200).json({success:true, message:user})
        }else{
            res.status(500).json({success:false, message:"Data not available"})
        }
        
    }).catch(()=>{
        res.status(500).json({success:false, message:"Data not available"})
    })
    
}
module.exports={getProductData}

