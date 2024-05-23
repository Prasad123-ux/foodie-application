const express= require('express')
const { foodCategoryControllers } = require('../Controllers/foodCategoryController')
const foodCategoryRoutes= express.Router() 



foodCategoryRoutes.post('/foodCategory', foodCategoryControllers)

module.exports={foodCategoryRoutes}