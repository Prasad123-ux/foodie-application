const express= require('express')
const { setOrderController } = require('../Controllers/setOrderControllers')
const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const setOrderRoute=express.Router()




setOrderRoute.post('/setOrders',cartAuthMiddleware, setOrderController)

module.exports={setOrderRoute}

