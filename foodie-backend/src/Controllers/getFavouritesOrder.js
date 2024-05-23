

// const { FoodCart } = require("../Modules/cartData")

const { foodFavourites } = require("../Modules/foodFavourites")

const getFavouriteController= (req, res)=>{
    // console.log(req.body)
    foodFavourites.find({email:req.email}).exec()
    .then((users)=>{
        if(users!==null)
        res.status(200).json({data :users})

    }).catch(()=>{
        res.status(404).json({message:"you didn't buy anything yet"})
    })
    
    
    
}
module.exports={getFavouriteController}