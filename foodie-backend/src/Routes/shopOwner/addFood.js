const express= require('express')
const { uploadImagesMiddleware, uploadImageMiddleware } = require('../../Middlewares/uploadImagesMiddleware')
const { addFoodController } = require('../../Controllers/ShopOwner/addFoodController')
const addFood= express.Router()



addFood.post('/addFood',  addFoodController) 


module.exports={addFood}