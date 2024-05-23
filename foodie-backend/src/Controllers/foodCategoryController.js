// import { mongoose } from "../Config/db"
// const {mongoose} = require('../Config/db')

const { foodCategory } = require("../Modules/foodCategory")


const foodCategoryControllers=(req, res)=>{
    const foodCategoryObject=  new foodCategory (req.body)

    foodCategoryObject.save().then(()=>{
        res.status(200).json({message:"data saved"})
    }).catch(()=>{
        res.status(500).json({message:"data not saved"})
    })
}


module.exports={foodCategoryControllers}   