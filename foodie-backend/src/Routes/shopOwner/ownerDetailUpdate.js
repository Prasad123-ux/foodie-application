const express= require('express')
const { ownerAuthMiddleWare } = require('../../Middlewares/ownerAuthMiddleware')
const { updateUserDetailcontroller } = require('../../Controllers/updateUserDetailController')
const { updateProfileController } = require('../../Controllers/ShopOwner/updateProfileController')
const  ownerDetailUpdateRoute=  express.Router()



ownerDetailUpdateRoute.post('/updateOwnerDetail',ownerAuthMiddleWare, updateProfileController)


module.exports={ownerDetailUpdateRoute}