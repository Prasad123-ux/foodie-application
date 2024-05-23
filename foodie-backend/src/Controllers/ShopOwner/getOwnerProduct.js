const { ProductData } = require("../../Modules/Products")

const getOwnerProductController= (req, res)=>{

    ProductData.find({product_email:req.email}).exec()
    .then((user)=>{
        if(user!==null){
            console.log(user)
            res.status(200).json({success:true, message:"Data Found", data:user})
        }else{
            res.status(404).json({success:false, message:"Data Not Found"})
        }
    }).catch(()=>{
        res.status(404).json({success:false, message:"There is some Error", err:err})
    })
}


module.exports={getOwnerProductController}