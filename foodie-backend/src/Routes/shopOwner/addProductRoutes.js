const express= require('express')
const { addFoodController } = require('../../Controllers/ShopOwner/addFoodController')
const { addProductController } = require('../../Controllers/ShopOwner/addProductController')
const addProductRoutes= express.Router() 



addProductRoutes.post('/addProductData', addProductController)  

module.exports={addProductRoutes}