const express= require('express')
const { loginController } = require('../Controllers/loginController')
const loginRouter= express.Router()



loginRouter.post('/userLogin', loginController)


module.exports={loginRouter}