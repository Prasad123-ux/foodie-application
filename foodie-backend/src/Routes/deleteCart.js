const express= require('express')
const { deleteCartController } = require('../Controllers/deleteCartControllers')
const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const deleteCartRoutes= express.Router() 


deleteCartRoutes.post('/deleteCart',cartAuthMiddleware ,deleteCartController )


module.exports={deleteCartRoutes}