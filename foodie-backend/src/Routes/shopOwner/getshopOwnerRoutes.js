const express= require('express')
const { ownerAuthMiddleWare } = require('../../Middlewares/ownerAuthMiddleware')
const { getShopOwnerController } = require('../../Controllers/ShopOwner/getShopOwner')
const checkLoginRoute= express.Router()  

checkLoginRoute.post('/getShopOwnerDetail', ownerAuthMiddleWare, getShopOwnerController )

module.exports={checkLoginRoute}