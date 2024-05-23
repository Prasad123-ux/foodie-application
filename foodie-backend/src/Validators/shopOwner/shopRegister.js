// import { check } from "express-validator";
// import { model } from "mongoose";
const {check}= require('express-validator')


shopRegisterValidators=[
    check('email', 'Please enter valid Email').isEmail(),
    check('mobile_no', 'Please enter valid mobile Number').isMobilePhone(),
    check('password',"Please enter alphanumeric password").isStrongPassword(),
    // check('shopName',"Shop name should not be empty").isEmpty(),
    // check('address', 'shop address should not be empty').isEmpty(),
    // check('city', 'city should not be empty').isEmpty(),
    // check('state', 'state address should not be empty').isEmpty(),
    check('zip', 'enter valid zip number').isNumeric(),
    check('pan', ' enter valid pan number ').isAlphanumeric().isLength(10),
    check('gstin', ' enter valid gstin number ').isAlphanumeric().isLength(15),
    // check('bankName', 'enter a valid bank name').isEmpty(),
    check('IFSC', 'enter a valid ifsc code ').isAlphanumeric()





]


module.exports={shopRegisterValidators}
