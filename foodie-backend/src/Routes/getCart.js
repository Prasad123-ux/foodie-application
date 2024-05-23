const express= require('express')
const { getCartController } = require('../Controllers/getCartController')
const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const getCart= express.Router() 





getCart.post('/getCart',cartAuthMiddleware, getCartController)

module.exports={getCart}
