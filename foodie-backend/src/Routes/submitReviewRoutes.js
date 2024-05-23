const express= require('express')
const { submitReviewController } = require('../Controllers/submitReviewController')
const { ownerAuthMiddleWare } = require('../Middlewares/ownerAuthMiddleware')
// const { cartAuthMiddleware } = require('../Middlewares/cartAuthMiddleware')
const submitReviewRoute= express.Router() 




// submitReviewRoute('/submitReview', cartAuthMiddleware,submitReviewController)
submitReviewRoute.post('/submitReview',ownerAuthMiddleWare, submitReviewController)

module.exports={submitReviewRoute}