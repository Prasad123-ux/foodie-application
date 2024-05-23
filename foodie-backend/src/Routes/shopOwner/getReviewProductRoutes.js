const express= require('express')
const { ownerAuthMiddleWare } = require('../../Middlewares/ownerAuthMiddleware')
const { getReviewProductDataController } = require('../../Controllers/ShopOwner/getReviewProductData')
const getReviewProductRoute= express.Router()



getReviewProductRoute.post('/getReviewProduct', ownerAuthMiddleWare, getReviewProductDataController)

module.exports={getReviewProductRoute}