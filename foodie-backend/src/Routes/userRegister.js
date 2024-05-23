const express= require('express')
const { userRegisterController } = require('../Controllers/userRegister')
const { checkUserAlready } = require('../Middlewares/checkUserAlreadyMiddleware')
const userRegister= express.Router()



userRegister.post('/createUser', checkUserAlready ,userRegisterController)



module.exports={userRegister}