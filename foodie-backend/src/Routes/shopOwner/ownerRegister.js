

const express= require('express')
const { ownerRegisterController } = require('../../Controllers/ShopOwner/ownerRegisterController')
const { shopRegisterValidators } = require('../../Validators/shopOwner/shopRegister')
const ownerRegisterRoute=express.Router() 



ownerRegisterRoute.post('/ownerRegister',shopRegisterValidators, ownerRegisterController)

module.exports={ownerRegisterRoute}