const express=require('express')
const { updateLocationController } = require('../Controllers/updateLocationController')
const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const updateLocationRoutes= express.Router()



updateLocationRoutes.post('/updateUserLocation',cartAuthMiddleware ,updateLocationController)

module.exports={updateLocationRoutes}
