// const { model } = require('mongoose')
const {FoodOrders}= require('../Modules/orders')

const getOrderControllers= (req,res)=>{
    
    FoodOrders.find({user_email:req.email}).exec()
    .then((user)=>{
        if(user!==null){
            res.status(200).json({message:user})

        }else{
            res.status(500).json({message:"data not found"})

        }

    }).catch(()=>{
        res.status(500).json({message:"data not found"})
    })
}

module.exports={getOrderControllers}