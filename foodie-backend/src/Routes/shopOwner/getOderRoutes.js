const express= require('express')
const { ownerAuthMiddleWare } = require('../../Middlewares/ownerAuthMiddleware')
const { getOrderController } = require('../../Controllers/ShopOwner/getOrderController')
const getShopOrderRoute= express.Router()



getShopOrderRoute.post('/getMyOrder', ownerAuthMiddleWare, getOrderController)


module.exports={getShopOrderRoute}
