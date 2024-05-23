const express= require('express')
const { ownerAuthMiddleWare } = require('../Middlewares/ownerAuthMiddleware')
const { getShopOwnerDetail } = require('../Controllers/ShopOwner/getShopOwnerDetail')
const getShopOwnerDetailRoute= express.Router()



getShopOwnerDetailRoute.post('/getOwnerDetail',  ownerAuthMiddleWare, getShopOwnerDetail)


module.exports={getShopOwnerDetailRoute}