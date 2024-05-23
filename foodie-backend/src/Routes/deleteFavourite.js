

const express= require('express')
const { deleteFoodFavouriteController } = require('../Controllers/deleteFoodFavouriteController')
const deleteFavouriteRoute= express.Router() 




deleteFavouriteRoute.post('/deleteFavourite',deleteFoodFavouriteController)


module.exports={deleteFavouriteRoute}