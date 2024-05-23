const { addCartControllers } = require("../Controllers/addCartControllers")
const express= require('express')
const { cartAuthMiddleware } = require("../Middlewares/cartAuthMiddleware")
const addCartRoutes= express.Router()


addCartRoutes.post('/addCart',cartAuthMiddleware, addCartControllers)


module.exports={addCartRoutes}


