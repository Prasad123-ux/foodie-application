// import { foodFavourites } from "../Modules/foodFavourites"
const {foodFavourites}= require('../Modules/foodFavourites')


 const deleteFoodFavouriteController=(req, res)=>{

    foodFavourites.deleteOne({id:req.body.id}).exec()
    .then((item)=>{
        if(item!==null){
res.status(200).json({message:"data deleted"})

        }else{
            res.status(404).json({messasge:"data not deleted there is some problem"})
        }

    }).catch((err)=>{
        res.status(404).json({message:"data not deleted" ,err:err})

    })
 }

 module.exports={deleteFoodFavouriteController}