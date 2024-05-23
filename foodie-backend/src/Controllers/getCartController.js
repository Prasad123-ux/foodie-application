

const { FoodCart } = require("../Modules/cartData")

const getCartController= (req, res)=>{
    // console.log(req.body)
    FoodCart.find({email:req.email}).exec()
    .then((users)=>{
        if(users!==null)
        res.status(200).json({data :users})

    }).catch(()=>{
        res.status(404).json({message:"you didn't save anything yet"})
    })
    
    
    
}
module.exports={getCartController}