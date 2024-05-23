const express= require('express')
const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const { getUserDetail } = require('../Controllers/getUserDetailController')
const getUserDetailRoute= express.Router() 



getUserDetailRoute.post('/getUserDetail',cartAuthMiddleware,getUserDetail)



module.exports={getUserDetail}
