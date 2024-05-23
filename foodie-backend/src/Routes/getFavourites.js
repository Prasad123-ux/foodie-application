const express= require('express')
const { getCartController } = require('../Controllers/getCartController')
const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const { getFavouriteController } = require('../Controllers/getFavouritesOrder')
const getFavourites= express.Router() 





getFavourites.post('/getFavourites',cartAuthMiddleware, getFavouriteController)

module.exports={getFavourites}
