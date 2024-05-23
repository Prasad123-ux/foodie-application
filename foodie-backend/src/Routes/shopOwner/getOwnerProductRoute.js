const express= require('express')
const { ownerAuthMiddleWare } = require('../../Middlewares/ownerAuthMiddleware')
const { getOwnerProductController } = require('../../Controllers/ShopOwner/getOwnerProduct')
const getOwnerProductRoute= express.Router()   




getOwnerProductRoute.post('/getOwnerProduct',ownerAuthMiddleWare, getOwnerProductController )


module.exports={getOwnerProductRoute}