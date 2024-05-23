const express=require('express')
const { getOrderControllers } = require('../Controllers/getOrder')
const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const getOrderRoute=express.Router()




getOrderRoute.post('/getOrders',cartAuthMiddleware,getOrderControllers )


module.exports={getOrderRoute}