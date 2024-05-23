const express= require('express')
const { getProductData } = require('../../Controllers/ShopOwner/ProductDisplayControllers')
const getProductDataRoute=express.Router()  
  

getProductDataRoute.post('/getProductData', getProductData)


module.exports={getProductDataRoute}