const express= require('express')
const { ownerAuthMiddleWare } = require('../../Middlewares/ownerAuthMiddleware')
const { updateShopDetailController } = require('../../Controllers/ShopOwner/updateShopDetailController')
const updateShopDetailRoute= express.Router()  



updateShopDetailRoute.post('/updateShopDetail',ownerAuthMiddleWare, updateShopDetailController )

module.exports={updateShopDetailRoute}
