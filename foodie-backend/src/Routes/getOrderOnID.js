const express= require('express')
const { getOrderOnID } = require('../Controllers/getOrderOnID')
const getOrderOnIDRoute= express.Router()  




getOrderOnIDRoute.post('/getOrderOnID', getOrderOnID)

module.exports={getOrderOnIDRoute}