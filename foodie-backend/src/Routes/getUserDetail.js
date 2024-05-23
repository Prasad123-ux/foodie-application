const express= require('express')
const { userDetailController } = require('../Controllers/userDetailController')
const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const userDetail= express.Router()   

userDetail.post('/getUserDetail',cartAuthMiddleware, userDetailController)


module.exports={userDetail}