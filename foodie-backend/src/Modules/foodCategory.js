
const {mongoose}= require('../Config/db')



const foodCategorySchema= new mongoose.Schema({

    CategoryName:String
})

const foodCategory= mongoose.model('foodCategory', foodCategorySchema)

module.exports={foodCategory}
 