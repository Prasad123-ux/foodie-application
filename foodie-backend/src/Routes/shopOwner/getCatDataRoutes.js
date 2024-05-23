const express= require('express')
const { getCatDataController } = require('../../Controllers/ShopOwner/getCatDataControllers')
const getCatDataRoute= express.Router() 



getCatDataRoute.post('/getCatData', getCatDataController)

module.exports={getCatDataRoute}