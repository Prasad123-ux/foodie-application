const express= require('express')
const { findReviewController } = require('../Controllers/findReviewController')
const findReviewRoutes= express.Router()



findReviewRoutes.post('/findReview', findReviewController)


module.exports={findReviewRoutes}




