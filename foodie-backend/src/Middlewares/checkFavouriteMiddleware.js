const { foodFavourites } = require("../Modules/foodFavourites")

const checkFavouriteMiddleware=(req, res, next)=>{
    // console.log(req.body)

    foodFavourites.findOne({id:req.body.id}).exec()
    .then((user)=>{
        if(user===null){
             console.log(user)
            next()
        }
else{
    res.status(404).json({message:"item already added"})
}
    })
    .catch((err)=>{
        res.status(200).json({messaga:"data not found ",err:err})
        next()

    })
}

module.exports={checkFavouriteMiddleware}