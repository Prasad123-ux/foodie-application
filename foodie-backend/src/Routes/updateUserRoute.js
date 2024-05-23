
const express= require('express') 
const updateUserRoute=express.Router()
 const {cartAuthMiddleware}= require('../Middlewares/cartAuthMiddleware')
const { updateUserDetailcontroller } = require('../Controllers/updateUserDetailController')
// const { updateUserDetailController}= require('../Controllers/updateUserDetailController') 



updateUserRoute.post('/updateUserDetail', cartAuthMiddleware, updateUserDetailcontroller )



module.exports={updateUserRoute}

  
 